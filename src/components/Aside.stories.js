import React from 'react';

import Aside from './Aside';

export default {
    component: Aside,
    title: 'Aside',
};

const Template = args => <Aside {...args} />;

export const AsideAlignedRight = Template.bind({});
AsideAlignedRight.args = {
    side: 'right',
    text: `This is an aside aligned to the right`,
    image: false
};

export const AsideAlignedLeft = Template.bind({});
AsideAlignedLeft.args = {
    side: 'left',
    text: `This is an aside aligned to the left`,
    image: false
};

export const AsideWithImage = Template.bind({});
AsideWithImage.args = {
    side: 'right',
    text: `This is an aside aligned to the right`,
    image: true
};