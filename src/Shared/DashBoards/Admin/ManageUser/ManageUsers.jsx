import axios from "axios";
import useManageUser from "../../../../hooks/useManageUser";
import ManageUsersTable from "./ManageUsersTable";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [users, refetch] = useManageUser();

  if (!users) {
    return;
  }

  //event handler for make admin
  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to update ${user?.name} as an admin?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(
            `https://art-innovators-server.vercel.app/makeAdmin/${user._id}`,
            user
          )
          .then((res) => {
            if (res?.data?.modifiedCount) {
              refetch();
              Swal.fire(
                "Updated!",
                `now ${user?.name} is an admin.`,
                "success"
              );
            }
          });
      }
    });
  };
  //event handler for make instructor
  const handleMakeInstructor = (user) => {
    Swal.fire({
      title: "Are you sure ?",
      text: `You want to update ${user?.name} as an instructor?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(
            `https://art-innovators-server.vercel.app/makeInstructor/${user._id}`
          )
          .then((res) => {
            if (res?.data?.modifiedCount) {
              refetch();
              Swal.fire(
                "Updated!",
                `now ${user?.name} is an instructor.`,
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Sl</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        {/* body */}
        <tbody>
          {users.map((item, i) => (
            <ManageUsersTable
              key={item._id}
              items={item}
              i={i}
              handleMakeAdmin={handleMakeAdmin}
              handleMakeInstructor={handleMakeInstructor}
            ></ManageUsersTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
