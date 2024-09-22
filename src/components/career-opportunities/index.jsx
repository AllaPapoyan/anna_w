import React from 'react';
import './style.scss'
import mission1 from "../../assets/images/career1.jpg";
import mission2 from "../../assets/images/career2.jpg";
import mission3 from "../../assets/images/career3.jpg";
import mission4 from "../../assets/images/career4.jpg";
import mission5 from "../../assets/images/career5.jpg";

import TitleComponent from "../title-component";
import BgComponent from "../Bg-component";





const  CareerOpportunities = () => {



    const missionData = [{
        id: 1, img: mission1, desc:"Our mission is expanding the talent pool in every part of Armenia"
        }, {
        id: 2, img: mission2, desc:"Making innovative technologies  useful for everyone"
        }, {
        id: 3, img: mission3, desc:"And expanding career opportunities in IT area"
         }, {
            id: 4, img: mission4, desc:"And expanding career opportunities in IT area"
        }, {
            id: 5, img: mission2, desc:"And expanding career opportunities in IT area"
        }, {
            id: 6, img: mission5, desc:"And expanding career opportunities in IT area"
        }]

    return (
        <section className='P-career-wrapper G-container'>
            <h2 className='career-title'>Available Career Opportunities</h2>
            <div className='G-flex G-align-center G-justify-between G-flex-wrap career-blocks '>

                {
                    missionData.map(elt => {
                        return (
                            <div className='career-block ' key={elt.id}>
                                <div className='career-image-cont'>
                                    <div className='G-background-norepeat'
                                         style={{backgroundImage: `url(${elt.img})`, width: '100%', height: '100%'}}/>
                                </div>
                                <p className='career-desc'>{elt.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};
export default CareerOpportunities;