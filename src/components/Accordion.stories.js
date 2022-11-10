import React from 'react';

import Accordion from './Accordion';
import * as AccordionListItemStories from './AccordionListItem.stories';

export default {
    component: Accordion,
    title: 'Accordion',
};

const Template = args => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
    listItems : [
        {...AccordionListItemStories.Default.args.item, id: '1', title: 'A New Accordion Title', text: 'This is a paragraph of placeholder text. It is only here to help show the layout of the page and how the text will flow. Replace this placeholder text with your own meaningful content.', open: true},
        {...AccordionListItemStories.Default.args.item, id: '2', title: 'A New Accordion Title', text: 'This is a paragraph of placeholder text. It is only here to help show the layout of the page and how the text will flow. Replace this placeholder text with your own meaningful content.', image: true},
        {...AccordionListItemStories.Default.args.item, id: '3', title: 'A New Accordion Title', text: 'This is a paragraph of placeholder text. It is only here to help show the layout of the page and how the text will flow. Replace this placeholder text with your own meaningful content.'}
    ]
};