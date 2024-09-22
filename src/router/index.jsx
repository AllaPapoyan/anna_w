import {Repeat} from "framer-motion";
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/home-page";
import Cursor from "../components/cursor";
import AboutUs from "../pages/about-us";
import Contact from "../pages/contact";
import SignIn from "../pages/sign-in-page";
import Careers from "../pages/careers-page";

const Router=()=>{
    return(
        <>
            {/*<Cursor />*/}
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />}/>
            <Route path="/careers" element={<Careers />}/>
            <Route path="/sign-in" element={<SignIn />}/>
        </Routes>
        </>
    )
}
export default Router