import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../stories/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
  <div class="bg-gray-100 h-screen">
    <app-header></app-header> 
    <router-outlet /> 
  </div>   
   `,
  styles: [],
})
export class AppComponent {
  title = 'angular-latest';
}
