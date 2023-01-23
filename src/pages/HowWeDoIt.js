import './HowWeDoIt.css'
import Card from "../components/Card";
import React from "react";
import {HiCheckCircle, HiCog8Tooth, HiPresentationChartLine} from 'react-icons/hi2';

function HowWeDoIt() {

    const data = [
        {
            icon: <HiCog8Tooth/>,
            name: 'Product Management',
            summary: 'Identify opportunities, validate product ideas and ensure a product ready launch. We\'ll work closely to deliver value to customers quickly and at scale using the latest methodologies and tools to achieve your business goals.'
        },
        {
            icon: <HiCheckCircle/>,
            name: 'Quality Assurance',
            summary: 'Develop and implement quality assurance processes that ensure your products quality. Identify areas for improvement, and implement testing and monitoring systems to ensure customers\' expectations.'
        },
        {
            icon: <HiPresentationChartLine/>,
            name: 'Ecommerce  Strategy',
            summary: 'Drive enhanced sales with scalable custom ecommerce experiences. From market research, to web design and development, to online marketing and sales, we\'ll help every step of the way.'
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
                        <h2 className="how-header">Expertise in Execution: Our Approach to Driving Business Success</h2>
                        <p className="how-text">
                            We understand the importance of execution in achieving business success.
                            We employ a data-driven approach to assess and identify areas of improvement, and to develop
                            and implement solutions that drive efficiencies delivering value to customers. Our team of
                            experts are well-versed in industry-standard methodologies and tools, such as Scrum, Agile,
                            and Six Sigma, using them to drive business success.
                        </p>
                    </div>

                    <div className="how-img-container text-center">
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