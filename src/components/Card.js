import './Card.css';

function Card({content}) {
    return (
        <div className="cards">
            <span className="card-icon">{content.icon}</span>
            <h3 className="card-name">{content.name}</h3>
            <p className="card-summary">{content.summary}</p>
            <a href="#" className="btn btn--full">Learn More &rarr;</a>
        </div>
    );
}

export default Card;