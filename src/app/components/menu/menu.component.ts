import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent { 
  @Output() closeMenuOutput = new EventEmitter<void>();

  onMenuClick(event: MouseEvent) {
    event.stopPropagation();
  }

  onBackgroundClick(event: MouseEvent) {
    this.closeMenuOutput.emit();
  }

  closeMenu() {
    this.closeMenuOutput.emit();
  }
}
