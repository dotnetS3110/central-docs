import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyButton } from '../components/copy-button';

@Component({
  selector: 'app-gitlab-setup',
  standalone: true,
  imports: [CommonModule, CopyButton],
  template: `
    <div class="page-header fade-in">
      <h1>🚀 GitLab Repository Setup (SSH)</h1>
      <p class="subtitle">Quick guide to pushing projects to GitLab effortlessly.</p>
    </div>

    <div class="content-grid fade-in">
      <section class="step-card">
        <div class="step-icon">01</div>
        <h2>Navigate to Folder</h2>
        <div class="code-container">
          <pre><code>cd existing_folder</code></pre>
          <app-copy-button text="cd existing_folder"></app-copy-button>
        </div>
      </section>

      <section class="step-card">
        <div class="step-icon">02</div>
        <h2>Initialize Git</h2>
        <div class="code-container">
          <pre><code>git init --initial-branch=main --object-format=sha1</code></pre>
          <app-copy-button text="git init --initial-branch=main --object-format=sha1"></app-copy-button>
        </div>
      </section>

      <section class="step-card">
        <div class="step-icon">03</div>
        <h2>Add Remote</h2>
        <div class="code-container">
          <pre><code>git remote add origin git&#64;ws-srv-git.in.webmyne.com:template/modernize-angular-admin-panel.git</code></pre>
          <app-copy-button text="git remote add origin git&#64;ws-srv-git.in.webmyne.com:template/modernize-angular-admin-panel.git"></app-copy-button>
        </div>
      </section>

      <section class="step-card highlight">
        <div class="step-icon">04</div>
        <h2>Commit & Push</h2>
        <div class="code-container">
          <pre><code>git add .
git commit -m "Initial commit"
git push --set-upstream origin main</code></pre>
          <app-copy-button text='git add .
git commit -m "Initial commit"
git push --set-upstream origin main'></app-copy-button>
        </div>
      </section>

      <section class="full-width ssh-section">
        <h2>🔐 SSH Security Setup</h2>
        <p>Ensure your secure connection by configuring SSH keys.</p>
        <div class="code-block-wrapper">
          <div class="code-container">
            <pre><code>ssh-keygen -t ed25519 -C "your_email&#64;example.com"
ssh-add ~/.ssh/id_ed25519</code></pre>
            <app-copy-button text='ssh-keygen -t ed25519 -C "your_email@example.com"
ssh-add ~/.ssh/id_ed25519'></app-copy-button>
          </div>
        </div>
        
        <p class="secondary-info">Copy your public key and add it to GitLab Settings:</p>
        <div class="code-container">
          <pre><code>cat ~/.ssh/id_ed25519.pub</code></pre>
          <app-copy-button text="cat ~/.ssh/id_ed25519.pub"></app-copy-button>
        </div>

        <div class="test-connection success">
          <span class="icon">🧪</span>
          <div class="test-msg">
            <span>Test connection: <code>ssh -T git&#64;ws-srv-git.in.webmyne.com</code></span>
            <app-copy-button text="ssh -T git@ws-srv-git.in.webmyne.com"></app-copy-button>
          </div>
        </div>

        <div class="note-box warning">
          <span class="icon">⚠️</span>
          <p><strong>Note:</strong> For custom keys, configure <code>~/.ssh/config</code>.</p>
        </div>
      </section>
    </div>

    <div class="completion-footer fade-in">
      <div class="check-icon">✓</div>
      <h2>Successfully Setup!</h2>
      <p>Your repository is now connected and ready for deployment.</p>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      padding-bottom: 4rem;
    }

    .page-header {
      margin-bottom: 3rem;
    }

    .page-header h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      background: linear-gradient(to right, var(--text-main), var(--primary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .subtitle {
      color: var(--text-muted);
      font-size: 1.1rem;
    }

    .content-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .step-card {
      background: var(--bg-card);
      border: 1px solid var(--border-glass);
      padding: 2rem;
      border-radius: 20px;
      position: relative;
      transition: all 0.3s ease;
      backdrop-filter: blur(8px);
    }

    .step-card:hover {
      border-color: var(--primary);
      transform: translateY(-5px);
      box-shadow: var(--shadow-premium);
    }

    .step-icon {
      position: absolute;
      top: 1rem;
      right: 1.5rem;
      font-size: 3rem;
      font-weight: 800;
      opacity: 0.1;
      color: var(--primary);
    }

    .step-card h2 {
      font-size: 1.25rem;
      margin-bottom: 1.25rem;
      color: var(--text-main);
    }

    .step-card.highlight {
      grid-column: span 1;
      border-left: 4px solid var(--primary);
    }

    .code-container {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
    }

    .code-container app-copy-button {
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
    }

    pre {
      background: var(--bg-code);
      padding: 1.25rem;
      border-radius: 12px;
      overflow-x: auto;
      border: 1px solid var(--border-dim);
      flex: 1;
      padding-right: 3rem;
    }

    code {
      color: var(--text-main);
      font-size: 0.9rem;
    }

    .full-width {
      grid-column: 1 / -1;
    }

    .ssh-section {
      background: var(--bg-card);
      padding: 2.5rem;
      border-radius: 24px;
      border: 1px solid var(--border-glass);
    }

    .ssh-section h2 {
      margin-bottom: 1rem;
    }

    .secondary-info {
      margin: 1.5rem 0 1rem;
      color: var(--text-muted);
    }

    .test-connection {
      margin-top: 2rem;
      padding: 1rem 1.5rem;
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.2);
      border-radius: 12px;
      display: flex;
      align-items: center;
      gap: 1rem;
      color: var(--success);
    }

    .test-msg {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;
    }

    .note-box {
      margin-top: 1.5rem;
      padding: 1rem 1.5rem;
      background: rgba(245, 158, 11, 0.1);
      border: 1px solid rgba(245, 158, 11, 0.2);
      border-radius: 12px;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .note-box.warning {
      color: var(--warning);
    }

    .completion-footer {
      text-align: center;
      margin-top: 4rem;
      padding: 3rem;
      background: linear-gradient(to bottom, transparent, rgba(99, 102, 241, 0.05));
      border-radius: 30px;
    }

    .check-icon {
      width: 60px;
      height: 60px;
      background: var(--success);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      margin: 0 auto 1.5rem;
      box-shadow: 0 0 30px rgba(16, 185, 129, 0.4);
    }
  `]
})
export class GitlabSetup {}
