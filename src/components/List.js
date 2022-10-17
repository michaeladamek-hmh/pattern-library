import ListItem from './ListItem';
import PropTypes from 'prop-types';

function List({ listItems, listType, grade }) {
    return (
        <>
        {listType === 'ordered' ?
            <ol>
                {listItems.map(item => (
                    <ListItem key={item.id} item={item} />
                ))}
            </ol>
            :
            <ul>
                {listItems.map(item => (
                    <ListItem key={item.id} item={item} />
                ))}
            </ul>
        }
        </>
    );
}

List.propTypes = {
    listType: PropTypes.oneOf(['unordered', 'ordered']),
    grade: PropTypes.oneOf(['gradek', 'grade1', 'grade23', 'grade45', 'grade68', 'grade912']),
};
  
List.defaultProps = {
    listType: 'unordered',
    grade: 'grade68',
};

export default List;