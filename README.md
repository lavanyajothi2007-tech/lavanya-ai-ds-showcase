# Lavanya B | AI & Data Science Portfolio

React + Vite + Tailwind CSS portfolio.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/
npm run preview
```

## Update content
All text lives in `src/data.js` (profile, skills, projects, experience, certifications, education).
- **Photo:** replace `public/images/lavanya-profile.png`
- **Resume:** replace `public/Lavanya_B_Resume.pdf` (keep the same filename)
- **Certificates:** add `{ title, issuer, date, category, url }` objects to `certifications` (verified ones only)
- **Project repo links:** fill the empty `repo: ''` fields

## Deploy on Vercel
Import the GitHub repo at vercel.com/new. Vercel detects Vite automatically (build: `npm run build`, output: `dist`).
