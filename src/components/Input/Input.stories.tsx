import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Input',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = (args: any) => (
  <div style={{ width: 200 }}>
    <Input {...args} />
  </div>
);
Primary.args = {
  className: 'Primary',
};
