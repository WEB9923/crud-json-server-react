import Navbar from "../components/navbar/Navbar.jsx";
import {Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
}
