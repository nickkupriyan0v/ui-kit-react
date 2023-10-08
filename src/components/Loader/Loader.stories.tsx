import React, { CSSProperties } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Loader from './Loader';

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: 'Loader',
};

export default meta;

type Story = StoryObj<typeof Loader>;

const styles: CSSProperties = {
  backgroundColor: 'red',
  width: 200,
  height: 200,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const LoaderStory: Story = (args: any) => (
  <div style={styles}>
    <Loader {...args} />
  </div>
);
LoaderStory.args = {};
