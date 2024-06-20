import { argsToTemplate, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { IconComponent } from './icon.component';
 

export default {
  title: '1.Elements/Icons',
  component: IconComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  render: (args) => ({
      props: {
        ...args
      },
      template: `<app-icon ${argsToTemplate(args)}></app-icon>`,
  }),
} as Meta<IconComponent>;

type Story = StoryObj<IconComponent>;

export const Default: Story = {
  args: {
    icon: 'cil:bank',
    class: 'text-gray-800 text-2xl',
  },
};

export const SearchIcon: Story = {
  args: {
    icon: 'il:search',
    class: 'text-gray-800 text-2xl',
  },
};

export const BellIcon: Story = {
  args: {
    icon: 'il:bell',
    class: 'text-gray-800 text-2xl',
  },
};
