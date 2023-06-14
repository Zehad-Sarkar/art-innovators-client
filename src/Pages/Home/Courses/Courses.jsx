import SectionTitle from "../../../components/SectionTitle";
import Marquee from "react-fast-marquee";

const Courses = () => {
  const allCourses = [
    "Art",
    "Painting",
    "Craft",
    "Photography",
    "Drawing",
    "3D-Art",
  ];
  return (
    <div className="grid items-center justify-center m-auto mb-4">
      <SectionTitle title="All Classes"></SectionTitle>
      <div className="gap-8 md:gap-3 md:flex">
        {allCourses.map((course, i) => (
          <div
            key={i}
            className="p-3 text-center rounded w-36 bg-slate-400 hover:font-extrabold hover:text-white"
          >
            {course}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
