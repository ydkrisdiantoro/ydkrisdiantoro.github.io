
# Yayandeka Astro Blog

This is a personal blog project built with [Astro](https://astro.build/). It features a clean design, SEO best practices, and support for Markdown/MDX content.

## � Project Structure

```
├── astro.config.mjs         # Astro configuration
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── public/                  # Static assets (images, icons, fonts, manifest)
│   ├── fonts/               # Custom web fonts
│   └── images/              # Blog and site images
├── src/
│   ├── assets/              # Local images for posts and pages
│   ├── components/          # Astro UI components (Header, Footer, Sidebar, etc.)
│   ├── content/             # Blog content (Markdown/MDX)
│   │   └── blog/            # Blog posts
│   ├── layouts/             # Page and post layouts
│   ├── pages/               # Site pages and routes
│   │   ├── blog/            # Blog listing, categories, and post routes
│   │   └── ...              # About, projects, legal, etc.
│   ├── styles/              # Global CSS
│   └── utils/               # Utility scripts (e.g., categories)
└── README.md                # Project documentation
```

## 🚀 Features

- Minimal, accessible styling
- 100/100 Lighthouse performance
- SEO-friendly (OpenGraph, canonical URLs)
- Sitemap and RSS feed
- Markdown & MDX support
- Category-based blog navigation
- Responsive design

## 🧑‍💻 Usage

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## ✍️ Content Authoring

- Add new blog posts in `src/content/blog/` as `.md` or `.mdx` files.
- Static assets (images, icons, fonts) go in `public/`.
- Customize layouts and components in `src/layouts/` and `src/components/`.

## � Resources

- [Astro Documentation](https://docs.astro.build/)
- [Content Collections Guide](https://docs.astro.build/en/guides/content-collections/)

---

Inspired by [Bear Blog](https://github.com/HermanMartinus/bearblog/).
