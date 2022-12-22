import './sponsors.css';

function Sponsors() {

    const logo1 = require('../logos/business-insider.png');
    const logo2 = require('../logos/forbes.png');
    const logo3 = require('../logos/techcrunch.png');
    const logo4 = require('../logos/the-new-york-times.png');
    const logo5 = require('../logos/usa-today.png');


    return (
        <div className="container">
            <div className="sponsors">
                <img src={logo1} alt=""/>
                <img src={logo2} alt=""/>
                <img src={logo3} alt=""/>
                <img src={logo4} alt=""/>
                <img src={logo5} alt=""/>
            </div>
        </div>
    );
}

export default Sponsors;