import './HeroPage.css'
import Nav from "../components/Nav";


function HeroPage() {

    const navLinks = ['Solutions', 'Platforms', 'Industries', 'About', 'Careers'];

    return (
        <div className="hero-page">
            <Nav links={navLinks}/>
            <div className="header-container heading-grid">
                <div>
                    <h1 className="heading-primary">Lorem ipsum dolor sit amet, consectet</h1>
                    <p className="heading-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at autem
                        beatae dolorum ducimus earum eius eum excepturi exercitationem, harum magni minus necessitatibus
                        nulla perspiciatis porro quibusdam unde vel velit</p>
                    <a href="#" className="btn btn--full"><span>Quote now</span></a>
                </div>
            </div>
        </div>
    );
}

export default HeroPage;