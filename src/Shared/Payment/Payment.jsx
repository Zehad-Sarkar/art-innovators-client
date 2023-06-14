/* eslint-disable react/jsx-key */
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useMyClasses from "../../hooks/useMyClasses";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_SECRET);
const Payment = () => {
  const [classes] = useMyClasses();

  const payAmounts = classes.reduce((sum, pay) => sum + pay.price, 0);

  return (
    <div>
      <h1 className="text center texl-4xl">pay for your chooses Classes</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm classes={classes} price={payAmounts} />
      </Elements>
    </div>
  );
};

export default Payment;
