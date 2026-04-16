import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ThemeToggle],
  templateUrl: './sidebar.html',
  styleUrl: '../../../assets/scss/components/sidebar/sidebar.scss',
})
export class Sidebar {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  onLinkClick() {
    if (window.innerWidth <= 1024) {
      this.close.emit();
    }
  }
}
