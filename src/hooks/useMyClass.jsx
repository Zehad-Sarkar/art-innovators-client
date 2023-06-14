import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

//this hooks for instructor my class pages

const useMyClass = () => {
  const { user, loading } = useContext(AuthContext);
  const { data: myAllClasses = [], refetch } = useQuery({
    queryKey: ["myAllClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `https://art-innovators-server.vercel.app/myclass?email=${user?.email}`
      );
      return res.data;
    },
  });
  return [myAllClasses, refetch];
};

export default useMyClass;
