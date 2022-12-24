import './OutTeam.css';

function OurTeam() {
    return (
        <div className="section-OurTeam diagonal-box--slash diagonal-box--test">
                <div className="container pos-relative text-center">
                    <div className="team-header">
                        <h2>Technology partners you can count on</h2>
                    </div>
                    <div className="team-content grid grid-4-cols">
                        <div>
                            <h1 className="team-main">500+</h1>
                            <p className="team-text">IT professionals</p>
                        </div>
                        <div>
                            <h1 className="team-main">8</h1>
                            <p className="team-text">global locations</p>
                        </div>
                        <div>
                            <h1 className="team-main">250+</h1>
                            <p className="team-text">clients and counting</p>
                        </div>
                        <div>
                            <h1 className="team-main">15</h1>
                            <p className="team-text">years in creating cloud solutions</p>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default OurTeam;