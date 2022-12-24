import './Footer.css';

function Footer() {

    const links = [
        'Cluster Services', 'Privacy Notice', 'Responsibility', 'Hotline', 'Sitemap'
    ];

    const renderedLinks = links.map(link => {
        return <a className="footer-link" href="#">{link}</a>
    });


    return (
        <div className="section-footer">
            <div className="container">
                <div className="footer-links">
                    {renderedLinks}
                </div>
            </div>
        </div>
    );
}

export default Footer;