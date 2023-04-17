import React from 'react';

import BarsHorizontal from './BarsHorizontal';

export default {
    title: 'Bars Chart',
    component: BarsHorizontal,
};

const Template = (args) => <BarsHorizontal {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    data: [
        { name: 'Polivitaminico', label: 'Jan.', value: 2500 },
        { name: 'Vitamina E', label: 'Jan.', value: 1800 },
        { name: 'Polivitaminico', label: 'Fev.', value: 1700 },
        { name: 'Vitamina E', label: 'Fev.', value: 2600 },
    ],
    height: 350,
    axis: "Qtd",
    padding: [50, 50, 60, 120], 
    axis: "Qtd",
    position: "bottom",
};