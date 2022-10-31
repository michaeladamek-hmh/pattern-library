import PropTypes from 'prop-types';

function TableCell({ dataCell: { text }, grade }) {
    return (
        <td>{ text }</td>
    )
}

TableCell.propTypes = {
    dataCell: PropTypes.shape ({
        id: PropTypes.string,
        text: PropTypes.string,
    }),
    grade: PropTypes.oneOf(['gradek', 'grade1', 'grade23', 'grade45', 'grade68', 'grade912']),
};
  
// TableCell.defaultProps = {
//     cell: {
//         text: `This is a list item placeholder text.`,
//         grade: 'grade68',
//     }
// };

export default TableCell;