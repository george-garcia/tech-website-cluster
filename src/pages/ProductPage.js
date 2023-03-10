import Card from "../components/Card";
import {HiOutlineCloud, HiOutlineTableCells, HiOutlineFolderOpen, HiOutlineLockClosed} from 'react-icons/hi2'
import React from 'react';
import './ProductPage.css'

function ProductPage() {

    const cloud = {
        icon: <HiOutlineCloud/>,
        name: 'Cloud',
        summary: 'Build new revenue streams, increase efficiency of your cloud transformation and deliver the future with industry-leading experts by your side.'
    };

    const application = {
        icon: <HiOutlineTableCells/>,
        name: 'Application',
        summary: 'Explore powerful application management services that help you gain efficiencies, improve operations and drive smarter business outcomes'
    };

    const data = {
        icon: <HiOutlineFolderOpen/>,
        name: 'Data',
        summary: 'Unlock the value of your data through actionable insights and drive business growth. Improve customer experiences and generate new revenue streams'
    };

    const security = {
        icon: <HiOutlineLockClosed/>,
        name: 'Security',
        summary: 'Certified cloud security experts secure your environments across all public and private clouds so you can run your business with greater efficiency and confidence'
    };


    return (
        <div className="section-product-page">
            <div className="container product-page--container">
                <h2 className="product-page-header">Solutions today for a brighter tomorrow</h2>
                <div className="cards-container">
                    <Card border light content={cloud}/>
                    <Card border light content={application}/>
                    <Card border light content={data}/>
                    <Card border light content={security}/>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;