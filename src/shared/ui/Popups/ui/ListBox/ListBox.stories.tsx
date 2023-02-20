import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 200 }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    value: '123',
    items: [
        { content: 'efsfdsfdsfvses', value: '123' },
        { content: 'efsfdsfdsfvsedfdfs', value: '12345' },
    ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    direction: 'top left',
    value: '123',
    items: [
        { content: 'efsfdsfdsfvses', value: '123' },
        { content: 'efsfdsfdsfvsedfdfs', value: '12345' },
    ],
};

export const TopRight = Template.bind({});
TopRight.args = {
    direction: 'top right',
    value: '123',
    items: [
        { content: 'efsfdsfdsfvses', value: '123' },
        { content: 'efsfdsfdsfvsedfdfs', value: '12345' },
    ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    direction: 'bottom left',
    value: '123',
    items: [
        { content: 'efsfdsfdsfvses', value: '123' },
        { content: 'efsfdsfdsfvsedfdfs', value: '12345' },
    ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    direction: 'bottom right',
    value: '123',
    items: [
        { content: 'efsfdsfdsfvses', value: '123' },
        { content: 'efsfdsfdsfvsedfdfs', value: '12345' },
    ],
};
