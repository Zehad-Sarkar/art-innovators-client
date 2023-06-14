import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

//use manage hooks for load all users for admin manage users
const useManageUser = () => {
  const { loading } = useContext(AuthContext);
  const { data: users = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        "https://art-innovators-server.vercel.app/allUsers"
      );

      return res.data;
    },
  });
  return [users, refetch];
};

export default useManageUser;
