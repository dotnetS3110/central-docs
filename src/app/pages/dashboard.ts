import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { Chart, registerables } from 'chart.js/auto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard fade-in">
      <div class="dashboard-header">
        <h1>Live Analytics</h1>
        <p class="subtitle">Real-time performance and documentation engagement analysis.</p>
        <div class="live-indicator">
          <span class="pulse"></span>
          Live System Monitoring
        </div>
      </div>
      
      <div class="stats-grid">
        <div class="stat-card premium">
          <div class="stat-info">
            <span class="label">Total Guides</span>
            <span class="value">{{ stats.guides }}</span>
          </div>
          <div class="stat-trend positive">Active</div>
        </div>
        <div class="stat-card premium">
          <div class="stat-info">
            <span class="label">Live Sessions</span>
            <span class="value">{{ stats.sessions }}</span>
          </div>
          <div class="stat-trend" [class.positive]="stats.sessions > 5">
            {{ stats.sessions > 10 ? 'High Traffic' : 'Normal' }}
          </div>
        </div>
        <div class="stat-card premium">
          <div class="stat-info">
            <span class="label">System Load</span>
            <span class="value">{{ stats.load }}%</span>
          </div>
          <div class="stat-trend" [class.negative]="stats.load > 70">
            {{ stats.load > 70 ? 'Stressed' : 'Peak Healthy' }}
          </div>
        </div>
      </div>

      <div class="main-content-grid">
        <div class="chart-container-wrapper">
          <div class="chart-header">
            <h3>System Performance Flow</h3>
            <div class="chart-actions">
              <span class="badge">Real-time</span>
            </div>
          </div>
          <div class="chart-canvas-container">
            <canvas #chartCanvas></canvas>
          </div>
        </div>

        <div class="side-panel">
          <div class="recent-activity">
            <h3>Live Activity Feed</h3>
            <div class="activity-list">
              <div *ngFor="let activity of activities" class="activity-item fade-in-up">
                <div class="activity-icon" [style.background]="activity.color">
                  <span class="icon">{{ activity.icon }}</span>
                </div>
                <div class="activity-details">
                  <p>{{ activity.message }}</p>
                  <span class="time">{{ activity.time }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard {
      padding: 1.5rem;
      max-width: 1400px;
      margin: 0 auto;
    }
    .dashboard-header {
      margin-bottom: 2.5rem;
    }
    .dashboard h1 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 800;
      background: linear-gradient(135deg, var(--primary), #a855f7, #ec4899);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 0.5rem;
      letter-spacing: -0.02em;
    }
    .subtitle {
      color: var(--text-dim);
      font-size: 1.1rem;
      max-width: 600px;
    }
    .live-indicator {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(34, 197, 94, 0.1);
      color: #22c55e;
      padding: 0.4rem 1rem;
      border-radius: 100px;
      font-size: 0.85rem;
      font-weight: 700;
      margin-top: 1.5rem;
      border: 1px solid rgba(34, 197, 94, 0.2);
    }
    .pulse {
      width: 10px;
      height: 10px;
      background: #22c55e;
      border-radius: 50%;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
      70% { transform: scale(1.1); box-shadow: 0 0 0 12px rgba(34, 197, 94, 0); }
      100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2.5rem;
    }
    .stat-card.premium {
      background: var(--bg-card);
      border: 1px solid var(--border-glass);
      padding: 2rem;
      border-radius: 28px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
    }
    .stat-card.premium::before {
      content: '';
      position: absolute;
      top: 0; left: 0; width: 100%; height: 4px;
      background: linear-gradient(90deg, transparent, var(--primary), transparent);
      opacity: 0;
      transition: opacity 0.3s;
    }
    .stat-card.premium:hover {
      transform: translateY(-8px);
      border-color: var(--primary);
      box-shadow: 0 25px 50px -12px rgba(99, 102, 241, 0.25);
    }
    .stat-card.premium:hover::before { opacity: 1; }

    .stat-info .label {
      display: block;
      color: var(--text-dim);
      font-size: 0.95rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .stat-info .value {
      font-size: 3.5rem;
      font-weight: 800;
      color: var(--text-main);
      line-height: 1;
    }
    .stat-trend {
      font-size: 0.85rem;
      padding: 0.5rem 1rem;
      border-radius: 12px;
      font-weight: 700;
      background: rgba(255,255,255,0.05);
    }
    .stat-trend.positive { color: #22c55e; background: rgba(34, 197, 94, 0.1); }
    .stat-trend.negative { color: #ef4444; background: rgba(239, 68, 68, 0.1); }

    .main-content-grid {
      display: grid;
      grid-template-columns: 1fr 380px;
      gap: 2rem;
    }

    @media (max-width: 1100px) {
      .main-content-grid { grid-template-columns: 1fr; }
    }

    .chart-container-wrapper {
      background: var(--bg-card);
      border: 1px solid var(--border-glass);
      border-radius: 32px;
      padding: 2.5rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
    .chart-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2.5rem;
    }
    .chart-header h3 { font-size: 1.75rem; font-weight: 700; margin: 0; }
    .badge {
      background: var(--primary);
      color: white;
      padding: 0.4rem 1rem;
      border-radius: 10px;
      font-size: 0.75rem;
      font-weight: 800;
      letter-spacing: 0.05em;
    }
    .chart-canvas-container {
      height: 400px;
      width: 100%;
    }

    .recent-activity {
      background: var(--bg-card);
      border: 1px solid var(--border-glass);
      border-radius: 32px;
      padding: 2rem;
      height: 100%;
    }
    .recent-activity h3 { margin-bottom: 2rem; font-size: 1.5rem; }
    .activity-list { display: flex; flex-direction: column; gap: 1.25rem; }
    .activity-item {
      display: flex;
      gap: 1.25rem;
      padding: 1.25rem;
      border-radius: 20px;
      background: rgba(255,255,255,0.02);
      border: 1px solid transparent;
      transition: all 0.3s ease;
    }
    .activity-item:hover {
      background: rgba(255,255,255,0.05);
      border-color: var(--border-glass);
      transform: translateX(5px);
    }
    .activity-icon {
      width: 48px;
      height: 48px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 1.25rem;
      box-shadow: 0 8px 16px -4px rgba(0,0,0,0.2);
    }
    .activity-details p { margin: 0 0 0.25rem 0; font-weight: 600; font-size: 0.95rem; }
    .activity-details .time { font-size: 0.8rem; color: var(--text-dim); font-weight: 500; }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .fade-in-up { animation: fadeInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
  `]
})
export class Dashboard implements OnInit, OnDestroy, AfterViewInit {
  private router = inject(Router);
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;

  chart: any;
  updateSubscription?: Subscription;

  stats = { guides: 0, sessions: 0, load: 0 };

  activities = [
    { type: 'view', message: 'User viewed GitLab Guide', time: 'Just now', icon: '📖', color: '#6366f1' },
    { type: 'update', message: 'System metrics refreshed', time: '2 mins ago', icon: '⚡', color: '#10b981' },
    { type: 'view', message: 'Developer accessed Cheat Sheet', time: '5 mins ago', icon: '🧩', color: '#f59e0b' }
  ];

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.calculateDynamicStats();

    // Initial random values for flow
    this.stats.sessions = Math.floor(Math.random() * 15) + 5;
    this.stats.load = Math.floor(Math.random() * 30) + 20;

    // Real-time updates every 4 seconds
    this.updateSubscription = interval(4000).subscribe(() => {
      this.updateData();
    });
  }

  ngAfterViewInit() {
    this.initChart();
  }

  ngOnDestroy() {
    this.updateSubscription?.unsubscribe();
    this.chart?.destroy();
  }

  calculateDynamicStats() {
    // Count defined routes that aren't redirects or wildcards
    const guidesCount = this.router.config.filter(route =>
      route.path && route.path !== '' && route.path !== '**' && route.component
    ).length;

    this.stats.guides = guidesCount;
  }

  initChart() {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Array.from({ length: 12 }, (_, i) => `${i * 4}s`).reverse(),
        datasets: [{
          label: 'Request Load',
          data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 40) + 20),
          borderColor: '#6366f1',
          backgroundColor: (context: any) => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
            if (!chartArea) return null;
            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
            gradient.addColorStop(0, 'rgba(99, 102, 241, 0)');
            gradient.addColorStop(1, 'rgba(99, 102, 241, 0.15)');
            return gradient;
          },
          borderWidth: 4,
          fill: true,
          tension: 0.45,
          pointRadius: 0,
          pointHitRadius: 10
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { intersect: false, mode: 'index' },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#1e293b',
            titleFont: { size: 13, weight: 'bold' },
            bodyFont: { size: 12 },
            padding: 12,
            cornerRadius: 10,
            displayColors: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            grid: { color: 'rgba(255, 255, 255, 0.03)' },
            ticks: { color: '#94a3b8', font: { weight: 600 } }
          },
          x: {
            grid: { display: false },
            ticks: { color: '#94a3b8', font: { weight: 600 } }
          }
        }
      }
    });
  }

  updateData() {
    // Smooth random variation
    const sessionDiff = Math.random() > 0.5 ? 1 : -1;
    this.stats.sessions = Math.max(1, Math.min(50, this.stats.sessions + sessionDiff));

    const loadTarget = Math.floor(Math.random() * 50) + 20;
    this.stats.load = Math.round(this.stats.load * 0.7 + loadTarget * 0.3); // Smooth inertia

    // Update chart
    if (this.chart) {
      this.chart.data.datasets[0].data.shift();
      this.chart.data.datasets[0].data.push(this.stats.load);
      this.chart.update('none');
    }

    // Dynamic Activity Generation
    if (Math.random() > 0.6) {
      const activeOptions = [
        { msg: 'New CLI Tutorial viewed', icon: '💻', color: '#3b82f6' },
        { msg: 'SSH Key guide updated', icon: '🔑', color: '#10b981' },
        { msg: 'Deployment successful', icon: '🚀', color: '#f59e0b' },
        { msg: 'User searched "Vite"', icon: '🔍', color: '#ec4899' },
        { msg: 'Settings theme changed', icon: '🎨', color: '#8b5cf6' }
      ];
      const selected = activeOptions[Math.floor(Math.random() * activeOptions.length)];

      this.activities.unshift({
        type: 'view',
        message: selected.msg,
        time: 'Just now',
        icon: selected.icon,
        color: selected.color
      });

      if (this.activities.length > 6) this.activities.pop();
    }
  }
}
