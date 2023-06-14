import usePaymentHistory from "../../../../hooks/usePaymentHistory";
import PaymentHistoryTable from "./PaymentHistoryTable";

const PaymentHistory = () => {
  const [paymentHistory] = usePaymentHistory();
  return (
    <table className="table">
     
      <thead>
        <tr>
          <th>Sl</th>
          <th>Image</th>
          <th>Class Name</th>
          <th>Instructor</th>
          <th>Available Seat</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        {paymentHistory.map((item, i) => (
          <PaymentHistoryTable
            key={item._id}
            items={item}
            i={i}
          ></PaymentHistoryTable>
        ))}
      </tbody>
    </table>
  );
};

export default PaymentHistory;
