import { Outlet } from "react-router-dom";
import Contact from "../pages/contact";

export default function ContactLayout(){
    return (
        <div>
            <Contact/>
            <Outlet/>
        </div>
    );
}