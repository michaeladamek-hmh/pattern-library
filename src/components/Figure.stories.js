import React from 'react';

import Figure from './Figure';

export default {
    component: Figure,
    title: 'Figure',
};

const Template = args => <Figure {...args} />;

export const WithCaption = Template.bind({});
WithCaption.args = {
    caption: 'Caption text',
};

export const WithoutCaption = Template.bind({});
WithoutCaption.args = {
    caption: null
};