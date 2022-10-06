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
        {...AccordionListItemStories.Default.args.item, id: '1', title: 'A New Accordion Title', text: 'Lorem Ipsum...', open: true},
        {...AccordionListItemStories.Default.args.item, id: '2', title: 'A New Accordion Title', text: 'Lorem Ipsum...', image: true},
        {...AccordionListItemStories.Default.args.item, id: '3', title: 'A New Accordion Title', text: 'Lorem Ipsum...'}
    ]
};