import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-erp-blueprint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './erp-blueprint.html',
  styleUrl: '../../../assets/scss/erp-blueprint/erp-blueprint.scss',
})
export class ErpBlueprint implements AfterViewInit, OnDestroy {
  activeTab: string = 'domain';
  charts: any[] = [];

  ngAfterViewInit() {
    this.initCharts();
  }

  ngOnDestroy() {
    this.charts.forEach(chart => chart.destroy());
  }

  switchTab(tabId: string) {
    this.activeTab = tabId;
  }

  highlightStep(event: MouseEvent) {
    const el = event.currentTarget as HTMLElement;
    const allSteps = document.querySelectorAll('.flow-step');

    allSteps.forEach((s: any) => s.style.opacity = '0.45');
    el.style.opacity = '1';

    setTimeout(() => {
      allSteps.forEach((s: any) => s.style.opacity = '1');
    }, 1800);
  }

  private initCharts() {
    // Bar chart
    const barCtx = document.getElementById('barChart') as HTMLCanvasElement;
    if (barCtx) {
      const barChart = new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: ['Domain', 'Application', 'Infrastructure', 'API', 'Tests'],
          datasets: [{
            label: 'Files',
            data: [12, 18, 14, 10, 8],
            backgroundColor: [
              'rgba(99, 102, 241, 0.7)',  // Primary (Indigo)
              'rgba(168, 85, 247, 0.7)',  // Secondary (Purple)
              'rgba(16, 185, 129, 0.7)',  // Success (Emerald)
              'rgba(244, 63, 94, 0.7)',   // Accent (Rose)
              'rgba(245, 158, 11, 0.7)'   // Warning (Amber)
            ],
            borderColor: ['#6366f1', '#a855f7', '#10b981', '#f43f5e', '#f59e0b'],
            borderWidth: 1,
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              titleColor: '#f8fafc',
              bodyColor: '#f8fafc',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              borderWidth: 1
            }
          },
          scales: {
            x: {
              grid: { color: 'rgba(255, 255, 255, 0.05)' },
              ticks: { color: '#94a3b8', font: { size: 11 } }
            },
            y: {
              grid: { color: 'rgba(255, 255, 255, 0.05)' },
              ticks: { color: '#94a3b8', font: { size: 11 } }
            }
          }
        }
      });
      this.charts.push(barChart);
    }

    // Doughnut chart
    const doughnutCtx = document.getElementById('doughnutChart') as HTMLCanvasElement;
    if (doughnutCtx) {
      const doughnutChart = new Chart(doughnutCtx, {
        type: 'doughnut',
        data: {
          labels: ['Business Logic', 'App Logic', 'Technical', 'API Delivery', 'Tests'],
          datasets: [{
            data: [35, 25, 20, 12, 8],
            backgroundColor: [
              'rgba(99, 102, 241, 0.8)',
              'rgba(168, 85, 247, 0.8)',
              'rgba(16, 185, 129, 0.8)',
              'rgba(244, 63, 94, 0.8)',
              'rgba(245, 158, 11, 0.8)'
            ],
            borderColor: ['#6366f1', '#a855f7', '#10b981', '#f43f5e', '#f59e0b'],
            borderWidth: 1,
            hoverOffset: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right',
              labels: { color: '#94a3b8', font: { size: 11 }, boxWidth: 12, padding: 10 }
            },
            tooltip: {
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              padding: 12,
              borderColor: 'rgba(255, 255, 255, 0.1)',
              borderWidth: 1
            }
          }
        }
      });
      this.charts.push(doughnutChart);
    }
  }
}
