import ManageClassTable from "./ManageClassTable";
import useManageClass from "../../../../hooks/useManageClass";

//admin dashboard manage class
const ManageClass = () => {
  const [manageClasses] = useManageClass();
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Sl</th>
            <th>Image</th>
            <th>Class Name</th>
            <th>Instructor</th>
            <th>Email</th>
            <th>Available Seat</th>
            <th>Price</th>
            <th>Status</th>
            <th>action</th>
          </tr>
        </thead>
        {/* body */}
        <tbody>
          {manageClasses.map((item, i) => (
            <ManageClassTable
              key={item._id}
              items={item}
              i={i}
            ></ManageClassTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClass;
