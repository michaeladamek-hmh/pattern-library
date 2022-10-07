import FlipCard from './FlipCard';

export default {
    component: FlipCard,
    title: 'Flip Card',
    decorators: [story => <ul className={ 'source__flipcards' }>{story()}</ul>]
};

const Template = args => <FlipCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    card: ({
        id: '1',
        front: 'Thor 2',
        back: `Thor Odinson, or simply Thor is a fictional character appearing in American comic books published by Marvel Comics. The character is based on the Norse deity of the same name, who is the Asgardian god of thunder who has the enchanted hammer, Mjolnir, which grants him the ability to fly and manipulate weather amongst his other superhuman attributes.`,
        open: false,
        image: false
    }),
    grade: 'grade68'
};