import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule, MenuComponent],
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {
  isDropdownOpen = false;
  isMenuVisible = false;
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }
  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
  closeMenu() {
    this.isMenuVisible = false;
  }
}
