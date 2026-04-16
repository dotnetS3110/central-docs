import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  templateUrl: './theme-toggle.html',
  styleUrl: '../../../assets/scss/components/theme-toggle/theme-toggle.scss',
})
export class ThemeToggle {
  themeService = inject(ThemeService);
}
