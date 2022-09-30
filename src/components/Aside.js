import '../assets/css/source.css';
import Figure from './Figure';
import PropTypes from 'prop-types';

function Aside({ text, side, image, grade }) {
    return (
        <aside className={`source--secondary-${side}`}>
            {image
                ? <Figure />
                : <span>{ text }</span>
            }
        </aside>
    )
}

Aside.propTypes = {
    text: PropTypes.string,
    side: PropTypes.oneOf(['right', 'left']),
    image: PropTypes.bool,
    grade: PropTypes.oneOf(['gradek', 'grade1', 'grade23', 'grade45', 'grade68', 'grade912']),
  };
  
Aside.defaultProps = {
    text: 'This is an aisde',
    side: 'right',
    image: false,
    grade: 'grade68',
};

export default Aside;