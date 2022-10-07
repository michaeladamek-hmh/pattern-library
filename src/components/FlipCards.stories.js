import React from 'react';

import FlipCards from './FlipCards';
import * as FlipCardStories from './FlipCard.stories';

export default {
    component: FlipCards,
    title: 'Flip Cards',
};

const Template = args => <FlipCards {...args} />;

export const Default = Template.bind({});
Default.args = {
    cards : [
        { ...FlipCardStories.Default.args.card, id: '1', front: 'Iron Man', back: `Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. The character made his first appearance in Tales of Suspense #39 (cover dated March 1963), and received his own title in Iron Man #1 (May 1968). Also in 1963, the character founded the Avengers alongside Thor, Ant-Man, Wasp and the Hulk.`},
        { ...FlipCardStories.Default.args.card, id: '2', front: 'Captain America', back: `Captain America is a superhero appearing in American comic books published by Marvel Comics. Created by cartoonists Joe Simon and Jack Kirby, the character first appeared in Captain America Comics #1 (cover dated March 1941) from Timely Comics, a predecessor of Marvel Comics. Captain America was designed as a patriotic supersoldier who often fought the Axis powers of World War II and was Timely Comics' most popular character during the wartime period. The popularity of superheroes waned following the war, and the Captain America comic book was discontinued in 1950, with a short-lived revival in 1953. Since Marvel Comics revived the character in 1964, Captain America has remained in publication.`},
        { ...FlipCardStories.Default.args.card, id: '3', front: 'Thor 3', back: `Thor Odinson, or simply Thor is a fictional character appearing in American comic books published by Marvel Comics. The character is based on the Norse deity of the same name, who is the Asgardian god of thunder who has the enchanted hammer, Mjolnir, which grants him the ability to fly and manipulate weather amongst his other superhuman attributes.` }
    ]
};