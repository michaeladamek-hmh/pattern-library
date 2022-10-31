import TableCell from './TableCell';

export default {
    component: TableCell,
    title: 'Table Cell',
    decorators: [story => <table><tr>{story()}</tr></table>]
};

const Template = args => <TableCell {...args} />;

export const Default = Template.bind({});
Default.args = {
    dataCell: ({
        id: '1',
        text: `Cell Data`,
    }),
    grade: 'grade68'
};