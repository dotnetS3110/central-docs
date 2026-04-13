import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <div class="dashboard fade-in">
      <h1>Welcome to Docs-Hub</h1>
      <p class="subtitle">Your central place for project documentation and guides.</p>
      
      <div class="stats-grid">
        <div class="stat-card">
          <span class="value">12</span>
          <span class="label">Total Guides</span>
        </div>
        <div class="stat-card">
          <span class="value">4</span>
          <span class="label">Active Projects</span>
        </div>
        <div class="stat-card">
          <span class="value">🚀</span>
          <span class="label">Latest: GitLab Setup</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard h1 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
    }
    .subtitle {
      color: var(--text-muted);
      font-size: 1.25rem;
      margin-bottom: 3rem;
    }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
    }
    .stat-card {
      background: var(--bg-card);
      border: 1px solid var(--border-glass);
      padding: 2rem;
      border-radius: 20px;
      text-align: center;
      transition: transform 0.3s ease;
    }
    .stat-card:hover {
      transform: translateY(-5px);
      border-color: var(--primary);
    }
    .stat-card .value {
      display: block;
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--primary);
    }
    .stat-card .label {
      color: var(--text-dim);
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-size: 0.8rem;
    }
  `]
})
export class Dashboard {}
