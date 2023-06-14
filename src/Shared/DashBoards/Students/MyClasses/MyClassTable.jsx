/* eslint-disable react/prop-types */
import { FaTrash } from "react-icons/fa";

const MyClassTable = ({ items, i, handleDelete }) => {
  console.log(items);
  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <img src={items?.image} alt="" className="w-12" />
      </td>
      <td>{items?.classesName}</td>
      <td>{items?.name}</td>
      <td>{items?.seats}</td>
      <td>{items?.price}</td>
      <td>
        <button
          className="hover:bg-slate-500 btn"
          onClick={() => handleDelete(items)}
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default MyClassTable;
