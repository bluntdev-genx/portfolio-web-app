# Portfolio Web App

Portfolio showcase for Ashutosh Patel, built as a static Vite app and deployed to GitHub Pages from GitHub Actions.

## Local Commands

```bash
npm install
npm run dev
npm run verify
```

## Deployment

GitHub Pages is configured in workflow mode. Pushes to `main` run `.github/workflows/deploy.yml`, generate the resume PDFs, build the app for the custom-domain root, and publish `dist/` to:

```text
https://hey-raymond.genxlabs.tech/
```
