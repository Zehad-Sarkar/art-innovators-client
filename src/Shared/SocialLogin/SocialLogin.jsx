import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;

        const saveUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        fetch("https://art-innovators-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="divider"></div>
      <div className="w-full my-4 text-center bg-slate-500 hover:bg-purple-600">
        <button
          onClick={handleGoogleLogin}
          className="w-full px-1 rounded-md hover:bg-slate-500 btn bg-slate-600"
        >
          <FaGoogle className="text-2xl text-white "></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
