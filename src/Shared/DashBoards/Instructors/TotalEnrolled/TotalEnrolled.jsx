import { useEffect, useState } from "react";
import axios from "axios";
import TotalEnrolledNumberTable from "./TotalEnrolledNumberTable";

const TotalEnrolled = () => {
  const [enrollNumber, setEnrollNumber] = useState([]);

  useEffect(() => {
    axios
      .get("https://art-innovators-server.vercel.app/enrolledNumber")
      .then((res) => setEnrollNumber(res.data));
  }, []);
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
            <th>Total Enroll</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        {/* body */}
        <tbody>
          {enrollNumber.map((item, i) => (
            <TotalEnrolledNumberTable
              key={i}
              items={item}
              enrollNumber={enrollNumber}
              i={i}
            ></TotalEnrolledNumberTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TotalEnrolled;
