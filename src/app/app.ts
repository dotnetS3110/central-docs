import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './components/sidebar';
import { Header } from './components/header';
import { ThemeService } from './services/theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Sidebar, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  themeService = inject(ThemeService);
  protected readonly title = signal('docs-hub');
  protected readonly isSidebarOpen = signal(false);

  toggleSidebar() {
    this.isSidebarOpen.update(open => !open);
  }

  closeSidebar() {
    this.isSidebarOpen.set(false);
  }
}
