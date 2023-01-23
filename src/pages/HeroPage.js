import './HeroPage.css'
import Nav from "../components/Nav";


function HeroPage() {

    const navLinks = ['Solutions', 'Platforms', 'Industries', 'About', 'Careers'];

    return (
        <div className="hero-page">
            <Nav links={navLinks}/>
            <div className="header-container heading-grid">
                <div>
                    <h1 className="heading-primary">Navigate the Digital Landscape with Confidence</h1>
                    <p className="heading-text">Our team of experts is here to simplify your path forward
                        and help you achieve your business goals. Our always-on approach
                        and seamless scalability will ensure that we're with you every step of the way.</p>
                    <a href="#" className="btn btn--full"><span>Quote now</span></a>
                </div>
            </div>
        </div>
    );
}

export default HeroPage;