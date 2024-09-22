import TitleComponent from "../title-component";
import bbb from "../../assets/images/pexels-pixabay-40568.jpg"
import './style.scss'
const BgComponent=()=>{
    return(
        <div className={"bg-component"} style={{backgroundImage:`url(${bbb})`}}>
            <TitleComponent titleOne={" WELCOME  "} titleTwo={"AQUA "} desc={"Home Health Care"} />
        </div>
    )
}
export default BgComponent