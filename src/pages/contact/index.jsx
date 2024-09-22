import TitleComponent from "../../components/title-component";
import DescriptionComponent from "../../components/description-component";
import Validation from "../../components/validation";

const Contact=()=>{
    return(
        <>
            <TitleComponent titleTwo={"Let's make a winning "} titleOne={"projects together"}/>
            <div  className={"G-container G-flex G-align-center"} style={{paddingTop:"40px"}}>
               <div style={{width:"100%",borderTop:"1px solid #999999"}}></div>
            </div>
            <Validation />
            <DescriptionComponent textDesc={"Office Hours\n" +
                "Monday-Friday: 9AM–5:30PM\n" +
                "Emergency Service: 24/7"} />







        </>
    )
}
export default Contact