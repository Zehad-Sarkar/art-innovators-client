/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const InsMyClassTable = ({ items, i }) => {
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
        {/*todo status will be pending/approved/denied */}
        <button className="btn hover:bg-slate-500">pending</button>
      </td>
      <td>
        <Link to={`/dashboard/updateClass/${items._id}`}>
          <button className="btn hover:bg-slate-500">update</button>
        </Link>
      </td>
    </tr>
  );
};

export default InsMyClassTable;
