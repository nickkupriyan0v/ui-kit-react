import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Marbella/Button',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = (args: any) => (
  <div style={{ width: 200 }}>
    <Button {...args} />
  </div>
);
Primary.args = {
  children: 'Кнопка',
  style: {
    color: 'red',
    backgroundColor: 'blue',
  },
};
