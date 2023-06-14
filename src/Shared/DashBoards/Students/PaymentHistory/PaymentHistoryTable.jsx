/* eslint-disable react/prop-types */
const PaymentHistoryTable = ({ items, i }) => {
  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <img src={items?.image} alt="loading faild" className="w-12" />
      </td>
      <td>
        {items?.className.map((cl, i) => (
          <li key={i}>{cl}</li>
        ))}
      </td>
      <td>
        {items?.instructorName.map((ins, i) => (
          <li key={i}>{ins}</li>
        ))}
      </td>
      <td>{items?.seats}</td>
      <td>{items?.price}</td>
    </tr>
  );
};

export default PaymentHistoryTable;
