import Loading from "../../../components/Loading";
import SectionTitle from "../../../components/SectionTitle";
import useClass from "../../../hooks/useClass";
import ClassesCard from "./ClassesCard";

const PopularClasses = () => {
  //loading state
  <Loading></Loading>;

  const [classes] = useClass();
  const sliceClass=classes.slice(0,6)

  return (
    <>
      <SectionTitle title="Popular Classes" />
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2">
        {sliceClass.map((item, i) => (
          <ClassesCard key={i} items={item}></ClassesCard>
        ))}
      </div>
    </>
  );
};

export default PopularClasses;
