import useEnrolledClass from "../../../../hooks/useEnrolledClass";
import EnrolledClassTable from "./EnrolledClassTable";

const EnrolledClass = () => {
  const [enrolledClasses] = useEnrolledClass();
  return (
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>Sl</th>
          <th>Class Name</th>
          <th>Instructor</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        {enrolledClasses.map((item, i) => (
          <EnrolledClassTable
            key={item._id}
            items={item}
            i={i}
          ></EnrolledClassTable>
        ))}
      </tbody>
    </table>
  );
};

export default EnrolledClass;
