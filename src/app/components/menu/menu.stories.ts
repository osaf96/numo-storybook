import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { MenuComponent } from "./menu.component";
import { Menu } from "./menu.model";
import { CommonModule } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from "@angular/forms";

const meta: Meta<MenuComponent> = {
    title: '2.Components/Menu',
    component: MenuComponent,
    decorators: [
        moduleMetadata({
            imports: [
                CommonModule,
                RouterTestingModule,
                FormsModule
            ]
        })
    ],
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
        menuItems: Menu,
    }
};

