import React from 'react';

import Table from './Table';

export default {
    component: Table,
    title: 'Table',
};

const Template = args => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
    tableTitle: 'Table Title',
    columnHeads: 'Column Headers',
    rowHeads:  'Row Headers',
    cellData: 'Cell Data',
    headers: 'Col Headers',
    grade: 'grade68',
};