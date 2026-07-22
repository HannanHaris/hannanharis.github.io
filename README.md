# Muhammad Hannan Haris - Portfolio

A React and Vite portfolio site. Dark theme, animated node background, scroll reveals, filterable projects and count-up metrics. No CSS framework, no UI library, so nothing to keep patched.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Edit the content

Everything you will want to change lives in one file:

```
src/data/content.js
```

Name, role, intro, metrics, jobs, projects, skills, certifications and contact details are all there. Change the text and the whole site updates. You do not need to touch any component.

Two files to drop into `public/`:

- `Hannan_Haris_Resume.pdf` so the Download CV button works
- `avatar.png` if you want to add a photo or a cartoon avatar later

## Change the look

Colours and fonts are CSS variables at the top of `src/index.css`:

```css
--cyan:   #4FD1E0;   /* primary accent */
--indigo: #8B7BF7;   /* secondary accent */
--bg:     #060911;   /* page background */
```

Change those three and the entire site shifts palette.

## Deploy

### Vercel, easiest

1. Push this folder to a new GitHub repository.
2. Go to vercel.com, sign in with GitHub, click Add New Project and pick the repo.
3. Vercel detects Vite on its own. Framework preset Vite, build command `npm run build`, output directory `dist`.
4. Deploy. You get a live URL in about a minute, and every push after that redeploys automatically.

### Cloudflare Pages

Same flow. Build command `npm run build`, output directory `dist`.

### AWS S3 and CloudFront

Worth doing if you want the site itself to be a talking point in interviews.

```bash
npm run build
aws s3 sync dist/ s3://your-bucket-name --delete
aws cloudfront create-invalidation --distribution-id XXXX --paths "/*"
```

Bucket set to static website hosting, CloudFront in front of it, ACM certificate for HTTPS and Route 53 for the domain.

## Custom domain

A `.dev` or `.com` costs roughly 10 to 15 USD a year. Add it in the Vercel or Cloudflare dashboard under Domains, then point the DNS records they give you. `hannanharis.dev` on a CV reads better than a project subdomain.

## Structure

```
index.html              page shell and SEO tags
src/main.jsx            React entry
src/App.jsx             section order
src/index.css           all styling and design tokens
src/data/content.js     all text content
src/components/
  Motion.jsx            scroll reveal, count-up, canvas background
  Top.jsx               nav, hero, metrics
  Sections.jsx          experience, projects, stack, credentials, contact
```
