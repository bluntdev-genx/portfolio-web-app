# Portfolio Web App

Portfolio showcase for Ashutosh Patel, built as a static Vite app and deployed to GitHub Pages from GitHub Actions.

## Local Commands

```bash
npm install
npm run dev
npm run verify
```

## Deployment

GitHub Pages is configured in workflow mode. Pushes to `main` run `.github/workflows/deploy.yml`, build the app with `base: "/portfolio-web-app/"`, generate the resume PDFs, and publish `dist/` to:

```text
https://bluntdev-genx.github.io/portfolio-web-app/
```
