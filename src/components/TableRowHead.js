import PropTypes from 'prop-types';

function TableRowHead({ headerRowCell: { text }, grade }) {
    return (
        <th scope="row">{ text }</th>
    )
}

TableRowHead.propTypes = {
    headerRowCell: PropTypes.shape ({
        id: PropTypes.string,
        text: PropTypes.string,
    }),
    grade: PropTypes.oneOf(['gradek', 'grade1', 'grade23', 'grade45', 'grade68', 'grade912']),
};
  
// TableCell.defaultProps = {
//     text: `This is a list item placeholder text.`,
//     grade: 'grade68',
// };

export default TableRowHead;