import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyButton } from '../components/copy-button';

@Component({
  selector: 'app-angular-commands',
  standalone: true,
  imports: [CommonModule, CopyButton],
  template: `
    <div class="cheat-sheet-container fade-in">
      <div class="header">
        <div class="angular-badge">Angular CLI</div>
        <h1>ANGULAR COMMANDS</h1>
        <p class="intro">
          The Angular CLI is a command-line interface tool that you use to initialize, develop,
          scaffold, and maintain Angular applications directly from a command shell.
        </p>
      </div>

      <!-- Beginner Onboarding Guide -->
      <section class="cheat-card full-width onboarding-section">
        <div class="onboarding-header">
          <span class="guide-badge">STEP-BY-STEP</span>
          <h3>First-Time Angular Setup Guide</h3>
          <p>Follow these steps to set up your environment and create your first project.</p>
        </div>

        <div class="onboarding-steps">
          <div class="step-card">
            <div class="step-icon">01</div>
            <h4>Install Node.js</h4>
            <p>
              Download and install the <strong>LTS Version</strong> of Node.js from
              <a href="https://nodejs.org/" target="_blank">nodejs.org</a>.
            </p>
          </div>
          <div class="step-card">
            <div class="step-icon">02</div>
            <h4>Verify Installation</h4>
            <p>Open Terminal/CMD and run these to verify:</p>
            <div class="cmd-mini">
              <code>node -v</code>
              <app-copy-button text="node -v"></app-copy-button>
            </div>
            <div class="cmd-mini">
              <code>npm -v</code>
              <app-copy-button text="npm -v"></app-copy-button>
            </div>
          </div>
          <div class="step-card">
            <div class="step-icon">03</div>
            <h4>Install Angular CLI</h4>
            <p>Install the CLI globally on your machine:</p>
            <div class="cmd-mini">
              <code>npm install -g &#64;angular/cli</code>
              <app-copy-button text="npm install -g @angular/cli"></app-copy-button>
            </div>
            <p class="note">If you get a script error, see the FIX below.</p>
          </div>
          <div class="step-card">
            <div class="step-icon">04</div>
            <h4>Create Project</h4>
            <p>Run this command to create a new app:</p>
            <div class="cmd-mini">
              <code>ng new my-angular-app</code>
              <app-copy-button text="ng new my-angular-app"></app-copy-button>
            </div>
          </div>
          <div class="step-card">
            <div class="step-icon">05</div>
            <h4>Run Your App</h4>
            <p>Navigate into the folder and start the server:</p>
            <div class="cmd-mini">
              <code>cd my-angular-app</code>
              <app-copy-button text="cd my-angular-app"></app-copy-button>
            </div>
            <div class="cmd-mini" style="margin-top: 5px;">
              <code>ng serve --open</code>
              <app-copy-button text="ng serve --open"></app-copy-button>
            </div>
          </div>
        </div>
      </section>

      <!-- Troubleshooting Section -->
      <section class="cheat-card full-width error-fix-section">
        <div class="fix-header">
          <span class="fix-badge">FIX</span>
          <h3>npm / ng cannot be loaded - PowerShell Script Error</h3>
        </div>

        <div class="error-box">
          <p class="error-title">ERROR:</p>
          <code
            >npm.ps1 cannot be loaded because running scripts is disabled on this system.
            (PSSecurityException: UnauthorizedAccess)</code
          >
        </div>

        <div class="solution-grid">
          <div class="solution-step">
            <span class="step-num">01</span>
            <p>
              Open <strong>PowerShell as Administrator</strong> (Right-click > "Run as
              Administrator")
            </p>
          </div>
          <div class="solution-step">
            <span class="step-num">02</span>
            <div class="step-cmd">
              <p>Run this command:</p>
              <div class="cmd-header">
                <code>Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned</code>
                <app-copy-button
                  text="Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned"
                ></app-copy-button>
              </div>
            </div>
          </div>
          <div class="solution-step">
            <span class="step-num">03</span>
            <p>Type <strong>Y</strong> and press <strong>Enter</strong> to confirm.</p>
          </div>
        </div>

        <div class="alt-solution">
          <h4>Alternative: Use Command Prompt (CMD)</h4>
          <p>
            The execution policy does NOT apply to CMD. Just open <code>cmd.exe</code> and run your
            commands there.
          </p>
        </div>
      </section>

      <div class="cheat-grid">
        <div class="cheat-col">
          <section class="cheat-card premium-card">
            <h3>🚀 FIRST-TIME PREREQUISITES</h3>
            <p class="desc">Before creating your first project, ensure you have these installed.</p>
            <div class="cmd-group">
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>node -v</code>
                  <app-copy-button text="node -v"></app-copy-button>
                </div>
                <span>Check Node.js version (LTS recommended)</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>npm -v</code>
                  <app-copy-button text="npm -v"></app-copy-button>
                </div>
                <span>Check NPM version</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>npm install -g &#64;angular/cli</code>
                  <app-copy-button text="npm install -g @angular/cli"></app-copy-button>
                </div>
                <span>Install Angular CLI globally</span>
              </div>
            </div>
          </section>

          <section class="cheat-card">
            <h3>PROJECT SETUP</h3>
            <p class="desc">Commands to create and serve a new Angular project.</p>
            <div class="cmd-group">
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>ng new [project-name]</code>
                  <app-copy-button text="ng new project-name"></app-copy-button>
                </div>
                <span>Create a new Angular workspace</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>ng serve</code>
                  <app-copy-button text="ng serve"></app-copy-button>
                </div>
                <span>Build and serve your app, rebuilding on file changes</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>ng serve --open</code>
                  <app-copy-button text="ng serve --open"></app-copy-button>
                </div>
                <span>Serve the app and automatically open in browser</span>
              </div>
            </div>
          </section>

          <section class="cheat-card">
            <h3>SCAFFOLDING (GENERATE)</h3>
            <p class="desc">Generate Angular blueprints with the CLI.</p>
            <div class="cmd-group">
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>ng generate component [name]</code>
                  <app-copy-button text="ng generate component name"></app-copy-button>
                </div>
                <span>Create a new component (shortcut: ng g c)</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>ng generate service [name]</code>
                  <app-copy-button text="ng generate service name"></app-copy-button>
                </div>
                <span>Create a new service (shortcut: ng g s)</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>ng generate module [name]</code>
                  <app-copy-button text="ng generate module name"></app-copy-button>
                </div>
                <span>Create a new module (shortcut: ng g m)</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>ng generate interface [name]</code>
                  <app-copy-button text="ng generate interface name"></app-copy-button>
                </div>
                <span>Create a new interface (ng g i)</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>ng generate class [name]</code>
                  <app-copy-button text="ng generate class name"></app-copy-button>
                </div>
                <span>Create a new class (ng g cl)</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>ng generate enum [name]</code>
                  <app-copy-button text="ng generate enum name"></app-copy-button>
                </div>
                <span>Create a new enum (ng g e)</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>ng generate interceptor [name]</code>
                  <app-copy-button text="ng generate interceptor name"></app-copy-button>
                </div>
                <span>Create an HTTP interceptor</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>ng generate resolver [name]</code>
                  <app-copy-button text="ng generate resolver name"></app-copy-button>
                </div>
                <span>Create a route resolver</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>ng generate environments</code>
                  <app-copy-button text="ng generate environments"></app-copy-button>
                </div>
                <span>Generate env files for the project</span>
              </div>
            </div>
          </section>

           <section class="cheat-card warning">
            <h3>BUILD & DEPLOY</h3>
            <p class="desc">Prepare your application for production.</p>
            <div class="cmd-group">              
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>ng build</code>
                  <app-copy-button text="ng build"></app-copy-button>
                </div>
                <span>Compile the app into an output directory</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>ng build --configuration production</code>
                  <app-copy-button text="ng build --configuration production"></app-copy-button>
                </div>
                <span>Build for production (optimized)</span>
              </div>
            </div>
          </section>
        </div>

        <div class="cheat-col">
          <section class="cheat-card highlight">
            <h3>DEVELOPMENT & TESTING</h3>
            <p class="desc">Tools for testing and verifying your code.</p>
            <div class="cmd-group">
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>ng test</code>
                  <app-copy-button text="ng test"></app-copy-button>
                </div>
                <span>Run unit tests in the project</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>ng lint</code>
                  <app-copy-button text="ng lint"></app-copy-button>
                </div>
                <span>Run linting tools on your code</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>ng e2e</code>
                  <app-copy-button text="ng e2e"></app-copy-button>
                </div>
                <span>Build and run end-to-end tests</span>
              </div>
            </div>
          </section>         

          <section class="cheat-card secondary">
            <h3>ADVANCED & MAINTENANCE</h3>
            <p class="desc">Advanced CLI tools and project maintenance.</p>
            <div class="cmd-group">
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>ng serve --port 7312</code>
                  <app-copy-button text="ng serve --port 7312"></app-copy-button>
                </div>
                <span>Serve the app on a specific port</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>ng update</code>
                  <app-copy-button text="ng update"></app-copy-button>
                </div>
                <span>Update your application and its dependencies</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>ng add [package]</code>
                  <app-copy-button text="ng add package"></app-copy-button>
                </div>
                <span>Add support for external libraries (e.g. &#64;angular/material)</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>ng config [path] [value]</code>
                  <app-copy-button text="ng config"></app-copy-button>
                </div>
                <span>Get/Set workspace configuration values</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>ng analytics on | off</code>
                  <app-copy-button text="ng analytics on"></app-copy-button>
                </div>
                <span>Turn CLI usage analytics on/off</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>ng doc [keyword]</code>
                  <app-copy-button text="ng doc"></app-copy-button>
                </div>
                <span>Open official docs in browser for a keyword</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>ng version</code>
                  <app-copy-button text="ng version"></app-copy-button>
                </div>
                <span>Display Angular CLI version information</span>
              </div>
            </div>
          </section>

          <section class="cheat-card npm-section">
            <h3>NPM COMMANDS</h3>
            <p class="desc">Exhaustive Node Package Manager commands.</p>
            <div class="cmd-group">
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>npm init -y</code>
                  <app-copy-button text="npm init -y"></app-copy-button>
                </div>
                <span>Initialize a new project with defaults</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>npm install</code>
                  <app-copy-button text="npm install"></app-copy-button>
                </div>
                <span>Install all dependencies from package.json</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>npm install [package]</code>
                  <app-copy-button text="npm install [package]"></app-copy-button>
                </div>
                <span>Install a specific package</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>npm install [package] --save-dev</code>
                  <app-copy-button text="npm install [package] --save-dev"></app-copy-button>
                </div>
                <span>Install a development dependency</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>npm ci</code>
                  <app-copy-button text="npm ci"></app-copy-button>
                </div>
                <span>Clean install (strictly follows package-lock.json)</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>npm update</code>
                  <app-copy-button text="npm update"></app-copy-button>
                </div>
                <span>Update all listed packages</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>npm list --depth=0</code>
                  <app-copy-button text="npm list --depth=0"></app-copy-button>
                </div>
                <span>List installed top-level packages</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>npm prune</code>
                  <app-copy-button text="npm prune"></app-copy-button>
                </div>
                <span>Remove unused/extraneous packages</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>npm cache clean --force</code>
                  <app-copy-button text="npm cache clean --force"></app-copy-button>
                </div>
                <span>Forcefully clear the npm cache</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>npm doctor</code>
                  <app-copy-button text="npm doctor"></app-copy-button>
                </div>
                <span>Check your environment for npm issues</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>npm publish</code>
                  <app-copy-button text="npm publish"></app-copy-button>
                </div>
                <span>Publish a package to the npm registry</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .cheat-sheet-container {
        max-width: 1100px;
        margin: 0 auto;
        padding-bottom: 5rem;
      }

      .header {
        background: #dd0031; /* Angular Red */
        padding: 3rem;
        border-radius: 24px;
        margin-bottom: 3rem;
        color: white;
        position: relative;
        overflow: hidden;
      }

      .angular-badge {
        background: rgba(255, 255, 255, 0.2);
        display: inline-block;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        font-weight: 700;
        margin-bottom: 1rem;
        font-size: 0.8rem;
        text-transform: uppercase;
      }

      .header h1 {
        font-size: 3.5rem;
        font-weight: 800;
        margin-bottom: 1.5rem;
        letter-spacing: -0.02em;
      }

      .intro {
        max-width: 700px;
        line-height: 1.8;
        font-size: 1.1rem;
        opacity: 0.9;
      }

      .cheat-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin-bottom: 2rem;
      }

      .cheat-col {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .cheat-card {
        background: var(--bg-card);
        border: 1px solid var(--border-glass);
        padding: 2.5rem;
        border-radius: 24px;
        backdrop-filter: blur(8px);
      }

      .cheat-card h3 {
        font-size: 1.25rem;
        font-weight: 800;
        margin-bottom: 0.5rem;
        color: #dd0031; /* Angular Red */
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      .cheat-card .desc {
        font-size: 0.9rem;
        color: var(--text-muted);
        margin-bottom: 1.5rem;
      }

      .cmd-row {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        padding: 0.75rem 0;
        border-top: 1px solid var(--border-dim);
      }

      .cmd-row:first-child {
        border-top: none;
      }

      .cmd-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
      }

      code {
        font-family: 'Fira Code', monospace;
        color: var(--primary);
        font-weight: 600;
        font-size: 0.95rem;
      }

      .cmd-row span {
        font-size: 0.85rem;
        color: var(--text-dim);
      }

      .full-width {
        grid-column: 1 / -1;
      }

      .cheat-card.premium-card {
        border-color: var(--primary);
        background: linear-gradient(135deg, var(--bg-card), rgba(99, 102, 241, 0.05));
      }

      .cheat-card.highlight {
        border-color: var(--primary);
      }

      .cheat-card.warning h3 {
        color: var(--error);
      }

      .cheat-card.npm-section h3 {
        color: #cb3837; /* NPM Red */
      }

      .cheat-card.secondary h3 {
        color: var(--secondary);
      }

      /* Troubleshooting Section */
      .error-fix-section {
        margin-bottom: 3rem;
        border-color: #ef4444;
        background: rgba(239, 68, 68, 0.02);
      }

      .fix-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 2rem;
      }

      .fix-badge {
        background: #ef4444;
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 6px;
        font-weight: 800;
        font-size: 0.8rem;
      }

      .error-box {
        background: #1e293b;
        padding: 1.25rem;
        border-radius: 12px;
        margin-bottom: 2rem;
        border-left: 4px solid #ef4444;
      }

      .error-title {
        color: #ef4444;
        font-weight: 800;
        font-size: 0.8rem;
        margin-bottom: 0.5rem;
      }

      .error-box code {
        color: #cbd5e1;
        font-size: 0.9rem;
      }

      .solution-grid {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-bottom: 2.5rem;
      }

      .solution-step {
        display: flex;
        gap: 1.5rem;
        align-items: flex-start;
      }

      .step-num {
        background: var(--bg-sidebar);
        color: var(--text-dim);
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-weight: 800;
        font-size: 0.8rem;
        flex-shrink: 0;
      }

      .step-cmd {
        flex: 1;
      }

      .step-cmd p {
        margin-bottom: 0.5rem;
      }

      .alt-solution {
        border-top: 1px solid var(--border-dim);
        padding-top: 1.5rem;
      }

      .alt-solution h4 {
        margin-bottom: 0.5rem;
        color: var(--text-main);
      }

      .alt-solution p {
        color: var(--text-dim);
      }

      /* Onboarding Guide Styles */
      .onboarding-section {
        margin-bottom: 3rem;
        background: linear-gradient(135deg, var(--bg-card), rgba(99, 102, 241, 0.08));
        border-color: var(--primary);
      }

      .onboarding-header {
        text-align: center;
        margin-bottom: 3rem;
      }

      .guide-badge {
        background: var(--primary);
        color: white;
        padding: 0.35rem 1rem;
        border-radius: 8px;
        font-weight: 800;
        font-size: 0.75rem;
        margin-bottom: 1rem;
        display: inline-block;
      }

      .onboarding-header h3 {
        color: var(--text-main);
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }

      .onboarding-header p {
        color: var(--text-muted);
      }

      .onboarding-steps {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 1.5rem;
      }

      .step-card {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid var(--border-glass);
        padding: 1.5rem;
        border-radius: 16px;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        transition: transform 0.3s ease;
      }

      .step-card:hover {
        transform: translateY(-5px);
        background: rgba(255, 255, 255, 0.05);
      }

      .step-icon {
        width: 32px;
        height: 32px;
        background: var(--primary);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        font-size: 0.8rem;
      }

      .step-card h4 {
        font-size: 1rem;
        font-weight: 700;
        color: var(--text-main);
      }

      .step-card p {
        font-size: 0.85rem;
        color: var(--text-dim);
        line-height: 1.5;
      }

      .step-card a {
        color: var(--primary);
        text-decoration: none;
        font-weight: 600;
      }

      .cmd-mini {
        background: #1e293b;
        padding: 0.5rem 0.75rem;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .cmd-mini code {
        font-size: 0.8rem;
        color: #e2e8f0;
      }

      .step-card .note {
        font-size: 0.75rem;
        font-style: italic;
        color: var(--error);
      }

      /* Existing media queries... */
      @media screen and (max-width: 800px) {
        .cheat-grid {
          grid-template-columns: 1fr;
        }
        .header h1 {
          font-size: 2.5rem;
        }
      }
    `,
  ],
})
export class AngularCommands { }
