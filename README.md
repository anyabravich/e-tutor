# E-Tutor

> Modern online education platform landing page

<p align="center">
  <img src="./public/favicon.svg" alt="E-Tutor Logo" width="80" height="80">
</p>

<p align="center">
  <a href="#-about">About</a> •
  <a href="#-demo">Demo</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-features">Features</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-scripts">Scripts</a>
</p>

---

## 📖 About

**E-Tutor** is a beautifully designed landing page for an online education platform. The project showcases modern web development practices with a focus on performance, accessibility, and clean code architecture.

The design features a contemporary aesthetic with gradient accents, floating card animations, and a fully responsive layout that works seamlessly across all devices.

---

## 🌐 Demo

🔗 **Live Demo:** [View Website](#) <!-- Add your deployment URL here -->

### Preview

| Desktop                                          | Mobile                                         |
| ------------------------------------------------ | ---------------------------------------------- |
| ![Desktop Preview](./public/preview-desktop.png) | ![Mobile Preview](./public/preview-mobile.png) |

---

## 🛠 Tech Stack

| Category               | Technologies                        |
| ---------------------- | ----------------------------------- |
| **Framework**          | [Astro](https://astro.build/) v4.16 |
| **Language**           | TypeScript 5.6                      |
| **Styling**            | SCSS with BEM methodology           |
| **Code Quality**       | ESLint, Prettier, Stylelint         |
| **Git Hooks**          | Husky + lint-staged                 |
| **Build Tool**         | Vite (via Astro)                    |
| **Image Optimization** | Sharp                               |

---

## ✨ Features

### 🎨 Design

- Modern gradient-based UI with smooth animations
- Floating card components with parallax effects
- Fully responsive design (mobile-first approach)
- Custom typography and color system

### 🌐 Internationalization (i18n)

- **Multi-language support** — English and Russian out of the box
- **Instant language switching** — no page reload required
- **Persistent selection** — language choice saved in localStorage
- **Easy to extend** — simple JSON-like translation files

### 🏗 Architecture

- Component-based architecture with clear separation
- BEM methodology for predictable CSS
- Type-safe development with TypeScript
- Modular SCSS with mixins and variables

### ⚡ Performance

- Static site generation for lightning-fast loads
- Optimized images (AVIF format)
- Minimal JavaScript footprint
- CSS-only animations where possible

### 🧰 Developer Experience

- Component generator CLI tool
- Pre-configured linting and formatting
- Git hooks for code quality
- Hot module replacement in development

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18.14.1 or higher
- **npm** v9.0.0 or higher

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/e-tutor.git
   cd e-tutor
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:4321
   ```

### Build for Production

```bash
npm run build
npm run preview  # Preview production build
```

---

## 📁 Project Structure

```
e-tutor/
├── public/                 # Static assets (favicons, manifest)
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Container/      # Layout container
│   │   ├── Footer/         # Site footer
│   │   ├── Header/         # Site header with navigation
│   │   └── Nav/            # Navigation component
│   │
│   ├── includes/           # Page sections
│   │   ├── Hero/           # Hero section with CTA
│   │   ├── Features/       # Features grid
│   │   ├── Courses/        # Course cards
│   │   ├── Testimonials/   # User testimonials
│   │   └── CTA/            # Call-to-action section
│   │
│   ├── layouts/            # Page layouts
│   │   ├── Main/           # Main content layout
│   │   └── root/           # Root HTML layout
│   │
│   ├── pages/              # Route pages
│   │   └── index.astro     # Homepage
│   │
│   ├── i18n/               # Internationalization
│   │   ├── translations/   # Language files
│   │   │   ├── en.ts       # English translations
│   │   │   └── ru.ts       # Russian translations
│   │   ├── index.ts        # i18n utilities
│   │   └── types.ts        # TypeScript types
│   │
│   ├── shared/             # Shared resources
│   │   ├── const/          # Constants
│   │   ├── icons/          # SVG icons
│   │   ├── images/         # Image assets
│   │   ├── mocks/          # Mock data
│   │   ├── scripts/        # Utility scripts
│   │   ├── styles/         # Global styles & mixins
│   │   └── types/          # TypeScript types
│   │
│   └── ui/                 # UI kit components
│       ├── Button/         # Button component
│       ├── Icon/           # Icon component
│       ├── LangSelector/   # Language selector
│       ├── Picture/        # Responsive picture
│       ├── Text/           # Text component
│       └── Title/          # Title component
│
├── utils/                  # Build utilities
│   ├── component/          # Component generator
│   ├── create-robots-file.mjs
│   └── images-optimize.mjs
│
├── astro.config.mjs        # Astro configuration
├── eslint.config.js        # ESLint configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

---

## 📜 Scripts

| Command                  | Description                        |
| ------------------------ | ---------------------------------- |
| `npm run dev`            | Start development server           |
| `npm run start`          | Start dev server with host exposed |
| `npm run build`          | Build for production               |
| `npm run preview`        | Preview production build           |
| `npm run check`          | Run Astro type checking            |
| `npm run check:ts`       | Run TypeScript checking            |
| `npm run lint`           | Run all linters                    |
| `npm run lint:prettier`  | Format code with Prettier          |
| `npm run lint:eslint`    | Lint JS/TS with ESLint             |
| `npm run lint:stylelint` | Lint SCSS with Stylelint           |
| `npm run comp`           | Generate new component             |
| `npm run images`         | Optimize images                    |

---

## 🎯 Sections

### Hero

Eye-catching hero section with animated gradient blobs, statistics counter, and floating achievement cards.

### Features

Six-card grid showcasing platform benefits with unique color accents and hover animations.

### Courses

Course catalog display with category tags, ratings, and pricing information.

### Testimonials

User reviews carousel with profile photos and star ratings.

### CTA

Final call-to-action section encouraging user sign-up.

---

## 🌐 Internationalization (i18n)

The project includes a custom client-side i18n system for multi-language support.

### How It Works

1. **Translation files** are located in `src/i18n/translations/`
2. **Language selector** in the header triggers instant translation
3. **Selected language** is saved to localStorage and persists across sessions

### Adding Translations

1. Add your text keys to both `en.ts` and `ru.ts`:

```typescript
// src/i18n/translations/en.ts
export const en = {
  mySection: {
    title: 'Hello World',
    description: 'Welcome to our platform'
  }
}
```

```typescript
// src/i18n/translations/ru.ts
export const ru = {
  mySection: {
    title: 'Привет мир',
    description: 'Добро пожаловать на нашу платформу'
  }
}
```

2. Use `data-i18n` attribute in your HTML:

```html
<h1 data-i18n="mySection.title">Hello World</h1>
<p data-i18n="mySection.description">Welcome to our platform</p>
```

### Available Attributes

| Attribute              | Usage                    |
| ---------------------- | ------------------------ |
| `data-i18n`            | Text content translation |
| `data-i18n-alt`        | Image alt text           |
| `data-i18n-placeholder`| Input placeholders       |

### Adding New Languages

1. Create a new file in `src/i18n/translations/` (e.g., `de.ts`)
2. Add the locale to `src/i18n/index.ts` and `types.ts`
3. Update `LangSelector.astro` with the new language option

---

## 🎨 Design System

### Colors

| Variable             | Usage               |
| -------------------- | ------------------- |
| `--color-primary`    | Primary brand color |
| `--color-secondary`  | Secondary actions   |
| `--color-accent`     | Accent highlights   |
| `--color-text`       | Body text           |
| `--color-text-muted` | Secondary text      |
| `--color-bg`         | Background          |

### Typography

- **Font Family:** Inter (system fallback stack)
- **Scale:** Based on modular scale for consistency

### Breakpoints

| Name    | Width          |
| ------- | -------------- |
| Mobile  | < 768px        |
| Tablet  | 768px - 1024px |
| Desktop | > 1024px       |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ and ☕
</p>
