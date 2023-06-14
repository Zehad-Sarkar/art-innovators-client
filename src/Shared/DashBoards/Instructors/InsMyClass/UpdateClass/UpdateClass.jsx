import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../../Provider/AuthProvider";
import { useParams } from "react-router-dom";
import axios from "axios";

const img_hosting_secret = import.meta.env.VITE_IMG_HOSTING;

const UpdateClass = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //image hosting url
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_secret}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const imgURL = imgData.data.display_url;
          const newUpdates = {
            // name: user.displayName,
            // email: user.email,
            price: parseFloat(data.price),
            classesName: data.classesName,
            image: imgURL,
            seats: data.seats,
          };
          axios
            .patch(
              `https://art-innovators-server.vercel.app/dashboard/updateClass/${id}`,
              newUpdates
            )
            .then((res) => {
              console.log(res);
              return res.data;
            });
        }
      });
  };
  return (
    <>
      <div className="p-4 text-center border">
        <div className="mt-3 text-4xl font-extrabold">Add a Class</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" form-control">
            <label className="label">
              <span className=" label-text">Instructor Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              name="name"
              defaultValue={user?.displayName}
              readOnly
              className="input input-bordered"
            />
          </div>
          <div className=" form-control">
            <label className="label">
              <span className=" label-text">Instructor Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              name="email"
              defaultValue={user?.email}
              readOnly
              className="input input-bordered"
            />
          </div>

          <div className=" form-control">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="text"
              {...register("classesName", {
                required: true,
              })}
              name="classesName"
              placeholder="class name"
              className="input input-bordered"
            />

            {errors.classesName && <span>Class name is required</span>}
          </div>
          <div className=" form-control">
            <label className="label">
              <span className=" label-text">Seats Number </span>
            </label>
            <input
              type="number"
              {...register("seats", {
                required: true,
              })}
              name="seats"
              placeholder="number of seats"
              className="input input-bordered"
            />

            {errors.seats && <span>Seats is required</span>}
          </div>
          <div className=" form-control">
            <label className="label">
              <span className=" label-text">Price</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              name="price"
              placeholder="class price "
              className="input input-bordered"
            />
            {errors.seats && <span>Price is required</span>}
          </div>

          <div className=" form-control">
            <label className="label">
              <span className="label-text">Class Image</span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered"
            />
          </div>

          <input
            className=" hover:bg-slate-500"
            type="submit"
            value="Update Class"
          />
        </form>
      </div>
    </>
  );
};

export default UpdateClass;
