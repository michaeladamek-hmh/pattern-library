import img from  '../assets/img/source-img.svg';
import PropTypes from 'prop-types';

function Figure({ styles, caption, grade }) {
    return (
        <figure style={ styles } >
            <img src={ img } alt="placeholder" /> 
            {caption
                ? <figcaption>{ caption }</figcaption>
                : null
            }
        </figure>
    );
}

Figure.propTypes = {
    caption: PropTypes.string,
    grade: PropTypes.oneOf(['gradek', 'grade1', 'grade23', 'grade45', 'grade68', 'grade912']),
  };
  
Figure.defaultProps = {
    caption: 'Caption text',
    grade: 'grade68',
};

export default Figure;