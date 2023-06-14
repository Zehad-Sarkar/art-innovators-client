import SectionTitle from "../../../components/SectionTitle";
import ClassesCard from "../PopularClasses/ClassesCard";
import useClass from "../../../hooks/useClass";

const InstructorClasses = () => {
  const [classes] = useClass();
  const sliceClass = classes.slice(0, 6);

  return (
    <div>
      <SectionTitle title="Instructor Classes" />
      <div className="grid grid-cols-3 gap-4">
        {sliceClass.map((item, i) => (
          <ClassesCard key={i} items={item}></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default InstructorClasses;
