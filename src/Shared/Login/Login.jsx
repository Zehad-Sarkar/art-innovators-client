import { useForm } from "react-hook-form";
import { FaRegEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signInUser(data.email, data.password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const handleHideShow = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="p-4 m-2 mx-auto border-2 w-96">
      <div className="login-header">Please Login</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-1 form-control">
          <label className="label">
            <span className=" label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            name="email"
            placeholder="email"
            className="input input-bordered"
          />
          {errors.email && (
            <span className="text-red-400">Email is required</span>
          )}
        </div>

        <div className="p-1 mt-2 form-control">
          <label className="label">
            <span className=" label-text">Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", { required: true })}
            name="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered"
          />
          <FaRegEye
            onClick={handleHideShow}
            className="mt-3 text-3xl "
          ></FaRegEye>
          {errors.password && (
            <span className="text-red-400">Password is required</span>
          )}
        </div>

        <input className="hover:bg-slate-500" type="submit" value="Login" />
      </form>
      {/* redirect register page */}
      <div className="text-center ">
        <p>
          Don't have an account? go to
          <Link to="/signup" className="ml-2 text-blue-400">
            register
          </Link>
        </p>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
