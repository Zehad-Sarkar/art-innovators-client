import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useContext, useRef } from "react";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";

const image_hosting_secret = import.meta.env.VITE_IMG_HOSTING;

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_secret}`;
  const onSubmit = (data) => {
    //create a user
    let imgURL;
    createUser(data.email, data.password)
      .then((res) => {
        const signupUser = res.user;
        //photo url
        const formData = new FormData();
        formData.append("image", data.image[0]);
        fetch(img_hosting_url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              imgURL = data.data.display_url;
            }
          });
        //photourl end

        const userData = {
          name: data?.name,
          email: data?.email,
          imgURL,
        };
        updateUserProfile(data.name, imgURL).then(() => {
          //Data stored on mongodb
          axios
            .post("https://art-innovators-server.vercel.app/users", userData)
            .then((res) => {
              if (res.data?.insertedId) {
                //todo
              }
            });
        });
        navigate("/");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
  return (
    <div className="p-4 mx-auto border-2 w-96">
      <div className="text-4xl font-bold">Please Register</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-1 form-control">
          <label className="label">
            <span className=" label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            name="name"
            placeholder="name"
            className="input input-bordered"
          />
          {errors.name && (
            <span className="text-red-400">Name is required</span>
          )}
        </div>
        <div className="p-1 form-control">
          <label className="label">
            <span className=" label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            name="email"
            placeholder="email"
            className="input input-bordered"
          />
          {errors.email && (
            <span className="text-red-400">Email is required</span>
          )}
        </div>

        <div className="p-1 mt-2 form-control">
          <label className="label">
            <span className=" label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: true,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
              minLength: 6,
            })}
            name="password"
            placeholder="password"
            className="input input-bordered"
          />

          {errors.password && (
            <span className="text-red-400">Password is required</span>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-400">Password must be 6 characters</p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-400">
              Password must have one Uppercase and one special character.
            </p>
          )}
        </div>
        <div className="p-1 mt-2 form-control">
          <label className="label">
            <span className=" label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: true,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
              minLength: 6,
              validate: (value) =>
                value === password.current || "Passwords do not match",
            })}
            name="confirmPassword"
            placeholder="password"
            className="input input-bordered"
          />

          {errors.confirmPassword && (
            <span className="text-red-400">
              {errors.confirmPassword.message}
            </span>
          )}
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
          {errors.image && (
            <span className="text-gray-50">Photo Url is required</span>
          )}
        </div>

        <input className="hover:bg-slate-500" type="submit" value="Sign Up" />
      </form>
      <div className="text-center ">
        <p>
          Allready have an account?go to
          <Link to="/login" className="ml-1 text-blue-400">
            login
          </Link>
        </p>
      </div>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignUp;
