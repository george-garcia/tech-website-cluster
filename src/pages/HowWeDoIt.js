import './HowWeDoIt.css'
import Card from "../components/Card";
import React from "react";
import img from '../img/white-board-2.jpg';
import {HiCheckCircle, HiCog8Tooth, HiPresentationChartLine} from 'react-icons/hi2';

function HowWeDoIt() {

    const data = [
        {
            icon: <HiCog8Tooth/>,
            name: 'Product Management',
            summary: 'Build new revenue streams, increase efficiency of your cloud transformation and deliver the future with industry-leading experts by your side.'
        },
        {
            icon: <HiCheckCircle/>,
            name: 'Quality Assurance',
            summary: 'Build new revenue streams, increase efficiency of your cloud transformation and deliver the future with industry-leading experts by your side.'
        },
        {
            icon: <HiPresentationChartLine/>,
            name: 'Ecommerce  Strategy',
            summary: 'Build new revenue streams, increase efficiency of your cloud transformation and deliver the future with industry-leading experts by your side.'
        }
    ];

    const renderedCards = data.map(el => {
        return <Card dark content={el}/>;
    });

    return (
        <div className="diagonal-box diagonal-box--dark section-how">
            <div className="diagonal-box-content">
                <div className="grid grid-2-cols how-grid">
                    <div className="how-main-text-container">
                        <h2 className="how-header">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                        <p className="how-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis corporis culpa
                            dignissimos,
                            dolorum, eligendi, eveniet magni minima nam neque numquam quia suscipit tempore voluptas! Ab
                            aliquam
                            aliquid, asperiores dignissimos distinctio facere inventore iure quo sunt tempore.
                            Architecto
                            eveniet ipsam veritatis!</p>
                    </div>

                    <div className="how-img-container text-center">
                        {/*<img className="how-img" src={img} alt=""/>*/}
                    </div>
                </div>

                <div className="grid grid-3-cols how-cards">
                    {renderedCards}
                </div>
            </div>
        </div>
    );
}

export default HowWeDoIt;