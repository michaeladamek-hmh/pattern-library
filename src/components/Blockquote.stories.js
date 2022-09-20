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
    image: false,
    varient: 'Source'
};

export const WithoutSource = Template.bind({});
WithoutSource.args = {
    quote: 'This is a blockqote',
    source: null,
    image: false,
    varient: 'Source'
};

export const WithImage = Template.bind({});
WithImage.args = {
    quote: null,
    source: 'This is the source of the image',
    image: true,
    varient: 'Source'
};

export const UsHistory = Template.bind({});
UsHistory.args = {
    quote: '“At every house Women and children [are] making Cartridges, running Bullets . . . and at the same time animating [encouraging] their Husbands and Sons to fight.”',
    source: '— Anonymous Person',
    image: false,
    varient: 'SS-USH'
};