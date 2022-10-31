import StaticTable from './StaticTable';

export default {
    component: StaticTable,
    title: 'Static Table',
};

const Template = args => <StaticTable {...args} />;

export const Default = Template.bind({});
Default.args = {
    tableTitle: 'Table Title',
    columnHeads: 'Column Headers',
    rowHeads:  'Row Headers',
    cellData: 'Cell Data',
    headers: 'Col Headers',
    grade: 'grade68',
};