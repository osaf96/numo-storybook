import { Meta, StoryObj, argsToTemplate } from "@storybook/angular";
import { HeaderComponent } from "./header.component";

const meta: Meta<HeaderComponent> = {
    title: '2.Components/Header',
    component: HeaderComponent,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    render: () => ({
        props: {
        },
        template: `<app-header ></app-header>`,
    }),
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Default: Story = {
    args: {

    },
};