/* eslint-disable react/prop-types */
const TotalEnrolledNumberTable = ({ items, i, enrollNumber }) => {
  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <img src={items?.image} alt="" className="w-12" />
      </td>
      <td>
        {items?.className.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </td>
      <td>
        {items?.instructorName.map((ins, i) => (
          <li key={i}>{ins}</li>
        ))}
      </td>

      <td>{enrollNumber?.length}</td>
      <td>{items?.price}</td>
      <td>
        <button>pending</button>
      </td>
    </tr>
  );
};

export default TotalEnrolledNumberTable;
