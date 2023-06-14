import { useQuery } from "@tanstack/react-query";

const useClass = () => {
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch(
        "https://art-innovators-server.vercel.app/allClasses"
      );
      return res.json();
    },
  });
  return [classes, refetch];
};

export default useClass;
