import React from 'react';

import PageSection from './PageSection';

export default {
    component: PageSection,
    title: 'Page Section',
};

const Template = args => <PageSection {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'This is a paragraph of placeholder text. It is only here to help show the layout of the page and how the text will flow. Replace this placeholder text with your own meaningful content.',
};