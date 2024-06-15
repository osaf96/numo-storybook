import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header [headerArg]="headerArg"></app-header>
    <h1 class="text-3xl font-bold underline">  
      Hello world! 
    </h1> 
    <iconify-icon class="icon-bell" icon="vaadin:bell"></iconify-icon>
    <router-outlet />

  `,
  styles: [`.icon-bell {
	color: #f80;
} `],
})
export class AppComponent {
  title = 'angular-latest';
  headerArg = { title: 'Custom Header' }
}
