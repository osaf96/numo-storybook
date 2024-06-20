import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../stories/components/header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import description from "./description.md";

export default {
  title: '3.Layouts/HomePage',
  component: AppComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        RouterTestingModule,
        HeaderComponent,
      ],
    }), 
  ],
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
} as Meta<AppComponent>;

type Story = StoryObj<AppComponent>;

export const Default: Story = {
  args: {},
};
