import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Menu } from './menu.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent {
  @Output() closeMenuOutput = new EventEmitter<void>();

  menuItems = [...Menu];
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
  redirect(route: string, submenu: any, index: number) {
    this.resetSubmenuState(submenu);
    submenu[index].state = 'active';
    this.router.navigate([route]);
  }

  resetSubmenuState(submenu:any[]) {
    submenu.forEach((items:any) => {
      items.state = 'inactive';
    })
  }
}
