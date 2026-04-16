import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CopyButton } from '../components/copy-button';

@Component({
  selector: 'app-mvc-prompt-generator',
  standalone: true,
  imports: [CommonModule, FormsModule, CopyButton],
  template: `
    <div class="generator-page fade-in">
      <div class="header">
        <h1>MVC Prompt Generator</h1>
        <p class="subtitle">Quickly generate standardized prompts for MVC application development using Clean Architecture.</p>
      </div>

      <div class="form-container premium-card">
        <div class="grid">
          <div class="form-group">
            <label>MVC App Name</label>
            <input [(ngModel)]="appName" placeholder="e.g. StudentManagement" class="premium-input">
          </div>
          <div class="form-group">
            <label>Model Name</label>
            <input [(ngModel)]="modelName" placeholder="e.g. Student" class="premium-input">
          </div>
          <div class="form-group">
            <label>Model Field</label>
            <input [(ngModel)]="modelField" placeholder="e.g. Name, Age" class="premium-input">
          </div>
          <div class="form-group">
            <label>Pattern</label>
            <select [(ngModel)]="pattern" class="premium-input">
              <option value="repository">Repository Pattern</option>
              <option value="service">Service Pattern</option>
            </select>
          </div>
        </div>
        <div class="form-group full-width">
          <label>Connection String</label>
          <input [(ngModel)]="connectionString" placeholder="e.g. Server=...;Database=..." class="premium-input">
        </div>

        <button (click)="generatePrompt()" class="generate-btn">
          <span>Generate Prompt</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      <div *ngIf="generatedPrompt" class="result-container premium-card fade-in">
        <div class="result-header">
          <h3>Generated Prompt</h3>
          <app-copy-button [text]="generatedPrompt" class="large-copy"></app-copy-button>
        </div>
        <div class="prompt-box">
          <p class="prompt-text">{{ generatedPrompt }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .generator-page {
      padding: 1.5rem;
      max-width: 1000px;
      margin: 0 auto;
    }
    .header { margin-bottom: 2.5rem; }
    h1 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 800;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 0.5rem;
      letter-spacing: -0.02em;
    }
    .subtitle { color: var(--text-dim); font-size: 1.1rem; }

    .premium-card {
      background: var(--bg-card);
      border: 1px solid var(--border-glass);
      border-radius: 28px;
      padding: 2.5rem;
      backdrop-filter: blur(12px);
      box-shadow: var(--shadow-premium);
      margin-bottom: 2rem;
      position: relative;
      overflow: hidden;
    }
    .premium-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; width: 100%; height: 4px;
      background: linear-gradient(90deg, transparent, var(--primary), transparent);
      opacity: 0.5;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .form-group { display: flex; flex-direction: column; gap: 0.75rem; }
    .full-width { grid-column: 1 / -1; }

    label {
      font-size: 0.9rem;
      font-weight: 700;
      color: var(--text-muted);
      margin-left: 0.5rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .premium-input {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--border-glass);
      border-radius: 16px;
      padding: 1rem 1.25rem;
      color: var(--text-main);
      font-size: 1rem;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      width: 100%;
    }
    .premium-input:focus {
      outline: none;
      border-color: var(--primary);
      background: rgba(255, 255, 255, 0.07);
      box-shadow: 0 0 0 4px var(--primary-glow);
      transform: translateY(-2px);
    }
    select.premium-input {
      cursor: pointer;
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 1rem center;
      background-size: 1.5em;
      padding-right: 3rem;
    }

    .generate-btn {
      margin-top: 1.5rem;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      color: white;
      border: none;
      padding: 1.25rem 2.5rem;
      border-radius: 18px;
      font-weight: 700;
      font-size: 1.1rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 1rem;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      width: fit-content;
      box-shadow: 0 10px 20px -5px var(--primary-glow);
    }
    .generate-btn:hover {
      transform: translateY(-4px) scale(1.02);
      box-shadow: 0 20px 40px -10px var(--primary-glow);
    }
    .generate-btn svg { width: 24px; height: 24px; transition: transform 0.4s ease; }
    .generate-btn:hover svg { transform: translateX(6px); }

    .result-container { margin-top: 3rem; animation: slideUp 0.5s ease; }
    .result-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }
    .result-header h3 { font-size: 1.5rem; color: var(--text-main); }

    .prompt-box {
      background: var(--bg-code);
      padding: 2rem;
      border-radius: 20px;
      border: 1px solid var(--border-glass);
      position: relative;
    }
    .prompt-text {
      color: var(--primary);
      font-family: 'Fira Code', monospace;
      line-height: 1.8;
      font-size: 1.1rem;
      margin: 0;
      word-break: break-word;
    }

    :host ::ng-deep .large-copy .copy-btn {
      width: 48px;
      height: 48px;
    }
    :host ::ng-deep .large-copy .icon {
      width: 24px;
      height: 24px;
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 640px) {
      .premium-card { padding: 1.5rem; }
      .generate-btn { width: 100%; justify-content: center; }
      .result-header { flex-direction: column; align-items: flex-start; gap: 1rem; }
    }
  `]
})
export class MvcPromptGenerator {
  appName = '';
  modelName = '';
  modelField = '';
  connectionString = '';
  pattern = 'repository';
  generatedPrompt = '';

  generatePrompt() {
    if (!this.appName || !this.modelName) {
      return;
    }
    this.generatedPrompt = `I want to create a An MVC APP (${this.appName}) with ${this.modelName} and ${this.modelField} and using this connection string "${this.connectionString}" with ${this.pattern} pattern and with the use of try catch handling and clean architecture.`;
  }
}
