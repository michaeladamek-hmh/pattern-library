import AccordionListItem from './AccordionListItem';

export default {
    component: AccordionListItem,
    title: 'Accordion List Item',
    decorators: [story => <ul className={ 'source__accordion' }>{story()}</ul>]
};

const Template = args => <AccordionListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    item: ({
        id: '1',
        title: 'Accordion Title 2',
        text: `This is a paragraph of placeholder text. It is only here to help show the layout of the page and how the text will flow. Replace this placeholder text with your own meaningful content.`,
        open: false,
        image: false
    }),
    grade: 'grade68'
};