import React from 'react';

import Paragraph from './Paragraph';

export default {
    component: Paragraph,
    title: 'Paragraph',
};

const Template = args => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'This is a paragraph of placeholder text. It is only here to help show the layout of the page and how the text will flow. Replace this placeholder text with your own meaningful content.',
    spanish: `Este es un párrafo de texto de marcador de posición. Solo está aquí para ayudar a mostrar el diseño de la página y cómo fluirá el texto. Reemplace este texto de marcador de posición con su propio contenido significativo.`,
    language: 'english'
};