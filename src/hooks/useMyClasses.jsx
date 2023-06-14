import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useMyClasses = () => {
  const { user, loading } = useContext(AuthContext);

  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `https://art-innovators-server.vercel.app/myclasses?email=${user?.email}`
      );
      return res.data;
    },
  });
  return [classes, refetch];
};

export default useMyClasses;
