import { Component, inject } from '@angular/core';
import { ThemeService } from '../services/theme';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  template: `
    <button class="theme-toggle" (click)="themeService.toggleTheme()" [attr.aria-label]="'Switch to ' + (themeService.theme() === 'light' ? 'dark' : 'light') + ' theme'">
      <div class="toggle-track">
        <div class="toggle-thumb" [class.dark]="themeService.theme() === 'dark'">
          <span class="icon">{{ themeService.theme() === 'light' ? '☀️' : '🌙' }}</span>
        </div>
      </div>
    </button>
  `,
  styles: [`
    .theme-toggle {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      display: flex;
      align-items: center;
    }

    .toggle-track {
      width: 56px;
      height: 28px;
      background: var(--border-glass);
      border-radius: 20px;
      position: relative;
      transition: background 0.3s ease;
      border: 1px solid var(--border-glass);
    }

    .toggle-thumb {
      width: 22px;
      height: 22px;
      background: var(--primary);
      border-radius: 50%;
      position: absolute;
      top: 2px;
      left: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }

    .toggle-thumb.dark {
      transform: translateX(28px);
      background: var(--secondary);
    }

    .icon {
      font-size: 0.8rem;
    }
  `]
})
export class ThemeToggle {
  themeService = inject(ThemeService);
}
