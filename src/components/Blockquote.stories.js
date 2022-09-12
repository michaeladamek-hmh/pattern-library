import React from 'react';

import Blockquote from './Blockquote';

export default {
    component: Blockquote,
    title: 'Blockquote',
};

const Template = args => <Blockquote {...args} />;

export const WithSource = Template.bind({});
WithSource.args = {
    quote: 'This is a blockqote',
    source: 'This is the source of the quote',
    image: false
};

export const WithoutSource = Template.bind({});
WithoutSource.args = {
    quote: 'This is a blockqote',
    source: null,
    image: false
};

export const WithImage = Template.bind({});
WithImage.args = {
    quote: null,
    source: 'This is the source of the image',
    image: true
};

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };