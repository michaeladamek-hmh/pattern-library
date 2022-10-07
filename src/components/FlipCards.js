import FlipCard from './FlipCard';
import PropTypes from 'prop-types';

function FlipCards({ cards, grade }) {

    return (
        <ul className="source__flipcards">
            {cards.map(card => (
                <FlipCard key={card.id} card={card} />
            ))}
        </ul>
    )
}

FlipCards.propTypes = {
    grade: PropTypes.oneOf(['gradek', 'grade1', 'grade23', 'grade45', 'grade68', 'grade912']),
};

FlipCards.defaultProps = {
    grade: 'grade68',
};

export default FlipCards;