import img from  '../assets/img/source-img.svg';
import PropTypes from 'prop-types';

function AccordionListItem({ item: { title, text, open, image } }) {
    const isOpen = open ? true : false;

    return (
        <li>
            <details open={ isOpen }>
                <summary>
                    <h5>{ title }</h5>
                </summary>
                {image
                    ? <img src={ img } alt="placeholder" /> : ''
                }
                <p>{ text }</p>
            </details>
        </li>
    )
}


AccordionListItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
        open: PropTypes.bool,
        image: PropTypes.bool

    }),
    grade: PropTypes.oneOf(['gradek', 'grade1', 'grade23', 'grade45', 'grade68', 'grade912']),
};
  
// AccordionListItem.defaultProps = {
//     title: 'Accordion Title 1',
//     text: 'This is a paragraph of placeholder text. It is only here to help show the layout of the page and how the text will flow. Replace this placeholder text with your own meaningful content.',
//     open: false,
//     image: false,
//     grade: 'grade68',
// };

export default AccordionListItem