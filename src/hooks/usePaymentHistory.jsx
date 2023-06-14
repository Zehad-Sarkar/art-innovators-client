import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const usePaymentHistory = () => {
  const { user, loading } = useContext(AuthContext);
  const { data: paymentHistory = [], refetch } = useQuery({
    queryKey: ["paymenthistory", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `https://art-innovators-server.vercel.app/paymentHistory?email=${user?.email}`
      );
      return res.data;
    },
  });
  return [paymentHistory, refetch];
};

export default usePaymentHistory;
