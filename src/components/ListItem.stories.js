import ListItem from './ListItem';

export default {
    component: ListItem,
    title: 'List Item',
    //decorators: [story => <ul className={ 'source__accordion' }>{story()}</ul>]
};

const Template = args => <ListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    item: ({
        id: '1',
        text: `This is a list item placeholder text.`,
    }),
    grade: 'grade68'
};