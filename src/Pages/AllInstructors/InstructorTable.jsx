const InstructorTable = ({ items }) => {
  return (
    <div className="shadow-xl card bg-base-100">
      <figure className="px-10 pt-10">
        <img src={items?.image} className="h-32 rounded-xl" />
      </figure>
      <div className="items-center text-center card-body">
        <h2>Instructor Name: {items?.name}</h2>
        <h2>Instructor email: {items?.email}</h2>
        <h2>Class Name: {items?.classesName}</h2>
        <div className="card-actions">
          <button className="btn hover:bg-slate-500">See All</button>
        </div>
      </div>
    </div>
  );
};

export default InstructorTable;
