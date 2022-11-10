import PropTypes from 'prop-types';

function Paragraph({ text, spanish, language, grade }) {
    return (
        <>
        { language === 'spanish' ?
            <p>
                { spanish } 
            </p>
            :
            <p>
                { text }
            </p>
        }
        </>
    );
}

Paragraph.propTypes = {
    text: PropTypes.string,
    spanish: PropTypes.string,
    language: PropTypes.oneOf(['english', 'spanish']),
    grade: PropTypes.oneOf(['gradek', 'grade1', 'grade23', 'grade45', 'grade68', 'grade912']),
};
  
Paragraph.defaultProps = {
    text: 'This is a paragraph of placeholder text. It is only here to help show the layout of the page and how the text will flow. Replace this placeholder text with your own meaningful content.',
    spanish: `Este es un párrafo de texto de marcador de posición. Solo está aquí para ayudar a mostrar el diseño de la página y cómo fluirá el texto. Reemplace este texto de marcador de posición con su propio contenido significativo.`,
    language: 'english',
    grade: 'grade68',
};

export default Paragraph;