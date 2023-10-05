import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Textarea from './Textarea';

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: 'Textarea',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Primary: Story = (args: any) => {
  const [state, setState] = useState('');

  const reset = () => {
    setState('');
  };

  const onChange = (e: any) => {
    setState(e.target.value);
  };

  return (
    <div style={{ width: 200 }}>
      <Textarea {...args} value={state} onChange={onChange} />
      <p>{state}</p>
      <button onClick={reset}>reset</button>
    </div>
  );
};
Primary.args = {};
