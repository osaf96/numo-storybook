import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SubMenu } from './menu.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent {
  @Output() closeMenuOutput = new EventEmitter<void>();

  menuItems = SubMenu;
  constructor(private router: Router) {

  }
  onMenuClick(event: MouseEvent) {
    event.stopPropagation();
  }

  onBackgroundClick(event: MouseEvent) {
    this.closeMenuOutput.emit();
  }

  closeMenu() {
    this.closeMenuOutput.emit();
  }
  redirect(route: string, index: number) {
    this.resetState();
    this.menuItems[index].state = 'active';
    this.router.navigate([route]);
  }

  resetState() {
    this.menuItems.forEach((items) => {
      items.state = 'inactive';
    })
  }
}
