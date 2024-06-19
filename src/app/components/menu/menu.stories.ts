import { Meta, StoryObj } from "@storybook/angular";
import { MenuComponent } from "./menu.component";

const meta: Meta<MenuComponent> = {
    title: 'Menu',
    component: MenuComponent,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    render: () => ({
        props: {
        },
        template: `<app-menu ></app-menu>`,
    }),
};

export default meta;
type Story = StoryObj<MenuComponent>;

export const Default: Story = {
    args: {

    },
};