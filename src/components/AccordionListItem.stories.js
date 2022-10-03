import React from 'react';

import AccordionListItem from './AccordionListItem';

export default {
    component: AccordionListItem,
    title: 'Accordion List Item',
    decorators: [story => <ul className={ 'source__accordion' }>{story()}</ul>]
};

const Template = args => <AccordionListItem {...args} />;

export const AccordionItem = Template.bind({});
AccordionItem.args = {
    item: {
        id: '1',
        title: 'Accordion Title',
        text: `This is a paragraph of placeholder text. It is only here to help show the layout of the page and how the text will flow. Replace this placeholder text with your own meaningful content.`,
        open: false,
        image: false,
    }
};