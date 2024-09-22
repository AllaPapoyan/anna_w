
import ApplyComponent from "../../components/apply-component";
import OurServices from "../../components/our-services";

import OurPartners from "../../components/our-partners";
import DescriptionComponent from "../../components/description-component";
import BgComponent from "../../components/Bg-component";



const HomePage=()=>{
    return(
        <>
          <BgComponent  />
            <ApplyComponent />
            <OurServices />
            <OurPartners />
          <DescriptionComponent  textDesc={"Help you stand and continue to heal"} />
        </>
    )
}
export default HomePage