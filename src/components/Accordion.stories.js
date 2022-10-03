import React from 'react';

import Accordion from './Accordion';
import * as AccordionListItemStories from './AccordionListItem.stories';

export default {
    component: Accordion,
    title: 'Accordion',
};

const Template = args => <Accordion {...args} />;

export const AccordionPlain = Template.bind({});
AccordionPlain.args = {
    listItems : [
        {...AccordionListItemStories.AccordionItem.args.item, id: '1', title: 'A New Accordion Title', text: 'Lorem Ipsum...', open: true},
        {...AccordionListItemStories.AccordionItem.args.item, id: '2', title: 'A New Accordion Title', text: 'Lorem Ipsum...', open: true, image: true},
        {...AccordionListItemStories.AccordionItem.args.item, id: '3', title: 'A New Accordion Title', text: 'Lorem Ipsum...'}
    ]
};