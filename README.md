# Torgas Blue Energy

Cinematic, Apple-inspired website for Torgas Blue Energy.

## Quick Start (Local)

```bash
npm install
npm start
# Open http://localhost:3000
```

## Deploy to Render / Railway

1. Push this entire folder to GitHub
2. Connect repo to Render or Railway
3. Build command: `npm install`
4. Start command: `npm start`
5. Done!

## Deploy to Vercel (Static)

1. Push to GitHub
2. Connect to Vercel
3. Framework: Other
4. Output directory: `.` (root)
5. No build command needed
6. Done!

## Deploy to GitHub Pages

1. Push to GitHub
2. Settings > Pages > Source: main branch, root `/`
3. Done! (works without server.js as pure static HTML)

## Folder Structure

```
torgas-blue-energy/
├── index.html          # Complete React app (single file)
├── server.js           # Express server (optional, for Render/Railway)
├── package.json
├── images/
│   ├── logo/           # Company logo
│   ├── people/         # Team portraits (optimized)
│   ├── projects/       # Project documentation photos
│   └── activities/     # Field work & event photos
└── README.md
```

## Update Content

All data is embedded in `index.html`:
- Search for `PROJECTS` array to edit projects
- Search for `PEOPLE` array to edit team members
- Search for `ACTIVITIES` array to edit gallery
- Search for `LEGAL_DOCS` array to edit legal section

## Tech Stack

- React 18 (CDN)
- Tailwind CSS (CDN)
- Framer Motion (CDN)
- Zero build step required
