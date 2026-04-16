import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-copy-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      class="copy-btn" 
      [class.copied]="copied()" 
      (click)="copyToClipboard($event)"
      [attr.aria-label]="copied() ? 'Copied' : 'Copy to clipboard'"
    >
      <span class="icon">
        <svg *ngIf="!copied()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <svg *ngIf="copied()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </span>
      <span class="tooltip" *ngIf="copied()">Copied!</span>
    </button>
  `,
  styles: [`
    .copy-btn {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border-glass);
      border-radius: 6px;
      padding: 6px;
      cursor: pointer;
      color: var(--text-muted);
      transition: all 0.2s ease;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
    }

    .copy-btn:hover {
      background: rgba(255, 255, 255, 0.1);
      color: var(--primary);
      border-color: var(--primary);
      transform: translateY(-1px);
    }

    .copy-btn.copied {
      color: #10b981;
      border-color: #10b981;
      background: rgba(16, 185, 129, 0.1);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
    }

    .icon svg {
      width: 100%;
      height: 100%;
    }

    .tooltip {
      position: absolute;
      bottom: calc(100% + 8px);
      left: 50%;
      transform: translateX(-50%);
      background: #10b981;
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 600;
      white-space: nowrap;
      pointer-events: none;
      animation: fadeInOut 2s ease-in-out forwards;
    }

    @keyframes fadeInOut {
      0% { opacity: 0; transform: translate(-50%, 4px); }
      15% { opacity: 1; transform: translate(-50%, 0); }
      85% { opacity: 1; transform: translate(-50%, 0); }
      100% { opacity: 0; transform: translate(-50%, -4px); }
    }
  `]
})
export class CopyButton {
  @Input() text: string = '';
  
  copied = signal(false);

  copyToClipboard(event: MouseEvent) {
    event.stopPropagation();
    if (!this.text) return;

    navigator.clipboard.writeText(this.text).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    });
  }
}
