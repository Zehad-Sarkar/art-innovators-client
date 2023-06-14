/* eslint-disable no-unused-vars */
import useClass from "../../hooks/useClass";
import ClassesTable from "./ClassesTable";
import useAuth from "../../hooks/useAuth";

const Classes = () => {
  const [classes] = useClass();
  const [users] = useAuth();

  //select event handler to stored selected class
  const handleSelect = (item) => {
    const sendItems = {
      email: users?.email,
      price: item?.price,
      name: item?.name,
      classesName: item?.classesName,
      seats: item?.seats,
      classId: item?._id,
      image: item?.image,
    };
    //classes replace by allClasses
    fetch(`https://art-innovators-server.vercel.app/classes`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sendItems),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });
  };

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
            <th>Action</th>
          </tr>
        </thead>
        {/* body */}
        <tbody>
          {classes.map((item, i) => (
            <ClassesTable
              key={i}
              items={item}
              i={i}
              user={users}
              handleSelect={handleSelect}
            ></ClassesTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Classes;
