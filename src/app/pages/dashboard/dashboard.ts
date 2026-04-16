import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { Chart, registerables } from 'chart.js/auto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: '../../../assets/scss/dashboard/dashboard.scss',
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
