import TitleComponent from "../../components/title-component";
import AnimatedBlockComponent from "../../components/animation-block";
import OurMission from "../../components/our-mission";
import OurServices from "../../components/our-services";

const AboutUs=()=>{
    return(
        <>
            <TitleComponent titleOne={"We build, scale digital"} titleTwo={"products for everyone"} />
            <OurServices  />
            <OurMission />
        </>
    )
}
export default AboutUs