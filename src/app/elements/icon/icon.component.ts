import { Component, Input } from '@angular/core'; 

@Component({
  selector: 'app-icon',
  template: `<iconify-icon icon="{{ icon }}" [ngClass]="class"></iconify-icon>`,
  standalone: true,
  imports: [],
})
export class IconComponent {
  @Input() icon!: string;
  @Input() class: string = 'text-gray-800';
}
