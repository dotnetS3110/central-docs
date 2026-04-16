import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyButton } from '../../components/copy-button/copy-button';

@Component({
  selector: 'app-gitlab-setup',
  standalone: true,
  imports: [CommonModule, CopyButton],
  templateUrl: './gitlab-setup.html',
  styleUrl: '../../../assets/scss/gitlab-setup/gitlab-setup.scss',
})
export class GitlabSetup {}
