
import OurServices from "../../components/our-services";

import OurPartners from "../../components/our-partners";
import DescriptionComponent from "../../components/description-component";

import CareerOpportunities from "../../components/career-opportunities";
import YourResume from "../../components/your-resume";
import PersonalInformation from "../../components/personal-information";
import AvailabilityForm from "../../components/ availability-form";
import EmploymentHistory from "../../components/employment-history";
import ReferencesForm from "../../components/references-form";
import SubmitBtn from "../../components/submit-btn";



const Careers=()=>{
    return(
        <>
            <CareerOpportunities/>
            <YourResume/>
            {/*<OurServices />*/}
            {/*<OurPartners />*/}
            <PersonalInformation/>
            <AvailabilityForm/>
            <EmploymentHistory />
            <ReferencesForm />
            <SubmitBtn />
          <DescriptionComponent  textDesc={"Help you stand and continue to heal"} />
        </>
    )
}
export default Careers