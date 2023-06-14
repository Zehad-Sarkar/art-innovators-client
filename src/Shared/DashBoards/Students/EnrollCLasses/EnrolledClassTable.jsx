/* eslint-disable react/prop-types */
const EnrolledClassTable = ({ items, i }) => {
  return (
    <tr>
      <th>{i + 1}</th>

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

      <td>{items?.price}</td>
    </tr>
  );
};

export default EnrolledClassTable;
