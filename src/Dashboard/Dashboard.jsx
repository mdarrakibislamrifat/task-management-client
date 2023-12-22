import { NavLink, Outlet } from "react-router-dom";
import {
 
  FaFileExport,
  FaHome,
  FaRegCheckCircle,
  FaRunning,
  FaTasks,
 
} from "react-icons/fa";

import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders/AuthProviders";



const Dashboard = () => {
  const { user } = useContext(AuthContext);


  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="lg:min-h-screen w-full lg:w-1/5 shadow-lg rounded-lg text-black  bg-gradient-to-r from-blue-500 to-green-500">
        <ul className="menu p-4">
          <>
            {user ? (
              <>
              <li>
                  <NavLink to="/dashboard/userHome">
                    <FaHome className="text-xl"></FaHome>My Home
                  </NavLink>
                </li>
              <li>
                  <NavLink to="/dashboard/addedTask">
                    <FaHome className="text-xl"></FaHome>My Added Tasks
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addTask">
                    <FaFileExport className="text-xl"></FaFileExport>Add Task
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/ToDo">
                    <FaTasks className="text-xl"></FaTasks>All Tasks
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="/dashboard/onGoing">
                    <FaRunning className="text-xl"></FaRunning>OnGoing
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/completed">
                    <FaRegCheckCircle className="text-xl"></FaRegCheckCircle>Completed
                  </NavLink>
                </li> */}

              </>
            ) : (
              ""
            )}
          </>

          <div className="divider"></div>

          <li>
            <NavLink to="/">
              {" "}
              <FaHome className="text-xl"></FaHome>Home
            </NavLink>
          </li>
        </ul>
        
      </div>
      
      <div className="flex-1 p-8">
       
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;