import '../assets/css/source.css';
import PropTypes from 'prop-types';

function Headers({ level, text, grade }) {
    let header;
    switch(level) {
        case 'h1':
            return header = <h1>{text}</h1>;
        case 'h2':
            return header = <h2>{text}</h2>;
        case 'h3':
            return header = <h3>{text}</h3>;
        case 'h4':
            return header = <h4>{text}</h4>;
        case 'h5':
            return header = <h5>{text}</h5>;
        case 'h6':
            return header = <h6>{text}</h6>;
        default:
            return header = <p>{text}</p>;
    };

    return (
        <>
            {header}
        </>
    );
}

Headers.propTypes = {
    level: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    text: PropTypes.string,
    grade: PropTypes.oneOf(['gradek', 'grade1', 'grade23', 'grade45', 'grade68', 'grade912'])
  };
  
Headers.defaultProps = {
    level: 'h1',
    text: 'Heading',
    grade: 'grade68'
};

export default Headers;