import "./style.scss"
import {Link} from "react-router-dom";
import IconsComponent from "../icons-component";
const Footer=()=>{

    return(
        <div className={"G-container footer"}>
            {/*<p className={"footer-title"}>Start Connecting</p>*/}
            {/*<div className={"footer-cont"}>*/}
            {/*    <p className={"footer-text"}>Confirm your request</p>*/}
            {/*    <div className={"circle"}><p>Contact us</p></div>*/}
            {/*    <p className={"footer-text-two"}>and wait for a response</p>*/}
            {/*</div>*/}

            <div className={"footer-items G-flex G-justify-between"}>
                <Link style={{textDecoration:"none",color:"#FAFAFA"}} too={"/"}><span className={"logo"}><h2>AQUA</h2>
Home Health Care</span></Link>
                <ul className={"sitemap"}>
                    <li className={"sitemap-item"}>About us</li>
                    <li className={"sitemap-item"}>Contact</li>
                    <li className={"sitemap-item"}>Careers</li>


                </ul>
                <ul className={"address"}>
                    <li className={"address-item"}>Address</li>
                    <li className={"address-item"}><span  className="icon loc adress-icon "/> 5535 Balboa Bivd. Suite
                        103
                        Encino, CA 91316
                    </li>
                    <li className={"address-item"}><span  className="icon phone adress-icon "/> (747) 800-3871 </li>
                    <li className={"address-item"}><span className="icon phone adress-icon"/> (747) 800-3874</li>

                </ul>
            </div>
            <div className={"end"}>
                <p className={"end-text"}>© Group 404 LLC 2022</p>
                <p className={"end-text"}>Privacy Policy</p>

            </div>
        </div>
    )
}
export default Footer