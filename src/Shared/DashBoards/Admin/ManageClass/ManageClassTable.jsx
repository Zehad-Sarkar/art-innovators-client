/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ManageClassTable = ({ items, i }) => {
  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <img src={items?.image} alt="" className="w-12" />
      </td>
      <td>{items?.classesName}</td>
      <td>{items?.name}</td>
      <td>{items?.email}</td>
      <td>{items?.seats}</td>
      <td>{items?.price}</td>
      <td>
        <button>Pending</button>
      </td>
      <td>
        <Link items={items} to={`/dashboard/feedback/${items._id}`}>
          <button>Feedback</button>
        </Link>
      </td>
    </tr>
  );
};

export default ManageClassTable;
