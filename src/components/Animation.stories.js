import React from 'react';
import Animation from './Animation';

export default {
    component: Animation,
    title: 'Animation',
};

const Template = args => <Animation {...args} />;

export const Fade = Template.bind({});
Fade.args = {
    text: 'This is an animation',
    image: false,
    duration: 1500,
    delay: 1500,
    name: 'fadeIn',
    timing: 'ease-in-out',
    grade: 'grade68'
};

export const Bounce = Template.bind({});
Bounce.args = {
    text: 'This is an animation',
    image: false,
    duration: 1500,
    delay: 1500,
    name: 'bounceIn',
    timing: 'ease-in-out',
    grade: 'grade68'
};

export const Attention = Template.bind({});
Attention.args = {
    text: 'This is an animation',
    image: false,
    duration: 1500,
    delay: 1500,
    name: 'shakeX',
    timing: 'ease-in-out',
    grade: 'grade68'
};

// export const AlignedRight = Template.bind({});
// AlignedRight.args = {
//     side: 'right',
//     text: `This is an aside aligned to the right`,
//     blockquote: false,
//     image: false
// };

// export const AlignedLeft = Template.bind({});
// AlignedLeft.args = {
//     side: 'left',
//     text: `This is an aside aligned to the left`,
//     blockquote: false,
//     image: false
// };

// export const WithImage = Template.bind({});
// WithImage.args = {
//     side: 'right',
//     text: `This is the source of the image`,
//     blockquote: false,
//     image: true
// };

// export const WithBlockquote = Template.bind({});
// WithBlockquote.args = {
//     side: 'right',
//     text: 'This is a blockquote',
//     source: 'This is the source of the quote',
//     blockquote: true,
//     image: false
// };