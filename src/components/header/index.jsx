import "./style.scss"
// import IconsComponent from "../icons-component";
import useHeader from "./useHeader";
// import {useEffect} from "react";
import {NavLink} from "react-router-dom";
import IconsComponent from "../icons-component";
import Up_part from "../up_part";


const Header=()=>{
  const {changeIcon,isChange,width,setWidth,isOpen}=useHeader()


    return(<header className={"header"}>
        <Up_part/>
        <div className={"G-container G-flex  header-container  "}>

            <nav className={"navbar"}>
                <NavLink style={{textDecoration: "none", color: "#FAFAFA"}} to={"/"}><h2>AQUA</h2> <span>Home Health Care</span></NavLink>
                <ul className={!changeIcon ? "menu " : 'menuOpen'}>
                    <li className={"menu-item"} onClick={() => isOpen()}><NavLink
                        style={{textDecoration: "none", color: "#FAFAFA"}} to="/">Home
                    </NavLink></li>
                    <li className={"menu-item"} onClick={() => isOpen()}><NavLink
                        style={{textDecoration: "none", color: "#FAFAFA"}} to="/about_us">About Us</NavLink></li>
                    <li className={"menu-item"} onClick={() => isOpen()}><NavLink
                        style={{textDecoration: "none", color: "#FAFAFA"}} to="/contact">Contact</NavLink></li>
                    <li className={"menu-item"} onClick={() => isOpen()}><NavLink
                        style={{textDecoration: "none", color: "#FAFAFA"}} to="/careers ">Careers</NavLink></li>

                </ul>
            </nav>
            <div className={"icons-bloc"}>
                <div className={"icons"}>
                    {/*<span className="icon user "></span>*/}
                    <p className={"menu-item"} onClick={() => isOpen()}><NavLink
                        style={{textDecoration: "none", color: "#FAFAFA"}} to="/sign-in">Sign in</NavLink></p>
                    <p>Sign Up</p>

                </div>

                <div className="burger-icon" onClick={isChange}>
                    <div className={!changeIcon ? 'icon-1' : "close-1"}></div>
                    <div className={!changeIcon ? 'icon-2' : "close-2"}></div>
                    <div className={!changeIcon ? 'icon-3' : "close-3"}></div>
                </div>
            </div>

        </div>
    </header>)
}
export default Header