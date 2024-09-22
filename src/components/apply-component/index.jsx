import "./style.scss"
import {motion} from "framer-motion";
import DescriptionComponent from "../description-component";
import useApply from "./useApply";


const ApplyComponent=()=>{
    const TitleAnimationOne ={
        hidden: {
            y: 40,
            opacity: 0,
        },
        visible: custom=>({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.2 ,
                duration: 1,
                delayChildren: 1,
                ease: 'easeOut',}
        }),
    }

    return(
        <div className={"apply-component"}>
            <div className={"G-container "}>
                <motion.div initial='hidden' whileInView='visible' className={"apply-title-component"}>
                    <motion.p variants={TitleAnimationOne} custom={1} className={"apply-title"}>Connections to Health

                        Contact US for more
                        <motion.span variants={TitleAnimationOne} custom={2} style={{color:"#969696"}}> information</motion.span></motion.p>

                    <motion.button variants={TitleAnimationOne} custom={3} className={"apply-btn"}>Contact now</motion.button>
                </motion.div>
            </div>
            <div className={"apply-bg"} ></div>
            <DescriptionComponent textDesc={"hfhhf fjfgtjfj dhdjf."} />


        </div>
    )
}
export default ApplyComponent