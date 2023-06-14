import axios from "axios";
import useManageClass from "../../../../hooks/useManageClass";

const Feedback = () => {
  const [manageClasses] = useManageClass();
  const { name, email, _id, classesName } = manageClasses[0];
  const handleFeedback = (e) => {
    e.preventDefault();
    const feedback = e.target.feedback.value;
    axios
      .post("https://art-innovators-server.vercel.app/feedback", {
        instructorName: name,
        email: email,
        ClassId: _id,
        classesName: classesName,
        feedback,
      })
      .then((res) => {
        // console.log(res.data);
      });
  };
  return (
    <div>
      <form onSubmit={handleFeedback} className="w-96">
        <input
          type="text"
          name="feedback"
          className="block h-32 text-center border w-96"
          placeholder="write feedback"
        ></input>
        <input
          type="submit"
          value="Feedback"
          className="w-full hover:bg-slate-500"
        />
      </form>
    </div>
  );
};

export default Feedback;
