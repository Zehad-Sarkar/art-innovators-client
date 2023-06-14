import Courses from "../Courses/Courses";
import InstructorClasses from "../InstructorClasses/InstructorClasses";
import PopularClasses from "../PopularClasses/PopularClasses";
import TopSlider from "../TopSlider/TopSlider";

const Home = () => {
  return (
    <div>
      <TopSlider></TopSlider>
      <PopularClasses />
      <InstructorClasses />
      {/* there will be an extra section */}
      <Courses />
    </div>
  );
};

export default Home;
