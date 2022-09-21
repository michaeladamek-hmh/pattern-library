import '../assets/css/source.css';
import PropTypes from 'prop-types';

function Headers({ level, text, varient, grade }) {
    let header;
    
    if (level === 'h6' && varient === 'SS-USH') {
        return header = <div className='ss22_ush__footer'><ul><li className='arrow-icon'><h6>{text}</h6></li></ul></div>
    } else if (level === 'h6') {
        return header = <h6>{text}</h6>;
    }
    
    if (level === 'h5' && varient === 'SS-USH') {
        return header = <div className='ss22_ush__topic'><h5>{text}</h5></div>
    } else if (level === 'h5') {
        return header = <h5>{text}</h5>;
    }
    
    if (level === 'h4' && varient === 'SS-USH') {
        return header = <div className='ss22_ush__topic'><header className='source__grid'><article><h4>{text}</h4></article></header></div>
    } else if (level === 'h4') {
        return header = <h4>{text}</h4>;
    }
    
    if (level === 'h3' && varient === 'SS-USH') {
        return header = <div className='ss22_ush__topic'><header className='source__grid'><h3>{text}</h3></header></div>
    } else if (level === 'h3') {
        return header = <h3>{text}</h3>;
    }
    
    if (level === 'h2' && varient === 'SS-USH') {
        return header = <div className='ss22_ush__topic-opener source__grid'><header className='source__grid'><h2>{text}</h2></header></div>
    } else if (level === 'h2') {
        return header = <h2>{text}</h2>;
    }

    if (level === 'h1' && varient === 'SS-USH') {
        return header = <div className='ss22_ush__module-opener'><h1>{text}</h1></div>
    } else if (level === 'h1') {
        return header = <h1>{text}</h1>;
    }
    

    // switch(level) {
    //     case 'h1':
    //         return header = <h1>{text}</h1>;
    //     case 'h2':
    //         return header = <h2>{text}</h2>;
    //     case 'h3':
    //         return header = <h3>{text}</h3>;
    //     case 'h4':
    //         return header = <h4>{text}</h4>;
    //     case 'h5':
    //         return header = <h5>{text}</h5>;
    //     case 'h6':
    //         return header = <h6>{text}</h6>;
    //     default:
    //         return header = <p>{text}</p>;
    // };
        console.log('Level:', level);

    return (

        <>
            {header}
        </>
    );
}

Headers.propTypes = {
    level: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    text: PropTypes.string,
    varient: PropTypes.oneOf(['Source', 'SS-USH']),
    grade: PropTypes.oneOf(['gradek', 'grade1', 'grade23', 'grade45', 'grade68', 'grade912'])
  };
  
Headers.defaultProps = {
    level: 'h1',
    text: 'Heading',
    varient: 'Source',
    grade: 'grade68'
};

export default Headers;