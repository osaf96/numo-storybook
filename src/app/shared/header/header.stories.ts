import { Meta, StoryObj, argsToTemplate } from "@storybook/angular";
import { HeaderComponent } from "./header.component";

const meta: Meta<HeaderComponent> = {
    title: 'CustomHeader',
    component: HeaderComponent,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    render: (headerArg: HeaderComponent) => ({
        props: {
            ...headerArg,
        },
        template: `<app-header ${argsToTemplate(headerArg)}></app-header>`,
    }),
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Default: Story = {
    args: {

    },
};