import TableHead from './TableHead';

export default {
    component: TableHead,
    title: 'Table Head',
    decorators: [story => <table><tr>{story()}</tr></table>]
};

const Template = args => <TableHead {...args} />;

export const Default = Template.bind({});
Default.args = {
    headerCell: ({
        id: '1',
        text: `Column Headers`,
    }),
    grade: 'grade68'
};