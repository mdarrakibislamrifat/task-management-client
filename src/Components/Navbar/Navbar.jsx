import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";


const Navbar = () => {

  const {user,logOut}=useContext(AuthContext)

    const navlinks=<>
    <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-blue-500 underline font-bold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
    <li>
        <NavLink
          to="/dashboard/ToDo"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-blue-500 underline font-bold"
              : ""
          }
        >
          All Tasks
        </NavLink>
      </li>
    <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-blue-500 underline font-bold"
              : ""
          }
        >
          Notification
        </NavLink>
      </li>
    <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-blue-500 underline font-bold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
      </ul>
    </div>
    <img className="w-[50px] h-[50px] rounded-lg" src="https://i.ibb.co/TK1rmRL/download.jpg" alt="" />
    <h1 className="text-sm md:text-lg lg:text-xl font-bold ml-2">The To-Do Whisperer</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    {user? <button onClick={logOut} className="btn bg-red-400">Logout</button> :
    <Link to='/login'><button className="btn btn-primary">SignIn</button></Link>}
  </div>
</div>
    );
};

export default Navbar;