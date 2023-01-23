import './nav.css';

function Nav({ links }) {

    const renderedLinks = links.map(link => {
        return <li key={link}><a href="#" className="btn">{link}</a></li>;
    });

    return (
        <div className="header header-container">
            <span className="logo">CyberFortressIT</span>
            <nav className="main-nav">
                <ul className="main-nav-list">
                    {renderedLinks}
                </ul>
            </nav>
        </div>
    );
}

export default Nav;