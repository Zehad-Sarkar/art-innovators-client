import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useManageClass = () => {
  const { data: manageClasses = [], refetch } = useQuery({
    queryKey: ["manageClasses"],
    queryFn: async () => {
      const res = await axios.get(
        "https://art-innovators-server.vercel.app/manageClasses"
      );
      return res.data;
    },
  });
  return [manageClasses, refetch];
};

export default useManageClass;
