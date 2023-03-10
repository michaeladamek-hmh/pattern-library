import Figure from './Figure';
import PropTypes from 'prop-types';

function Animation({ text, image, name, duration, timing, delay, grade }) {

    let animaitonStyles = {
        // animation: `${name}, ${timing}, ${duration}`,
        animationName: name,
        animationDuration: duration + 'ms',
        animationTimingFunction: timing,
        animationDelay: delay + 'ms',
        animationFillMode: 'forwards',
    }

    let animationTypeStyles;

    if (name.includes('fade')) {
        animationTypeStyles = {
            opacity: 0
        }
    }
    
    if (name.includes('bounce') && name !== 'bounce') {
        animationTypeStyles = {
            opacity: 0,
            transform: `scale3d(0.3, 0.3, 0.3)`
        }
    }

    return (
        image ?
        <Figure styles={{...animaitonStyles, ...animationTypeStyles}} caption={ text } />
        : <h1 class="animate" style={{...animaitonStyles, ...animationTypeStyles}}>{ text }</h1>
    )
}

Animation.propTypes = {
    text: PropTypes.string,
    image: PropTypes.bool,
    duration: PropTypes.number,
    delay: PropTypes.number,
    name: PropTypes.oneOf(['fadeIn', 'fadeInDown', 'fadeInUp', 'fadeInLeft', 'fadeInRight', 'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'bounce', 'pulse', 'shakeX', 'shakeY', 'headShake']),
    timing: PropTypes.oneOf(['ease,', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),
    grade: PropTypes.oneOf(['gradek', 'grade1', 'grade23', 'grade45', 'grade68', 'grade912']),
  };
  
Animation.defaultProps = {
    text: 'This is an animation',
    image: false,
    duration: 1500,
    delay: 1500,
    name: 'fadeIn',
    timing: 'ease-in-out',
    grade: 'grade68',
};

export default Animation;