import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Textarea from './Textarea';

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: 'Textarea',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Primary: Story = (args: any) => (
  <div style={{ width: 200 }}>
    <Textarea {...args} />
  </div>
);
Primary.args = {};
