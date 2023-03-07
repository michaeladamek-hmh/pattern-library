import React from 'react';

import Aside from './Aside';

export default {
    component: Aside,
    title: 'Aside',
};

const Template = args => <Aside {...args} />;

export const AlignedRight = Template.bind({});
AlignedRight.args = {
    side: 'right',
    text: `This is an aside aligned to the right`,
    blockquote: false,
    image: false
};

export const AlignedLeft = Template.bind({});
AlignedLeft.args = {
    side: 'left',
    text: `This is an aside aligned to the left`,
    blockquote: false,
    image: false
};

export const WithImage = Template.bind({});
WithImage.args = {
    side: 'right',
    text: `This is the source of the image`,
    blockquote: false,
    image: true
};

export const WithBlockquote = Template.bind({});
WithBlockquote.args = {
    side: 'right',
    text: 'This is a blockquote',
    source: 'This is the source of the quote',
    blockquote: true,
    image: false
};