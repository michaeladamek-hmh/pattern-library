import React from 'react';

import Headers from './Headers';

export default {
    component: Headers,
    title: 'Headers',
};

const Template = args => <Headers {...args} />;

export const H1 = Template.bind({});
H1.args = {
    level: 'h1',
    text: 'This is an H1 header',
    varient: 'Source',
};

export const H2 = Template.bind({});
H2.args = {
    level: 'h2',
    text: 'This is an H2 header',
    varient: 'Source',
};

export const H3 = Template.bind({});
H3.args = {
    level: 'h3',
    text: 'This is an H3 header',
    varient: 'Source',
};

export const H4 = Template.bind({});
H4.args = {
    level: 'h4',
    text: 'This is an H4 header',
    varient: 'Source',
};

export const H5 = Template.bind({});
H5.args = {
    level: 'h5',
    text: 'This is an H5 header',
    varient: 'Source',
};

export const H6 = Template.bind({});
H6.args = {
    level: 'h6',
    text: 'This is an H6 header',
    varient: 'Source',
};