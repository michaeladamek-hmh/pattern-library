import PropTypes from 'prop-types';

function FlipCard({ card: { id, front, back, open, image }, grade }) {
    const isOpen = open ? true : false;

    return (
        <li>
            <details open={ isOpen }>
                <summary>
                    <span className="source__flipcards__front">
                        { front }
                    </span>
                    <span className="source__flipcards__back-visuals"> </span>
                </summary>
                <div className="source__flipcards__back">
                    <p>{ back }</p>
                </div>
            </details>
        </li>
    )
}

FlipCard.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.string,
        front: PropTypes.string,
        back: PropTypes.string,
        open: PropTypes.bool,
        image: PropTypes.bool
    }),
    grade: PropTypes.oneOf(['gradek', 'grade1', 'grade23', 'grade45', 'grade68', 'grade912']),
};
  
FlipCard.defaultProps = {
    card: ({
        id: '1',
        front: 'Thor 1',
        back: 'Thor Odinson, or simply Thor is a fictional character appearing in American comic books published by Marvel Comics. The character is based on the Norse deity of the same name, who is the Asgardian god of thunder who has the enchanted hammer, Mjolnir, which grants him the ability to fly and manipulate weather amongst his other superhuman attributes.',
        open: false,
        image: false
    }),
    grade: 'grade68',
};

export default FlipCard;