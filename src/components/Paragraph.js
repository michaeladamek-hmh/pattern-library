import PropTypes from 'prop-types';

function Paragraph({ text, grade }) {
    return (
        <p>
            { text }
        </p>
    );
}

Paragraph.propTypes = {
    text: PropTypes.string,
    grade: PropTypes.oneOf(['gradek', 'grade1', 'grade23', 'grade45', 'grade68', 'grade912']),
};
  
Paragraph.defaultProps = {
    text: 'This is a paragraph of placeholder text. It is only here to help show the layout of the page and how the text will flow. Replace this placeholder text with your own meaningful content.',
    grade: 'grade68',
};

export default Paragraph;