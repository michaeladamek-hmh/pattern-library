import Figure from './Figure';
import Blockquote from './Blockquote';
import PropTypes from 'prop-types';

function Aside({ text, side, image, blockquote, grade }) {
    return (
        <aside className={`source--secondary-${side}`}>
            {blockquote ? (
                <Blockquote quote={ text } />
                ) : (
                    image ?
                    <Figure caption={ text } />
                    : <span>{ text }</span>
                )
            }
        </aside>
    )
}

Aside.propTypes = {
    text: PropTypes.string,
    side: PropTypes.oneOf(['right', 'left']),
    image: PropTypes.bool, 
    blockquote: PropTypes.bool,
    grade: PropTypes.oneOf(['gradek', 'grade1', 'grade23', 'grade45', 'grade68', 'grade912']),
  };
  
Aside.defaultProps = {
    text: 'This is an aisde',
    side: 'right',
    image: false,
    blockquote: false,
    grade: 'grade68',
};

export default Aside;