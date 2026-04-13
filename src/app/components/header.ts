import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="mobile-header">
      <button class="toggle-btn" (click)="toggle.emit()" aria-label="Toggle Sidebar">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
      
      <div class="mobile-logo">
        <span class="logo-text">Docs<span>Hub</span></span>
      </div>

      <div class="spacer"></div>
    </header>
  `,
  styles: [`
    .mobile-header {
      display: none; /* Hidden by default, shown via media query */
      height: var(--header-height);
      background: var(--bg-sidebar);
      border-bottom: 1px solid var(--border-glass);
      padding: 0 1.5rem;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 90;
      backdrop-filter: blur(12px);
    }

    .toggle-btn {
      background: none;
      border: none;
      display: flex;
      flex-direction: column;
      gap: 5px;
      cursor: pointer;
      padding: 10px;
      margin-left: -10px;
    }

    .bar {
      width: 22px;
      height: 2px;
      background-color: var(--text-main);
      border-radius: 2px;
      transition: 0.3s;
    }

    .mobile-logo .logo-text {
      font-size: 1.25rem;
      font-weight: 700;
      margin-left: 1rem;
    }

    .mobile-logo span {
      color: var(--primary);
    }

    .spacer {
      flex: 1;
    }

    @media screen and (max-width: 1024px) {
      .mobile-header {
        display: flex;
      }
    }
  `]
})
export class Header {
  @Output() toggle = new EventEmitter<void>();
}
