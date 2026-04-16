import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { GitlabSetup } from './pages/gitlab-setup/gitlab-setup';
import { About } from './pages/about/about';
import { GitCheatSheet } from './pages/git-cheat-sheet/git-cheat-sheet';
import { MvcPromptGenerator } from './pages/mvc-prompt-generator/mvc-prompt-generator';
import { AngularCommands } from './pages/angular-commands/angular-commands';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'gitlab-setup', component: GitlabSetup },
  { path: 'about', component: About },
  { path: 'git-cheat-sheet', component: GitCheatSheet },
  { path: 'mvc-generator', component: MvcPromptGenerator },
  { path: 'angular-commands', component: AngularCommands },
  { path: '**', redirectTo: 'dashboard' }
];
