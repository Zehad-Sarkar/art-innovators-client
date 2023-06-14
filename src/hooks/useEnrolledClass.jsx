import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useEnrolledClass = () => {
  const { user, loading } = useContext(AuthContext);
  const { data: enrolledClasses = [], refetch } = useQuery({
    queryKey: ["enrolledClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `https://art-innovators-server.vercel.app/enrolledClasses?email=${user?.email}`
      );
      return res.data;
    },
  });
  return [enrolledClasses, refetch];
};

export default useEnrolledClass;
