# Quick Start Guide - After Ruby Installation

## Step 1: Open a New Terminal

**Important:** After installing Ruby, you MUST:
- Close your current PowerShell/Command Prompt
- Open a **NEW** PowerShell or Command Prompt window
- Navigate to your project: `cd D:\RizwanRanjhaWorkspace\CoderFolio`

## Step 2: Verify Ruby Installation

```bash
ruby --version
```

You should see something like: `ruby 3.4.7 (2025-xx-xx) [x64-mingw-ucrt]`

```bash
gem --version
```

You should see a version number like: `3.5.x`

## Step 3: Install Bundler

```bash
gem install bundler
```

This may take a minute. Wait for it to complete.

## Step 4: Install Jekyll and Dependencies

```bash
bundle install
```

This will install all the gems from your `Gemfile` (Jekyll, plugins, etc.)
This may take several minutes the first time.

## Step 5: Start Jekyll Server

```bash
bundle exec jekyll serve
```

You should see output like:
```
Configuration file: D:/RizwanRanjhaWorkspace/CoderFolio/_config.yml
            Source: D:/RizwanRanjhaWorkspace/CoderFolio
       Destination: D:/RizwanRanjhaWorkspace/CoderFolio/_site
...
Server address: http://127.0.0.1:4000/CoderFolio/
```

## Step 6: View Your Site

Open your browser and go to:
- **http://localhost:4000/CoderFolio** (if baseurl is "/CoderFolio")
- **http://localhost:4000** (if baseurl is "")

## Troubleshooting

### If `ruby` command is not found:
1. Make sure you restarted your terminal after installing Ruby
2. Check if Ruby was added to PATH:
   - Open System Properties → Environment Variables
   - Check if Ruby's `bin` folder is in PATH
3. Try using "Start Command Prompt with Ruby" from Start menu

### If you get SSL errors:
```bash
gem sources --add http://rubygems.org/ --remove https://rubygems.org/
```

### If bundle install fails:
Try updating bundler first:
```bash
gem update bundler
bundle update
```

### If port 4000 is in use:
```bash
bundle exec jekyll serve --port 4001
```

## Stop the Server

Press `Ctrl + C` in the terminal to stop Jekyll.

---

**Next Steps:**
- Create blog posts in `_posts/` directory
- Edit pages in `_pages/` directory
- Customize `_config.yml` for your site

