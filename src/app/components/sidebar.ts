import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeToggle } from './theme-toggle';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ThemeToggle],
  template: `
     <aside class="sidebar" [class.open]="isOpen">
      <div class="logo">
        <div class="logo-icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <span class="logo-text">Docs<span>Hub</span></span>
        <button class="mobile-close" (click)="close.emit()">×</button>
      </div>
      
      <nav class="nav-links">
         <a routerLink="/dashboard" routerLinkActive="active" (click)="onLinkClick()" class="nav-item">
          <span class="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="7" height="9"></rect>
              <rect x="14" y="3" width="7" height="5"></rect>
              <rect x="14" y="12" width="7" height="9"></rect>
              <rect x="3" y="16" width="7" height="5"></rect>
            </svg>
          </span>
          <span class="label">Dashboard</span>
        </a>
        <a routerLink="/about" routerLinkActive="active" (click)="onLinkClick()" class="nav-item">
          <span class="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </span>
          <span class="label">About</span>
        </a>
        <a routerLink="/gitlab-setup" routerLinkActive="active" (click)="onLinkClick()" class="nav-item">
          <span class="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </span>
          <span class="label">GitLab Setup</span>
        </a>
        <a routerLink="/git-cheat-sheet" routerLinkActive="active" (click)="onLinkClick()" class="nav-item">
          <span class="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
          </span>
          <span class="label">Git Cheat Sheet</span>
        </a>
      </nav>

      <div class="sidebar-footer">
        <div class="footer-top">
          <div class="user-profile">
            <div class="avatar">V</div>
            <div class="user-info">
              <p class="name">Vansh</p>
              <p class="role">Developer</p>
            </div>
          </div>
          <app-theme-toggle></app-theme-toggle>
        </div>
      </div>
    </aside>
    <div class="sidebar-overlay" [class.show]="isOpen" (click)="close.emit()"></div>
  `,
  styles: [`
    .sidebar {
      width: var(--sidebar-width);
      height: 100vh;
      background: var(--bg-sidebar);
      border-right: 1px solid var(--border-glass);
      display: flex;
      flex-direction: column;
      padding: 1.5rem;
      position: fixed;
      left: 0;
      top: 0;
      backdrop-filter: blur(12px);
      z-index: 100;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 3rem;
      padding-left: 0.5rem;
    }

    .logo-icon {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 1.2rem;
      color: white;
      box-shadow: 0 4px 15px var(--primary-glow);
    }

    .logo-text {
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: -0.05em;
    }

    .logo-text span {
      color: var(--primary);
    }

    .mobile-close {
      display: none;
      background: none;
      border: none;
      color: var(--text-muted);
      font-size: 2rem;
      margin-left: auto;
      cursor: pointer;
    }

    .nav-links {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      flex: 1;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.85rem 1rem;
      border-radius: 12px;
      color: var(--text-muted);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      text-decoration: none;
    }

    .nav-item:hover {
      background: rgba(255, 255, 255, 0.05);
      color: var(--text-main);
      transform: translateX(4px);
    }

    .nav-item .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      transition: all 0.3s ease;
    }
    
    .nav-item .icon svg {
      width: 100%;
      height: 100%;
    }

    .nav-item:hover .icon {
      color: var(--primary);
      transform: scale(1.1) rotate(-5deg);
    }

    .nav-item.active {
      background: linear-gradient(90deg, rgba(99, 102, 241, 0.1) 0%, rgba(99, 102, 241, 0) 100%);
      color: var(--primary);
      border-left: 3px solid var(--primary);
    }
    
    .nav-item.active .icon {
      color: var(--primary);
    }

    .sidebar-footer {
      padding-top: 1.5rem;
      border-top: 1px solid var(--border-glass);
    }

    .footer-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .user-profile {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .avatar {
      width: 40px;
      height: 40px;
      background: var(--text-dim);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
    }

    .user-info .name { font-size: 0.9rem; font-weight: 600; margin: 0; color: var(--text-main); }
    .user-info .role { font-size: 0.75rem; color: var(--text-dim); margin: 0; }

    .sidebar-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.5);
      backdrop-filter: blur(4px);
      z-index: 95;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }

    @media screen and (max-width: 1024px) {
      .sidebar {
        transform: translateX(-100%);
        box-shadow: 20px 0 50px rgba(0,0,0,0.5);
      }
      .sidebar.open {
        transform: translateX(0);
      }
      .mobile-close {
        display: block;
      }
      .sidebar-overlay.show {
        opacity: 1;
        pointer-events: auto;
      }
    }
  `]
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
