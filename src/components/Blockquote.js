import '../assets/css/source.css';
import img from  '../assets/img/source-img.svg';
import PropTypes from 'prop-types';

function Blockquote({ quote, source, image, grade }) {
    return (
        <figure className="breakout-quote">
            {image
                ? <img src={ img } />
                : <blockquote>{ quote }</blockquote>
            
            }
            <figcaption>{ source }</figcaption>
        </figure>
    );
}

Blockquote.propTypes = {
    quote: PropTypes.string,
    source: PropTypes.string,
    image: PropTypes.bool,
    grade: PropTypes.oneOf(['gradek', 'grade1', 'grade23', 'grade45', 'grade68', 'grade912']),
  };
  
  Blockquote.defaultProps = {
    quote: 'This is a blockquote',
    source: 'This is the source of the quote',
    image: false,
    grade: 'grade68',
  };

export default Blockquote;