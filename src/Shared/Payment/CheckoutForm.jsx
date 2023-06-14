/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import "./CheckoutForm.css";

const CheckoutForm = ({ classes, price }) => {
  const [cardError, setCardError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useContext(AuthContext);
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  //payment api
  useEffect(() => {
    axios
      .post("https://art-innovators-server.vercel.app/create-payment-intent", {
        price,
      })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [price]);

  //payment handle submit/ checkout  //pay for student selected class
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);

    //payment intent payment details here
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unKnown",
            email: user?.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
    }
    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        name: user?.displayName,
        email: user?.email,
        transactionId: paymentIntent.id,
        date: new Date().toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        price,
        className: classes.map((classs) => classs?.classesName),
        instructorName: classes.map((classs) => classs?.name),
        classesId: classes.map((classs) => classs._id),
        status: "successfull",
      };
      axios
        .post("https://art-innovators-server.vercel.app/payments", payment)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire("payment successfull");
          }
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-96">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="w-32 mt-2 text-black hover:bg-slate-500"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="mt-3 text-red-600">{cardError}</p>}
      {transactionId && (
        <p className="mt-3 text-green-600">
          Transaction Completed with transaction id: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
