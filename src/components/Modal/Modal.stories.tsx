import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Marbella/Modal',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = (args: any) => (
  <Modal data-testId="InputField-id" {...args} />
);
Primary.args = {
  children: 'Primary',
};
