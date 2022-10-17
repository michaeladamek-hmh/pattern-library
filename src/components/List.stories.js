import List from './List';
import * as ListItemStories from './ListItem.stories';

export default {
    component: List,
    title: 'List',
};

const Template = args => <List {...args} />;

export const UnorderedList = Template.bind({});
UnorderedList.args = {
    listItems : [
        {...ListItemStories.Default.args.item, id: '1', text: 'This is a list item placeholder text.'},
        {...ListItemStories.Default.args.item, id: '2', text: 'This is a list item placeholder text.'},
        {...ListItemStories.Default.args.item, id: '3', text: 'This is a list item placeholder text.'},
        {...ListItemStories.Default.args.item, id: '1', text: 'This is a list item placeholder text.'},
        {...ListItemStories.Default.args.item, id: '2', text: 'This is a list item placeholder text.'},
        {...ListItemStories.Default.args.item, id: '3', text: 'This is a list item placeholder text.'}
    ],
    listType: 'unordered'
};

export const OrderedList = Template.bind({});
OrderedList.args = {
    listItems : [
        {...ListItemStories.Default.args.item, id: '1', text: 'This is a list item placeholder text.'},
        {...ListItemStories.Default.args.item, id: '2', text: 'This is a list item placeholder text.'},
        {...ListItemStories.Default.args.item, id: '3', text: 'This is a list item placeholder text.'},
        {...ListItemStories.Default.args.item, id: '1', text: 'This is a list item placeholder text.'},
        {...ListItemStories.Default.args.item, id: '2', text: 'This is a list item placeholder text.'},
        {...ListItemStories.Default.args.item, id: '3', text: 'This is a list item placeholder text.'}
    ],
    listType: 'ordered'
};
// Default.args = {
//     text: 'This is a list item placeholder text.',
//     listType: 'ordered'
// };