import { Link, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const [users] = useAuth();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col items-center justify-center drawer-content">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="h-full p-4 menu w-80 bg-base-200 text-base-content">
          {/* Sidebar content here */}

          {users.role === "admin" ? (
            <>
              <li>
                <Link to="/dashboard" className="text-2xl font-bold link-btn">
                  Admin Dashboard
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manageclass" className="link-btn">
                  Manage Classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manageuser" className="link-btn">
                  Manage Users
                </Link>
              </li>
            </>
          ) : users.role === "instructor" ? (
            <>
              <li>
                <Link to="/dashboard" className="text-2xl font-bold link-btn">
                  Instructor Dashboard
                </Link>
              </li>
              <li>
                <Link to="/dashboard/addclass" className="link-btn">
                  Add Class
                </Link>
              </li>
              <li>
                <Link to="/dashboard/insmyclass" className="link-btn">
                  My classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/totalenrolled" className="link-btn">
                  Total Enrolled
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard" className="text-2xl font-bold link-btn">
                  Students Dashboard
                </Link>
              </li>
              <li>
                <Link to="/dashboard/myclasses" className="link-btn">
                  My classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/enrolledclass" className="link-btn">
                  My Enrolled Class
                </Link>
              </li>
              <li>
                <Link to="/dashboard/history" className="link-btn">
                  Payment History
                </Link>
              </li>
            </>
          )}

          {/* default route for main homepage */}
          <li>
            <Link to="/" className="text-2xl font-bold link-btn">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
