import type { Meta, StoryObj } from "@storybook/angular";
import { fn } from "@storybook/test";
import { InputComponent } from "./input.component";
import description from "./description.md"; // Import the markdown file

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<InputComponent> = {
  title: "1. Elements/Input",
  component: InputComponent,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Large: Story = {
  args: {
    size: "large",
    label: "Email",
    placeholder: "you@example.com",
    type: "email",
    name: "email",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Email",
    placeholder: "you@example.com",
    type: "email",
    name: "email",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    label: "Email",
    placeholder: "you@example.com",
    type: "email",
    name: "email",
  },
};

export const Week: Story = {
  args: {
    size: "medium",
    label: "Select week",
    placeholder: "",
    type: "week",
    name: "week",
  },
};
