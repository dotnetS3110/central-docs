import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-copy-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './copy-button.html',
  styleUrl: '../../../assets/scss/components/copy-button/copy-button.scss',
})
export class CopyButton {
  @Input() text: string = '';
  
  copied = signal(false);

  copyToClipboard(event: MouseEvent) {
    event.stopPropagation();
    if (!this.text) return;

    navigator.clipboard.writeText(this.text).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    });
  }
}
