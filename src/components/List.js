import PropTypes from 'prop-types';

function List({ text, listType, grade }) {
    return (
        <>
        {listType === 'ordered' ?
            <ol>
                <li>{ text }</li>
                <li>{ text }</li>
                <li>{ text }</li>
                <li>{ text }</li>
                <li>{ text }</li>
            </ol>
            :
            <ul>
                <li>{ text }</li>
                <li>{ text }</li>
                <li>{ text }</li>
                <li>{ text }</li>
                <li>{ text }</li>
            </ul>
        }
        </>
    );
}

List.propTypes = {
    text: PropTypes.string,
    listType: PropTypes.oneOf(['unordered', 'ordered']),
    grade: PropTypes.oneOf(['gradek', 'grade1', 'grade23', 'grade45', 'grade68', 'grade912']),
};
  
List.defaultProps = {
    text: 'This is a paragraph of placeholder text. It is only here to help show the layout of the page and how the text will flow. Replace this placeholder text with your own meaningful content.',
    listType: 'unordered',
    grade: 'grade68',
};

export default List;