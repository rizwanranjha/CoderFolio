# Local Development Setup

## Prerequisites

### Step 1: Install Ruby (Windows)

1. **Download RubyInstaller for Windows**
   - Go to: https://rubyinstaller.org/downloads/
   - Download **Ruby+Devkit** (recommended version: 3.2.x or 3.3.x)
   - This includes Ruby, RubyGems, and development tools

2. **Run the Installer**
   - Check "Add Ruby executables to your PATH"
   - Check "Associate .rb and .rbw files with this Ruby installation"
   - Complete the installation

3. **Run the MSYS2 Setup** (if prompted)
   - After Ruby installation, a terminal will open
   - Press Enter to install MSYS2 development toolchain
   - This is needed for some Ruby gems

4. **Verify Installation**
   - Open a **new** PowerShell or Command Prompt window
   - Run: `ruby --version`
   - Run: `gem --version`

### Step 2: Install Bundler

Open PowerShell/Command Prompt and run:

```bash
gem install bundler
```

Verify installation:
```bash
bundle --version
```

**Note:** If you get permission errors, you may need to run PowerShell as Administrator.

## Quick Start

### Step 1: Install Dependencies

Open your terminal/command prompt in the project directory and run:

```bash
bundle install
```

This will install all the gems specified in your `Gemfile` (Jekyll and plugins).

### Step 2: Start the Jekyll Server

Run the following command:

```bash
bundle exec jekyll serve
```

Or the shorter version:

```bash
bundle exec jekyll s
```

### Step 3: View Your Site

Open your browser and navigate to:

```
http://localhost:4000
```

Or if you're using a custom baseurl:

```
http://localhost:4000/CoderFolio
```

## Useful Commands

### Start Server with Live Reload
```bash
bundle exec jekyll serve --livereload
```
This automatically refreshes your browser when you make changes.

### Start Server on Different Port
```bash
bundle exec jekyll serve --port 4001
```

### Build Site Without Server
```bash
bundle exec jekyll build
```
This creates a `_site` folder with the generated static files.

### Watch for Changes (Auto-rebuild)
```bash
bundle exec jekyll serve --watch
```

### Production Build
```bash
JEKYLL_ENV=production bundle exec jekyll build
```

## Troubleshooting

### Port Already in Use
If port 4000 is already in use, use a different port:
```bash
bundle exec jekyll serve --port 4001
```

### Bundle Install Fails
Try updating bundler first:
```bash
gem update bundler
bundle update
```

### Windows-Specific Issues
If you encounter encoding issues on Windows, set:
```bash
chcp 65001
```
Then run Jekyll commands.

### Clear Cache
If you see old content, delete the `_site` folder and restart:
```bash
rm -rf _site
bundle exec jekyll serve
```

## Development Workflow

1. **Make changes** to your files (posts, pages, layouts, etc.)
2. **Save the file**
3. **Jekyll automatically rebuilds** (if using `--watch` or `--livereload`)
4. **Refresh your browser** to see changes

## Testing Blog Posts Locally

1. Create a new post in `_posts/` directory
2. Save the file
3. Jekyll will automatically detect and build it
4. Visit `http://localhost:4000/blog/` to see your new post

## Stop the Server

Press `Ctrl + C` in the terminal to stop the Jekyll server.

---

**Note:** The `_site` folder contains the generated static site. Don't edit files in this folder directly - they will be overwritten when Jekyll rebuilds.

