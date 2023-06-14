import Swal from "sweetalert2";
import useMyClasses from "../../../../hooks/useMyClasses";
import MyClassTable from "./MyClassTable";
import axios from "axios";
import { Link } from "react-router-dom";

const MyClass = () => {
  const [classes, refetch] = useMyClasses();
  const total = classes.reduce((sum, p) => sum + p.price, 0);

  // handle delete a selected class 
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure want to delete it?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://art-innovators-server.vercel.app/myclass/delete/${item._id}`
          )
          .then((res) => {
            console.log("delete", res.data);
            if (res.data?.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <>
      <div className="flex items-center justify-around">
        <p className="mr-40">Total: {total}</p>
        <Link to="/dashboard/payment">
          <button className="btn hover:bg-slate-500">Pay</button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
        
          <thead>
            <tr>
              <th>Sl</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Available Seat</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            {classes.map((item, i) => (
              <MyClassTable
                key={i}
                items={item}
                i={i}
                handleDelete={handleDelete}
              ></MyClassTable>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyClass;
