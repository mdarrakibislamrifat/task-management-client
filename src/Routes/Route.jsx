import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AddTask from "../Dashboard/AddTask/AddTask";
import ToDo from "../Dashboard/ToDo/ToDo";
import UserHome from "../Dashboard/UserHome/UserHome";



    const router = createBrowserRouter([
        {
          path: "/",
          element: <MainLayout></MainLayout>,
          errorElement:<ErrorPage></ErrorPage>,
          children:[
            {
                path:'/',
                element:<Home></Home>
            },
          ]
        },
        {
          path:'dashboard',
          element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
          children:[
           {
            path:'userHome',
            element:<UserHome></UserHome>
           },
            {
              path:'addTask',
              element:<AddTask></AddTask>
            },
            {
              path:'ToDo',
              element:<ToDo></ToDo>
            }
          ]
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/registration',
          element:<Registration></Registration>
        },
        
        
      ]);

export default router;