import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";


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
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/registration',
          element:<Registration></Registration>
        },
        
        
      ]);

export default router;