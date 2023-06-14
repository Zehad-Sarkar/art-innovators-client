import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Loading = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
};

export default Loading;
