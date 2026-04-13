import { Component } from '@angular/core';

@Component({
  selector: 'app-git-cheat-sheet',
  standalone: true,
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
                <code>git config --global user.name "[name]"</code>
                <span>set identifiable name for credit</span>
              </div>
              <div class="cmd-row">
                <code>git config --global user.email "[email]"</code>
                <span>set associated history marker email</span>
              </div>
              <div class="cmd-row">
                <code>git config --global color.ui auto</code>
                <span>automatic command line coloring</span>
              </div>
            </div>
          </section>

          <section class="cheat-card">
            <h3>SETUP & INIT</h3>
            <p class="desc">Initializing and cloning repositories.</p>
            <div class="cmd-group">
              <div class="cmd-row">
                <code>git init</code>
                <span>initialize existing directory as Git repo</span>
              </div>
              <div class="cmd-row">
                <code>git clone [url]</code>
                <span>retrieve entire repo from hosted location</span>
              </div>
            </div>
          </section>

          <section class="cheat-card">
            <h3>STAGE & SNAPSHOT</h3>
            <p class="desc">Working with snapshots and the Git staging area.</p>
            <div class="cmd-group">
              <div class="cmd-row">
                <code>git status</code>
                <span>show modified files in working directory</span>
              </div>
              <div class="cmd-row">
                <code>git add [file]</code>
                <span>add a file as it looks now to next commit</span>
              </div>
              <div class="cmd-row">
                <code>git reset [file]</code>
                <span>unstage a file while retaining changes</span>
              </div>
              <div class="cmd-row">
                <code>git diff</code>
                <span>diff of what is changed but not staged</span>
              </div>
              <div class="cmd-row">
                <code>git diff --staged</code>
                <span>diff of what is staged but not yet committed</span>
              </div>
              <div class="cmd-row">
                <code>git commit -m "[msg]"</code>
                <span>commit staged content as a new snapshot</span>
              </div>
            </div>
          </section>

          <section class="cheat-card secondary">
            <h3>TEMPORARY COMMITS</h3>
            <p class="desc">Temporarily store modified, tracked files.</p>
            <div class="cmd-group">
              <div class="cmd-row">
                <code>git stash</code>
                <span>save modified and staged changes</span>
              </div>
              <div class="cmd-row">
                <code>git stash pop</code>
                <span>write working from top of stash stack</span>
              </div>
              <div class="cmd-row">
                <code>git stash drop</code>
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
                <code>git branch</code>
                <span>list branches, * appears next to active</span>
              </div>
              <div class="cmd-row">
                <code>git branch [name]</code>
                <span>create a new branch at current commit</span>
              </div>
              <div class="cmd-row">
                <code>git checkout [name]</code>
                <span>switch to another branch and check it out</span>
              </div>
              <div class="cmd-row">
                <code>git merge [branch]</code>
                <span>merge branch's history into current one</span>
              </div>
              <div class="cmd-row">
                <code>git log</code>
                <span>show all commits in current branch's history</span>
              </div>
            </div>
          </section>

          <section class="cheat-card highlight">
            <h3>INSPECT & COMPARE</h3>
            <p class="desc">Examining logs, diffs and object information.</p>
            <div class="cmd-group">
              <div class="cmd-row">
                <code>git log</code>
                <span>show commit history for active branch</span>
              </div>
              <div class="cmd-row">
                <code>git log branchA..branchB</code>
                <span>show commits on B not on A</span>
              </div>
              <div class="cmd-row">
                <code>git show [SHA]</code>
                <span>show any object in human-readable format</span>
              </div>
            </div>
          </section>

          <section class="cheat-card">
            <h3>SHARE & UPDATE</h3>
            <p class="desc">Retrieving updates and updating local repos.</p>
            <div class="cmd-group">
              <div class="cmd-row">
                <code>git remote add [alias] [url]</code>
                <span>add a git URL as an alias</span>
              </div>
              <div class="cmd-row">
                <code>git fetch [alias]</code>
                <span>fetch down all branches from remote</span>
              </div>
              <div class="cmd-row">
                <code>git push [alias] [branch]</code>
                <span>transmit local commits to remote repo</span>
              </div>
              <div class="cmd-row">
                <code>git pull</code>
                <span>fetch and merge any commits from tracking</span>
              </div>
            </div>
          </section>

          <section class="cheat-card warning">
            <h3>REWRITE HISTORY</h3>
            <p class="desc">Rewriting branches, updating commits.</p>
            <div class="cmd-group">
              <div class="cmd-row">
                <code>git rebase [branch]</code>
                <span>apply current branch ahead of specified one</span>
              </div>
              <div class="cmd-row">
                <code>git reset --hard [commit]</code>
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
