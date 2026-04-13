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
        <div class="logo-icon">DH</div>
        <span class="logo-text">Docs<span>Hub</span></span>
        <button class="mobile-close" (click)="close.emit()">×</button>
      </div>
      
      <nav class="nav-links">
         <a routerLink="/dashboard" routerLinkActive="active" (click)="onLinkClick()" class="nav-item">
          <span class="icon">📊</span>
          <span class="label">Dashboard</span>
        </a>
        <a routerLink="/about" routerLinkActive="active" (click)="onLinkClick()" class="nav-item">
          <span class="icon">ℹ️</span>
          <span class="label">About</span>
        </a>
        <a routerLink="/gitlab-setup" routerLinkActive="active" (click)="onLinkClick()" class="nav-item">
          <span class="icon">🚀</span>
          <span class="label">GitLab Setup</span>
        </a>
        <a routerLink="/git-cheat-sheet" routerLinkActive="active" (click)="onLinkClick()" class="nav-item">
          <span class="icon">📜</span>
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
    }

    .nav-item:hover {
      background: rgba(255, 255, 255, 0.05);
      color: var(--text-main);
      transform: translateX(4px);
    }

    .nav-item.active {
      background: linear-gradient(90deg, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0) 100%);
      color: var(--primary);
      border-left: 4px solid var(--primary);
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
