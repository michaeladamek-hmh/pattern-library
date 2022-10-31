import TableRowHead from './TableRowHead';

export default {
    component: TableRowHead,
    title: 'Table Row Head',
    decorators: [story => <table><tr>{story()}</tr></table>]
};

const Template = args => <TableRowHead {...args} />;

export const Default = Template.bind({});
Default.args = {
    headerRowCell: ({
        id: '1',
        text: `Row Headers`,
    }),
    grade: 'grade68'
};