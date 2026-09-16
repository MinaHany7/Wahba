# Mina Hany Wahba — Data Analyst Portfolio

A cinematic, single-page portfolio built with **plain HTML, CSS, and JavaScript**
— no framework, no build step, no npm install required. It opens and works
the moment you double-click `index.html`, and deploys as-is to any static host.

> **Why plain HTML/CSS/JS instead of React + Vite + Tailwind + Framer Motion?**
> The build environment used to generate this project has no internet access,
> so npm packages could not be installed or fetched. Everything in this repo
> is hand-written vanilla code that reproduces the same effects (glassmorphism,
> scroll reveals, count-up stats, kinetic type, a cinematic loader) without any
> dependency — which also means it is lighter, has zero build step, and will
> never break from a dependency going out of date. If you later want to port
> it into React, every section in `index.html` maps 1:1 to the component list
> in the original spec (`Hero.jsx`, `Projects.jsx`, etc.).

The current version intentionally uses native browser scrolling and lightweight
CSS/IntersectionObserver reveals. Heavy smooth-scroll and external animation
libraries were removed to keep scrolling immediate and reliable on GitHub Pages.

---

## 1. Project overview

15 sections, in order: loading screen, sticky nav, hero, scroll-to-play kinetic
type, about, analytics showcase, stats, capabilities (bento grid), skills,
experience, projects (with embedded videos), certifications, languages,
contact, footer.

## 2. File structure

```
portfolio/
├── index.html               ← interactive version with theme switcher
├── index-dark.html          ← standalone dark version
├── index-light.html         ← standalone light version
├── README.md
├── validate-videos.js       ← run with: node validate-videos.js
├── Mina-Hany-Wahba-CV.pdf
├── css/
│   └── style.css
├── js/
│   ├── projects.js          ← all project content + video paths
│   ├── skills.js            ← skills, certifications, languages
│   └── main.js              ← loading screen, animations, rendering
├── images/
│   └── (posters, dashboard screenshots, profile photo)
└── videos/
    └── (project .mp4 files, each under 24 MB)
```

## 3. How to run locally

No install needed. Either:

- Double-click `index.html`, **or**
- Serve it locally (recommended, avoids browser video/CORS quirks):
  ```bash
  npx serve .
  # or
  python3 -m http.server 8080
  ```
then open `http://localhost:8080`.

### Choosing a color version

- Open `index.html` for the interactive version. It starts dark and includes a
  Light/Dark switcher; the choice is remembered in the browser.
- Open `index-dark.html` for a permanently dark standalone version.
- Open `index-light.html` for a permanently light standalone version.
- All three versions use the same project data, images, videos, animations,
  and interactions.

## 4. Editing content

| What to change              | Where                        |
|------------------------------|-------------------------------|
| Project text, tools, metrics | `js/projects.js`              |
| Skills / certifications / languages | `js/skills.js`          |
| Hero text, About text, Contact info | `index.html` directly  |
| Colors / spacing / fonts     | `css/style.css` (`:root` at the top) |

## 5. Adding a project video

1. Export your video as MP4 (see compression notes below).
2. Drop it in `videos/`, e.g. `videos/09-new-project.mp4`.
3. Drop a poster frame (a JPG screenshot of the dashboard) in `images/`.
4. In `js/projects.js`, set:
   ```js
   videoType: "mp4",
   videoUrl: "videos/09-new-project.mp4",
   videoPoster: "images/09-new-project-poster.jpg",
   ```
5. Run `node validate-videos.js` to confirm it passes size/path checks.

**No video yet?** Leave `videoType: "none"` and `videoUrl: ""` — the site
automatically shows the dashboard image with a "Project video coming soon"
label. It never shows a broken or empty video box.

### Using YouTube or Vimeo instead of a local file

```js
// YouTube
videoType: "youtube",
videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",

// Vimeo
videoType: "vimeo",
videoUrl: "https://player.vimeo.com/video/YOUR_VIDEO_ID",
```

## 6. Video size rules

- **Maximum size per video: 24 MB** (all six included videos are already
  compressed to 4–9 MB).
- Format: MP4, H.264 video, AAC audio, yuv420p, faststart enabled.
- Prefer reducing bitrate before reducing resolution.

Recommended compression command:

```bash
ffmpeg -i input.mp4 \
  -c:v libx264 -preset medium -crf 24 \
  -vf "scale=1280:-2" \
  -c:a aac -b:a 96k \
  -pix_fmt yuv420p \
  -movflags +faststart \
  output.mp4
```

Raise `-crf` (e.g. to 27–28) or lower the scale further if it's still over 24 MB.

## 7. Validating videos

```bash
node validate-videos.js
```

This checks every project for: video exists, is `.mp4`, is ≤ 24 MB, has a
poster image, has a dashboard image, and uses no local computer paths or
Base64 media. It prints a clear pass/fail line per file and exits with a
non-zero code if anything fails, so you can wire it into a CI step later.

## 8. CV, LinkedIn and Drive

- **CV**: replace `Mina-Hany-Wahba-CV.pdf` with your updated file (keep the
  same filename, or update the two `href="Mina-Hany-Wahba-CV.pdf"` links in
  `index.html`).
- **LinkedIn** is already connected in the Contact section and footer:
  `https://www.linkedin.com/in/mina-hany-mahrous`
- **Drive Folder** is already connected for shared portfolio files:
  `https://drive.google.com/drive/folders/1dBVi9weIvx-kTiANj7zGwg05aK8CXbiH`
- **GitHub** is intentionally not displayed yet. Add it later only when a real
  repository URL is available.

## 9. Deployment

The site is 100% static — no build step. Any of these work:

### GitHub Pages
1. Push this folder to a GitHub repository.
2. Repo Settings → Pages → Source: `main` branch, `/ (root)`.
3. Your site will be live at `https://<username>.github.io/<repo>/`.

### Vercel
1. `npm i -g vercel` (one-time), then run `vercel` inside this folder.
2. Choose "Other" as the framework (no build command needed).
3. Vercel gives you a live URL immediately.

### Netlify
1. Drag-and-drop this whole folder onto [app.netlify.com/drop](https://app.netlify.com/drop).
2. Netlify gives you a live URL immediately — no build settings needed.

After deploying, add the live URL to your CV and LinkedIn.

## 10. Final checklist

- [x] All 9 current project entries displayed, with available videos embedded and remaining entries showing a clear "coming soon" state
- [x] Every video ≤ 24 MB, MP4/H.264, has a poster image
- [x] No Base64 media, no local computer paths
- [x] Video summary, business question, key insight, tools, and metrics shown under every project
- [x] CV downloadable from Hero and Contact sections
- [x] LinkedIn and Drive links are active; GitHub is intentionally omitted until a real URL exists
- [x] Responsive: no horizontal overflow on mobile, videos scale to full width
- [x] `prefers-reduced-motion` respected — animations disable gracefully
- [x] Works with zero build step on GitHub Pages, Vercel, Netlify, or any static host
