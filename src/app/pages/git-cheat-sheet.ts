import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyButton } from '../components/copy-button';

@Component({
  selector: 'app-git-cheat-sheet',
  standalone: true,
  imports: [CommonModule, CopyButton],
  template: `
    <div class="cheat-sheet-container fade-in">
      <div class="header">
        <div class="github-badge">GitHub</div>
        <h1>GIT CHEAT SHEET</h1>
        <p class="intro">
          Git is the free and open source distributed version control system that's responsible for
          everything GitHub related that happens locally on your computer. This cheat sheet features
          the most important and commonly used Git commands for easy reference.
        </p>
      </div>

      <div class="cheat-grid">
        <!-- Layout Part 1 -->
        <div class="cheat-col">
          <section class="cheat-card">
            <h3>INSTALLATION & GUIS</h3>
            <p class="desc">Platform specific installers and graphical interfaces.</p>
            <div class="info-links">
              <div class="link-item"><strong>GitHub for Windows:</strong> windows.github.com</div>
              <div class="link-item"><strong>GitHub for Mac:</strong> mac.github.com</div>
              <div class="link-item"><strong>Git for All Platforms:</strong> git-scm.com</div>
            </div>
          </section>

          <section class="cheat-card">
            <h3>SETUP</h3>
            <p class="desc">Configuring user information for all local repositories.</p>
            <div class="cmd-group">
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git config --global user.name "[name]"</code>
                  <app-copy-button text='git config --global user.name "[name]"'></app-copy-button>
                </div>
                <span>set identifiable name for credit</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git config --global user.email "[email]"</code>
                  <app-copy-button text='git config --global user.email "[email]"'></app-copy-button>
                </div>
                <span>set associated history marker email</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git config --global color.ui auto</code>
                  <app-copy-button text='git config --global color.ui auto'></app-copy-button>
                </div>
                <span>automatic command line coloring</span>
              </div>
            </div>
          </section>

          <section class="cheat-card">
            <h3>SETUP & INIT</h3>
            <p class="desc">Initializing and cloning repositories.</p>
            <div class="cmd-group">
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git init</code>
                  <app-copy-button text="git init"></app-copy-button>
                </div>
                <span>initialize existing directory as Git repo</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git clone [url]</code>
                  <app-copy-button text="git clone [url]"></app-copy-button>
                </div>
                <span>retrieve entire repo from hosted location</span>
              </div>
            </div>
          </section>

          <section class="cheat-card">
            <h3>STAGE & SNAPSHOT</h3>
            <p class="desc">Working with snapshots and the Git staging area.</p>
            <div class="cmd-group">
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git status</code>
                  <app-copy-button text="git status"></app-copy-button>
                </div>
                <span>show modified files in working directory</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git add [file]</code>
                  <app-copy-button text="git add [file]"></app-copy-button>
                </div>
                <span>add a file as it looks now to next commit</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git reset [file]</code>
                  <app-copy-button text="git reset [file]"></app-copy-button>
                </div>
                <span>unstage a file while retaining changes</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git diff</code>
                  <app-copy-button text="git diff"></app-copy-button>
                </div>
                <span>diff of what is changed but not staged</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git diff --staged</code>
                  <app-copy-button text="git diff --staged"></app-copy-button>
                </div>
                <span>diff of what is staged but not yet committed</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git commit -m "[msg]"</code>
                  <app-copy-button text='git commit -m "[msg]"'></app-copy-button>
                </div>
                <span>commit staged content as a new snapshot</span>
              </div>
            </div>
          </section>

          <section class="cheat-card secondary">
            <h3>TEMPORARY COMMITS</h3>
            <p class="desc">Temporarily store modified, tracked files.</p>
            <div class="cmd-group">
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git stash</code>
                  <app-copy-button text="git stash"></app-copy-button>
                </div>
                <span>save modified and staged changes</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git stash pop</code>
                  <app-copy-button text="git stash pop"></app-copy-button>
                </div>
                <span>write working from top of stash stack</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git stash drop</code>
                  <app-copy-button text="git stash drop"></app-copy-button>
                </div>
                <span>discard changes from top of stash stack</span>
              </div>
            </div>
          </section>
        </div>

        <!-- Layout Part 2 -->
        <div class="cheat-col">
          <section class="cheat-card">
            <h3>BRANCH & MERGE</h3>
            <p class="desc">Isolating work in branches, changing context.</p>
            <div class="cmd-group">
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git branch</code>
                  <app-copy-button text="git branch"></app-copy-button>
                </div>
                <span>list branches, * appears next to active</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git branch [name]</code>
                  <app-copy-button text="git branch [name]"></app-copy-button>
                </div>
                <span>create a new branch at current commit</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git checkout [name]</code>
                  <app-copy-button text="git checkout [name]"></app-copy-button>
                </div>
                <span>switch to another branch and check it out</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git merge [branch]</code>
                  <app-copy-button text="git merge [branch]"></app-copy-button>
                </div>
                <span>merge branch's history into current one</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git log</code>
                  <app-copy-button text="git log"></app-copy-button>
                </div>
                <span>show all commits in current branch's history</span>
              </div>
            </div>
          </section>

          <section class="cheat-card highlight">
            <h3>INSPECT & COMPARE</h3>
            <p class="desc">Examining logs, diffs and object information.</p>
            <div class="cmd-group">
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git log</code>
                  <app-copy-button text="git log"></app-copy-button>
                </div>
                <span>show commit history for active branch</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git log branchA..branchB</code>
                  <app-copy-button text="git log branchA..branchB"></app-copy-button>
                </div>
                <span>show commits on B not on A</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git show [SHA]</code>
                  <app-copy-button text="git show [SHA]"></app-copy-button>
                </div>
                <span>show any object in human-readable format</span>
              </div>
            </div>
          </section>

          <section class="cheat-card">
            <h3>SHARE & UPDATE</h3>
            <p class="desc">Retrieving updates and updating local repos.</p>
            <div class="cmd-group">
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git remote add [alias] [url]</code>
                  <app-copy-button text="git remote add [alias] [url]"></app-copy-button>
                </div>
                <span>add a git URL as an alias</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git fetch [alias]</code>
                  <app-copy-button text="git fetch [alias]"></app-copy-button>
                </div>
                <span>fetch down all branches from remote</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git push [alias] [branch]</code>
                  <app-copy-button text="git push [alias] [branch]"></app-copy-button>
                </div>
                <span>transmit local commits to remote repo</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git pull</code>
                  <app-copy-button text="git pull"></app-copy-button>
                </div>
                <span>fetch and merge any commits from tracking</span>
              </div>
            </div>
          </section>

          <section class="cheat-card warning">
            <h3>REWRITE HISTORY</h3>
            <p class="desc">Rewriting branches, updating commits.</p>
            <div class="cmd-group">
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git rebase [branch]</code>
                  <app-copy-button text="git rebase [branch]"></app-copy-button>
                </div>
                <span>apply current branch ahead of specified one</span>
              </div>
              <div class="cmd-row">
                <div class="cmd-header">
                  <code>git reset --hard [commit]</code>
                  <app-copy-button text="git reset --hard [commit]"></app-copy-button>
                </div>
                <span>clear staging area, rewrite working tree</span>
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
        background: #47a185; /* GitHub Education Green */
        padding: 3rem;
        border-radius: 24px;
        margin-bottom: 3rem;
        color: white;
        position: relative;
        overflow: hidden;
      }

      .github-badge {
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
      }

      .cheat-col {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .cheat-card {
        background: var(--bg-card);
        border: 1px solid var(--border-glass);
        padding: 2rem;
        border-radius: 20px;
        backdrop-filter: blur(8px);
      }

      .cheat-card h3 {
        font-size: 1.1rem;
        font-weight: 800;
        margin-bottom: 0.5rem;
        color: #47a185;
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

      .info-links .link-item {
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
        color: var(--text-main);
      }

      .cheat-card.highlight {
        border-color: var(--primary);
      }

      .cheat-card.warning h3 {
        color: var(--error);
      }
      .cheat-card.secondary h3 {
        color: var(--secondary);
      }

      .cheat-footer {
        margin-top: 4rem;
        text-align: center;
        color: var(--text-dim);
        font-size: 0.9rem;
      }

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
export class GitCheatSheet { }
