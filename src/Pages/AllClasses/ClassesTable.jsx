/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ClassesTable = ({ i, items, user, handleSelect }) => {
  return (
    <tr
      className={
        items?.seats == 0 && items?.seats == 0 ? "bg-red-400" : "hover"
      }
    >
      <th>{i + 1}</th>
      <td>
        <img src={items?.image} alt="" className="w-12" />
      </td>
      <td>{items?.classesName}</td>
      <td>{items?.name}</td>
      <td>{items?.seats}</td>
      <td>{items?.price}</td>
      <td>
        {user ? (
          <button
            onClick={() => handleSelect(items)}
            disabled={
              user?.role === "admin" ||
              user?.role === "instructor" ||
              items?.seats == 0
            }
          >
            Select
          </button>
        ) : (
          <Link to="/login">login</Link>
        )}
      </td>
    </tr>
  );
};

export default ClassesTable;
