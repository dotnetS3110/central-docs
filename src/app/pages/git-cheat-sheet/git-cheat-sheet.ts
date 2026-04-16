import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyButton } from '../../components/copy-button/copy-button';

@Component({
  selector: 'app-git-cheat-sheet',
  standalone: true,
  imports: [CommonModule, CopyButton],
  templateUrl: './git-cheat-sheet.html',
  styleUrl: '../../../assets/scss/git-cheat-sheet/git-cheat-sheet.scss',
})
export class GitCheatSheet { }
