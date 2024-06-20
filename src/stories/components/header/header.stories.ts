import { Meta, StoryObj, argsToTemplate } from "@storybook/angular";
import { HeaderComponent } from "../../../stories/components/header/header.component";
import description from "./description.md";


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
    parameters: {
        docs: {
            description: {
                component: description,
            },
        },
    },
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Default: Story = {
    args: {

    },
};