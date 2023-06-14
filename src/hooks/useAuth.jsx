import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAuth = () => {
  // get user
  const { user, loading } = useContext(AuthContext);
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `https://art-innovators-server.vercel.app/users?email=${user?.email}`
      );
      return res.data;
    },
  });

  return [users, refetch, loading];
};

export default useAuth;
