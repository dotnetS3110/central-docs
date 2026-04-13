import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="about-page fade-in">
      <div class="header">
        <h1>About Docs-Hub</h1>
        <p class="subtitle">Empowering developers with structured documentation.</p>
      </div>

      <div class="mission-section">
        <div class="card">
          <h2>Our Mission</h2>
          <p>Docs-Hub is designed to be the ultimate central repository for all your technical documentation needs. We focus on clarity, accessibility, and modern design to make learning and reference a pleasure.</p>
        </div>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="icon">🚀</div>
          <h3>Fast Access</h3>
          <p>Quick navigation through sidebar and optimized routing.</p>
        </div>
        <div class="feature-card">
          <div class="icon">🎨</div>
          <h3>Modern UI</h3>
          <p>Built with the latest design trends like glassmorphism and vibrant HSL colors.</p>
        </div>
        <div class="feature-card">
          <div class="icon">📖</div>
          <h3>Structured Guides</h3>
          <p>Step-by-step guides for complex tasks like GitLab setup and SSH configuration.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-page {
      max-width: 900px;
      margin: 0 auto;
    }
    .header {
      text-align: center;
      margin-bottom: 4rem;
    }
    .header h1 {
      font-size: 3.5rem;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .subtitle {
      color: var(--text-muted);
      font-size: 1.25rem;
    }
    .mission-section {
      margin-bottom: 4rem;
    }
    .card {
      background: var(--bg-card);
      border: 1px solid var(--border-glass);
      padding: 3rem;
      border-radius: 24px;
      backdrop-filter: blur(12px);
    }
    .card h2 {
      margin-bottom: 1.5rem;
      color: var(--primary);
    }
    .card p {
      line-height: 1.8;
      font-size: 1.1rem;
      color: var(--text-main);
    }
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }
    .feature-card {
      background: var(--bg-box);
      border: 1px solid var(--border-glass);
      padding: 2rem;
      border-radius: 20px;
      text-align: center;
      transition: all 0.3s ease;
    }
    .feature-card:hover {
      background: var(--bg-card);
      transform: translateY(-5px);
      border-color: var(--secondary);
    }
    .feature-card .icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    .feature-card h3 {
      margin-bottom: 1rem;
    }
    .feature-card p {
      color: var(--text-muted);
    }
    .footer {
      text-align: center;
      padding: 2rem 0;
      border-top: 1px solid var(--border-glass);
      color: var(--text-dim);
    }
  `]
})
export class About { }
