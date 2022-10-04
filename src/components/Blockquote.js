import img from  '../assets/img/source-img.svg';
import PropTypes from 'prop-types';

function Blockquote({ quote, source, image, varient, grade }) {
    return (
        <>
        {varient === 'SS-USH' ? 
            <aside className={varient === 'SS-USH' ? 'ss22_ush__blockquote' : ''}>
                <figure className="breakout-quote">
                    {image
                        ? <img src={ img } alt="placeholder" />
                        : <blockquote>{ quote }</blockquote>
                    }
                    <figcaption>{ source }</figcaption>
                </figure>
            </aside>
        :
            <figure className="breakout-quote">
                {image
                    ? <img src={ img } alt="placeholder" />
                    : <blockquote>{ quote }</blockquote>
                }
                <figcaption>{ source }</figcaption>
            </figure>
        }
        </>
    );
}

Blockquote.propTypes = {
    quote: PropTypes.string,
    source: PropTypes.string,
    image: PropTypes.bool,
    varient: PropTypes.oneOf(['Source', 'SS-USH']),
    grade: PropTypes.oneOf(['gradek', 'grade1', 'grade23', 'grade45', 'grade68', 'grade912']),
  };
  
  Blockquote.defaultProps = {
    quote: 'This is a blockquote',
    source: 'This is the source of the quote',
    image: false,
    varient: 'Source',
    grade: 'grade68',
  };

export default Blockquote;