# Senior Frontend Developer Portfolio

A high-performance, minimalist portfolio website designed to showcase frontend engineering expertise. Built exclusively with **Vanilla HTML, CSS, and JavaScript**, this project demonstrates a mastery of web fundamentals without reliance on external frameworks or libraries.

![Portfolio Preview](assets/images/profile6.jpeg)

## 🚀 Project Philosophy

In an era of heavy frameworks, this portfolio stands as a testament to the power of the native web platform. The goal was to achieve a **perfect Lighthouse score**, **zero layout shift**, and **instant load times** while maintaining a premium, editorial aesthetic.

### Key Highlights
-   **Zero Dependencies**: No React, No Tailwind, No Bootstrap. Just pure, semantic code.
-   **Performance First**: Optimized assets and critical CSS for lightning-fast rendering.
-   **Custom Design System**: Implemented a scalable CSS variable architecture for theming (Dark/Light mode).
-   **Interactive & Accessible**: Smooth scroll behaviors, intersection observer animations, and semantic markup for screen readers.

## 🛠️ Tech Stack

*   **HTML5**: Semantic structure, accessibility (ARIA), and SEO optimization.
*   **CSS3**:
    *   **Layout**: Advanced usage of CSS Grid and Flexbox.
    *   **Architecture**: CSS Custom Properties (Variables) for dynamic theming.
    *   **Animation**: Keyframe animations and transitions.
*   **JavaScript (ES6+)**:
    *   `IntersectionObserver` API for scroll-triggered animations.
    *   `localStorage` for persisting user theme preferences.
    *   DOM manipulation for custom cursor and navigation logic.

## 📂 Project Structure

```bash
.
├── index.html          # Semantic markup and content
├── style.css           # Global styles, variables, and responsive utilities
├── script.js           # Logic for theme toggle, animations, and cursor
└── assets/
    ├── images/         # Profile and editorial imagery
    └── projects/       # Optimized project screenshots
```

## ✨ Features

### 1. Dynamic Theming
A robust dark/light mode toggle that respects system preferences (`prefers-color-scheme`) and persists state via `localStorage`.

### 2. Scroll Animations
Elements gracefully fade in using the `IntersectionObserver` API, ensuring animations only trigger when content enters the viewport, keeping the main thread free.

### 3. Editorial Layouts
Complex grid layouts (Hero, About, Contact) that adapt fluidly from desktop to mobile, utilizing `minmax()` and `clamp()` for responsive typography and spacing.

## 🚀 Getting Started

Since this project relies on standard web technologies, no build step is required.

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Yboumlik/portfolio.git
    ```

2.  **Run locally**
    You can open `index.html` directly in your browser, or use a simple static server for the best experience:
    ```bash
    # Using Python
    python3 -m http.server

    # Using VS Code Live Server
    # Click "Go Live" in the bottom right corner
    ```

## 📬 Contact

**Younes Boumlik**
*   **Email**: [younes.q.boumlik@gmail.com](mailto:younes.q.boumlik@gmail.com)
*   **LinkedIn**: [linkedin.com/in/younes-boumlik](https://www.linkedin.com/in/younes-boumlik-771843302/)
*   **GitHub**: [github.com/Yboumlik](https://github.com/Yboumlik)

## 📄 License & Copyright

### The Code (MIT)
The source code of this portfolio (HTML, CSS, JavaScript architecture) is licensed under the **MIT License**. You are free to use the code structure for your own projects, provided you include the original copyright notice.

### The Content (Copyright)
**© 2024 Younes Boumlik. All Rights Reserved.**
The content of this website, including but not limited to text, images, case studies, design assets, and personal branding, is the intellectual property of Younes Boumlik. These assets may not be copied, reproduced, or used without explicit written permission.
