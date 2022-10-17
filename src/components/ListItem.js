import PropTypes from 'prop-types';

function ListItem({ text, grade }) {
    return (
        <li>{ text }</li>
    );
}

ListItem.propTypes = {
    item: PropTypes.shape ({
        id: PropTypes.string,
        text: PropTypes.string,
    }),
    grade: PropTypes.oneOf(['gradek', 'grade1', 'grade23', 'grade45', 'grade68', 'grade912']),
};
  
// ListItem.defaultProps = {
//     text: `This is a list item placeholder text.`,
//     grade: 'grade68',
// };

export default ListItem;