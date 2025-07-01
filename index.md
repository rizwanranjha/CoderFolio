---
layout: home
title: "Welcome to Jekyll Theme Rizwan Ranjha Porfolio"
permalink: /
---

🎨 **jekyll-theme-rrfolio** is a modern, minimalist portfolio + blog + resume theme for [Jekyll](https://jekyllrb.com/), designed to be hosted directly on [GitHub Pages](https://pages.github.com/).

This theme provides a responsive layout, clean typography, built-in blog support, and Bootstrap 5 styling — perfect for developers, designers, and professionals.

Originally created and maintained by [Rizwan Ranjha](https://github.com/rizwanranjha), and used on [rizwanranjha.github.io/rizwan-website](https://github.com/rizwanranjha/rizwan-website) as a live demo.

---

### ⚡ Features

- Blog + Resume + About layout
- Bootstrap 5 styling
- SEO & social meta via `jekyll-seo-tag`
- GitHub Pages–ready (`remote_theme`)
- Modular includes and SCSS

---

### 🔗 Example Pages

- [About]({{ '/about/' | relative_url }})
- [Resume]({{ '/resume/' | relative_url }})
- [Blog]({{ '/blog/' | relative_url }})
- [Contact]({{ '/contact/' | relative_url }})

---

### 📝 Sample Blog Posts

{% for post in site.posts limit:3 %}
- [{{ post.title }}]({{ post.url | relative_url }}) <small>({{ post.date | date: "%b %d, %Y" }})</small>
{% endfor %}
