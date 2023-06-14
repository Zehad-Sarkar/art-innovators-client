import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../../components/Loading";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // loading
  <Loading></Loading>;

  const handleLogout = () => {
    logOut().then(() => {});
  };

  const navMenu = (
    <>
      <li>
        <Link className="mr-6 text-lg font-semibold">Home</Link>
        <Link to="/instructors" className="mr-6 text-lg font-semibold">
          Instructor
        </Link>
        <Link to="/classes" className="mr-6 text-lg font-semibold">
          Classes
        </Link>
        {user && user ? (
          <>
            <Link to="/dashboard" className="mr-6 text-lg font-semibold">
              Dashboard
            </Link>
            <Link onClick={handleLogout} className="mr-6 text-lg font-semibold">
              Log out
            </Link>
            <div className="mr-6 text-lg font-semibold md:hidden">
              <img
                title={user?.displayName}
                src={user ? user?.photoURL : ""}
                alt=""
                className="w-8 h-8 rounded-xl"
              />
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-6 text-lg font-semibold">
              Login
            </Link>
            <Link to="/signup" className="mr-6 text-lg font-semibold">
              Register
            </Link>
          </>
        )}
      </li>
    </>
  );
  return (
    <div className="h-32 navbar bg-slate-400">
      <div className="navbar-start">
        <div className="z-20 dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow w-52 menu menu-sm dropdown-content bg-base-100 rounded-box"
          >
            {navMenu}
          </ul>
        </div>
        <Link to="/" className="relative text-3xl uppercase">
          <span className="absolute font-medium text-violet-600 -top-16">
            Art
          </span>
          <span className="absolute font-extrabold text-purple-500 -top-8 left-8">
            Innovators
          </span>
          <span className="absolute font-bold top-1 left-36 text-fuchsia-600">
            Academy
          </span>
        </Link>
      </div>
      <div className="hidden navbar-center lg:flex xl:flex">
        <ul className="flex px-1 menu-horizontal">{navMenu}</ul>
      </div>
      <div className="hidden md:block lg:block">
        <img
          title={user?.displayName}
          src={user ? user?.photoURL : ""}
          alt=""
          className="w-8 h-8 rounded-xl"
        />
      </div>
    </div>
  );
};

export default Navbar;
