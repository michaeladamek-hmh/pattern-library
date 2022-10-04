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
    image: false
};

export const AlignedLeft = Template.bind({});
AlignedLeft.args = {
    side: 'left',
    text: `This is an aside aligned to the left`,
    image: false
};

export const WithImage = Template.bind({});
WithImage.args = {
    side: 'right',
    text: `This is an aside aligned to the right`,
    image: true
};