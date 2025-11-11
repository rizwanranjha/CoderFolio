# CoderFolio
A Modern Jekyll Portfolio & Blog Theme

## Features

- 💼 Clean portfolio layout
- 📝 SEO-friendly blog posts with Markdown support
- 🧩 Custom pages with `_pages/`
- 🌐 Ready for GitHub Pages
- 🔧 Easily customizable with SCSS and includes
- 📱 Responsive design

## Quick Start

### For GitHub Pages

1. Fork or clone this repository
2. Update `_config.yml` with your information
3. Set your repository name in GitHub Settings → Pages
4. Push to GitHub and your site will be live!

### Local Development

**First time setup:**
1. Install Ruby (see [LOCAL_SETUP.md](LOCAL_SETUP.md) for detailed instructions)
2. Install Bundler: `gem install bundler`
3. Install dependencies: `bundle install`

**Start the server:**
```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000` (or `http://localhost:4000/CoderFolio` if using baseurl) to preview your site.

**For detailed local setup instructions, see [LOCAL_SETUP.md](LOCAL_SETUP.md)**

## Creating Blog Posts

### Step 1: Create a New Post File

Create a new file in the `_posts/` directory with the following naming convention:
```
YYYY-MM-DD-title-of-your-post.md
```

Example: `2025-01-15-my-first-blog-post.md`

### Step 2: Add Front Matter

Every post needs front matter at the top of the file:

```markdown
---
layout: post
title: "Your Post Title Here"
date: 2025-01-15  # Format: YYYY-MM-DD
description: "A brief description of your post for SEO and previews"
tags: [tag1, tag2, tag3]
categories: [category1, category2]
author: "Your Name"  # Optional, will use default from config
---
```

### Step 3: Write Your Content

Write your blog post content in Markdown below the front matter:

```markdown
Your blog post content goes here. You can use:

- **Markdown** formatting
- Code blocks
- Images
- Lists
- And more!

## Section Heading

More content...
```

### Complete Example

```markdown
---
layout: post
title: "Getting Started with Jekyll"
date: 2025-01-15
description: "Learn how to create your first Jekyll blog post"
tags: [jekyll, tutorial, web-development]
categories: [tutorials]
---

This is my first blog post using CoderFolio!

## Introduction

Jekyll is a powerful static site generator...

## Conclusion

Thanks for reading!
```

## File Structure

```
CoderFolio/
├── _config.yml              # Site configuration
├── _layouts/
│   ├── default.html         # Base layout
│   └── post.html            # Blog post layout
├── _includes/
│   ├── header.html          # Navigation
│   ├── footer.html          # Footer
│   └── head.html            # Head section
├── _pages/
│   ├── blog.html            # Blog listing page
│   ├── profile.html         # Profile page
│   └── ...                  # Other pages
├── _posts/
│   └── YYYY-MM-DD-title.md  # Blog posts (Markdown format)
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── index.html               # Homepage
└── Gemfile                  # Dependencies
```

## Configuration

Edit `_config.yml` to customize:

- Site title and description
- Author information
- Social media links
- GitHub Pages URL and baseurl
- Permalink structure

### Important: Baseurl Configuration

- If using `username.github.io` repository: set `baseurl: ""`
- If using `username.github.io/repo-name`: set `baseurl: "/repo-name"`

## Blog Post Permalinks

Posts are automatically available at:
```
/blog/YYYY/MM/DD/title/
```

Example: `/blog/2025/01/15/getting-started-with-jekyll/`

## Pages

Custom pages are stored in `_pages/` and automatically available at `/:name/`

Examples:
- `_pages/about.html` → `/about/`
- `_pages/profile.html` → `/profile/`
- `_pages/blog.html` → `/blog/`

## License

See [LICENSE](LICENSE) file for details.

## Support

For issues and questions, please open an issue on GitHub.

---

**Happy Blogging! 🚀**
