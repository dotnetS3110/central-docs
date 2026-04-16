import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ThemeToggle],
  templateUrl: './header.html',
  styleUrl: '../../../assets/scss/components/header/header.scss',
})
export class Header {
  @Output() toggle = new EventEmitter<void>();
}
