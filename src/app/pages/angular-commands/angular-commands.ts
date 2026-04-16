import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyButton } from '../../components/copy-button/copy-button';

@Component({
  selector: 'app-angular-commands',
  standalone: true,
  imports: [CommonModule, CopyButton],
  templateUrl: './angular-commands.html',
  styleUrl: '../../../assets/scss/angular-commands/angular-commands.scss',
})
export class AngularCommands { }
