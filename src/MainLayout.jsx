import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-7xl mx auto space-y-6">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;