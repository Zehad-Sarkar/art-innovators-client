import useMyClass from "../../../../hooks/useMyClass";
import InsMyClassTable from "./insMyClassTable";

const InsMyClass = () => {
  const [myAllClasses] = useMyClass();

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
            <th>Available Seat</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {/* body */}
        <tbody>
          {myAllClasses.map((item, i) => (
            <InsMyClassTable key={i} items={item} i={i}></InsMyClassTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InsMyClass;
