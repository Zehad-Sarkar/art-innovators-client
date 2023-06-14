/* eslint-disable react/prop-types */

const ClassesCard = ({ items }) => {
  return (
    <div className="shadow-xl card bg-base-100">
      <figure className="px-10 pt-10">
        <img src={items?.image} className="w-full h-48 rounded-xl" />
      </figure>
      <div className="items-center text-center card-body">
        <h2 className="card-title">Instructor: {items?.name}</h2>
        <p>Class Name: {items?.classesName}</p>
        <p>Seats: {items?.seats}</p>
       
      </div>
    </div>
  );
};

export default ClassesCard;
