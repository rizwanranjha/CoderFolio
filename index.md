---
layout: home
title: "Welcome to My Portfolio"
permalink: /
---

👋 Hi, I'm **Rizwan Ranjha** – a DevOps Administrator and Python FastAPI Developer.

This site is my personal portfolio + blog + resume hosted using **GitHub Pages** and powered by **Jekyll**.

### 🔗 Quick Links

- [About Me]({{ '/about/' | relative_url }})
- [Resume]({{ '/resume/' | relative_url }})
- [Blog]({{ '/blog/' | relative_url }})
- [Contact]({{ '/contact/' | relative_url }})

### 📝 Latest Blog Posts

{% for post in site.posts limit:3 %}
- [{{ post.title }}]({{ post.url | relative_url }}) <small>({{ post.date | date: "%b %d, %Y" }})</small>
{% endfor %}