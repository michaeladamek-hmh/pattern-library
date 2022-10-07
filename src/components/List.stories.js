import List from './List';

export default {
    component: List,
    title: 'List',
};

const Template = args => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'This is a list item placeholder text.',
    listType: 'ordered'
};