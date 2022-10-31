import Table from './Table';
import * as TableCellStories from './TableCell.stories';
import * as TableHeadStories from './TableHead.stories';

export default {
    component: Table,
    title: 'Table',
};

const Template = args => <Table {...args} />;

export const ColHeadTable = Template.bind({});
ColHeadTable.args = {
    tableTitle: 'Table Title',
    tableHeaders: [
        {...TableHeadStories.Default.args.headerCell, id: '1', text: 'This is header text one'},
        {...TableHeadStories.Default.args.headerCell, id: '2', text: 'This is header text two'},
        {...TableHeadStories.Default.args.headerCell, id: '3', text: 'This is header text three'}
    ],
    // columnHeads: 'Column Headers',
    // rowHeads:  'Row Headers',
    // dataCells: [
    //     {...TableCellStories.Default.args.dataCell, id: '1', text: 'This is a list item one placeholder text.'},
    //     {...TableCellStories.Default.args.dataCell, id: '2', text: 'This is a list item two placeholder text.'},
    //     {...TableCellStories.Default.args.dataCell, id: '3', text: 'This is a list item three placeholder text.'}
    // ],
    headers: 'Col Headers',
    grade: 'grade68',
};