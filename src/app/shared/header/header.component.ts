import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
     <p class="text-3xl font-bold underline"> 
      {{headerArg.title}} 
    </p>
  `,
  styles: ``
})
export class HeaderComponent {
  @Input() headerArg: any;
}
