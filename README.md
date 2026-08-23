# Portfolio — React Conversion

Your original static HTML/CSS/JS site rebuilt as a responsive React (Vite) app,
keeping the same dark/red aesthetic.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To ship a production build:

```bash
npm run build
```

## What changed, and why

**1. Structure → components**
Each `<section>` from `index.html` became its own component under
`src/components/`: `Header`, `Home`, `About`, `Services`, `Skills`,
`Portfolio`, `Contact`, `Footer`. `App.jsx` just assembles them in order.

**2. Your two images are wired in**
The two photos you sent are in `src/assets/`:
- `hero-bg.png` (circle on the right) → used as the `Home` hero background,
  same as your original `.home { background: url(./img/hero-bg.png) }`.
- `hero-bg2.png` (circle on the left) → used as the `About` section image,
  same slot as your original `about-img img`.

To swap in different or additional images later, drop the file into
`src/assets/` and `import` it at the top of the component, then use it as
the `src` (or inline `style={{ backgroundImage: ... }}` for backgrounds).
Vite handles the bundling — no manual path wrangling needed like in plain
HTML.

**3. `typed.js` → the `typed.js` npm package**
Your `<script src="typed.js@2.0.15">` + manual `new Typed(...)` call is now
a `useEffect` in `Home.jsx` using the `typed.js` package (installed via
`npm install`), with `typed.destroy()` on unmount so it doesn't leak when
React re-renders.

**4. Boxicons**
Kept as the CDN `<link>` in `index.html` (simplest option) — every
`<i className="bx bx-...">` icon still works exactly like before.

**5. Bugs fixed from the original files**
- Broken nesting in the hero section (extra unmatched `</div>` tags) and in
  the portfolio section (`id="portfolio" id="project"`, `class=""main-text"`
  with stray quotes) — all cleaned up as JSX now enforces valid structure.
- `<img srg="...">` typo → real image imports.
- Mismatched class names (`.radial-bar` vs `.radial-bars`, `.progress-line.python`
  vs `.progress-line.Python`) that silently broke your animations — reconciled
  so every skill bar and radial bar actually animates.
- Contact `<li>` items wrapped in an actual `<ul>` (`contact-list`), fixing
  invalid list markup.
- `<input type="sumbit">` → a proper `<button type="submit">`.

**6. Responsiveness (new)**
The original CSS had no media queries, so on mobile the nav overlapped
content and the two-column About/Contact grids never collapsed. Added:
- A slide-in mobile nav with a hamburger toggle (`Header.jsx` + `.menu-icon`
  / `.navbar.active` styles) below 991px.
- `.about` and `.contact` grids collapse to a single column below 991px.
- Font sizes and radial bar sizing step down below 600px.

**7. Contact form**
Now a controlled React form (`useState`) that logs the submission and shows
a "Message sent" confirmation. It doesn't send anywhere yet — wire the
`handleSubmit` function in `Contact.jsx` to a real endpoint, or a service
like [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/),
when you're ready.

**8. Portfolio section**
Your original had 3 identical placeholder project cards (`5757453.jpg` /
`676748.jpg`, no real screenshots). I swapped these for icon-based cards
describing your actual projects (Job Auto Pilot, the AI Portfolio Platform,
this rebuild) so the section isn't just Lorem ipsum — edit `PROJECTS` in
`Portfolio.jsx` and drop in real screenshots (same `src/assets/` + `import`
pattern) whenever you have them.

## File map

```
portfolio-react/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── assets/
    │   ├── hero-bg.png
    │   └── hero-bg2.png
    └── components/
        ├── Header.jsx
        ├── Home.jsx
        ├── About.jsx
        ├── Services.jsx
        ├── Skills.jsx
        ├── Portfolio.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Next steps to consider

- Replace placeholder text (About blurb, service descriptions, social links)
  with your real copy and profile URLs.
- Add real project screenshots once you have them.
- Deploy on Vercel or Netlify — both auto-detect Vite and need zero config.
