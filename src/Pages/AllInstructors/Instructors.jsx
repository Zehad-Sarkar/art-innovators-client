import useClass from "../../hooks/useClass";
import InstructorTable from "./InstructorTable";

const Instructors = () => {
  const [classes] = useClass();
  return (
    <div className="grid gap-4 m-2 lg:grid-cols-3 md:grid-cols-2">
      {classes.map((item, i) => (
        <InstructorTable key={i} items={item} i={i}></InstructorTable>
      ))}
    </div>
  );
};

export default Instructors;
