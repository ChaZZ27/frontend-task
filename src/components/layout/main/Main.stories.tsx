import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Main } from './Main';

export default {
  title: 'Layout/Main',
  component: Main,
} as ComponentMeta<typeof Main>;

export const Default: ComponentStory<typeof Main> = (args) => <Main {...args} />;
