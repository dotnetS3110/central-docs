import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CopyButton } from '../../components/copy-button/copy-button';

@Component({
  selector: 'app-mvc-prompt-generator',
  standalone: true,
  imports: [CommonModule, FormsModule, CopyButton],
  templateUrl: './mvc-prompt-generator.html',
  styleUrl: '../../../assets/scss/mvc-prompt-generator/mvc-prompt-generator.scss',
})
export class MvcPromptGenerator {
  appName = '';
  modelName = '';
  modelField = '';
  connectionString = '';
  pattern = 'repository';
  generatedPrompt = '';

  generatePrompt() {
    if (!this.appName || !this.modelName) {
      return;
    }
    this.generatedPrompt = `I want to create a An MVC APP (${this.appName}) with ${this.modelName} and ${this.modelField} and using this connection string "${this.connectionString}" with ${this.pattern} pattern and with the use of try catch handling and clean architecture.`;
  }
}
