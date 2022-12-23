import './Card.css';
import classNames from "classnames";

function Card({content, light, dark, border}) {

    const cardClasses = classNames('cards', {
        'cards--border' : border
    });

    const iconClasses = classNames('card-icon', {
        'card-icon--light' : light,
        'card-icon--dark' : dark,
    });

    const nameClasses = classNames('card-name', {
        'card-name--light' : light,
        'card-name--dark' : dark,
    });

    const summaryClasses = classNames('card-summary', {
        'card-summary--light' : light,
        'card-summary--dark' : dark,
    });


    return (
        <div className={cardClasses}>
            {content?.icon && <span className={iconClasses}>{content.icon}</span>}
            <h3 className={nameClasses}>{content.name}</h3>
            <p className={summaryClasses}>{content.summary}</p>
            {/*<a href="#" className="btn btn--full">Learn More &rarr;</a>*/}
        </div>
    );
}

export default Card;