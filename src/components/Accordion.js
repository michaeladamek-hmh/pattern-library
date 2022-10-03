import AccordionListItem from './AccordionListItem';
import PropTypes from 'prop-types';

function Accordion({ listItems, grade }) {

    return (
        <ul class="source__accordion">
            {listItems.map(item => (
                <AccordionListItem key={item.id} item={item} />
            ))}
        </ul>
    )
}

Accordion.propTypes = {
    grade: PropTypes.oneOf(['gradek', 'grade1', 'grade23', 'grade45', 'grade68', 'grade912']),
  };
  
  Accordion.defaultProps = {
    grade: 'grade68',
};

export default Accordion;