import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard';
import { GitlabSetup } from './pages/gitlab-setup';
import { About } from './pages/about';
import { GitCheatSheet } from './pages/git-cheat-sheet';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'gitlab-setup', component: GitlabSetup },
  { path: 'about', component: About },
  { path: 'git-cheat-sheet', component: GitCheatSheet },
  { path: '**', redirectTo: 'dashboard' }
];
