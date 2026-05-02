# Caitlin Symonds — Portfolio

Marketing & Design portfolio built with Next.js 14.

## File Structure

```
app/
  layout.tsx          ← Root layout, fonts, metadata
  globals.css         ← Global styles
  page.tsx            ← Home page
  work/
    page.tsx          ← Work / projects showcase
  about/
    page.tsx          ← About, experience, tools
package.json
next.config.js
tsconfig.json
```

## Pages

- **Home** — Hero intro, featured work, capabilities, contact CTA
- **Work** — Full filterable project grid (9 projects)
- **About** — Bio, experience timeline, tools, education

## How to Update Projects

Open `app/work/page.tsx` and edit the `projects` array at the top.

Each project has:
- `title` — project name
- `category` — used for filtering
- `client` — client name shown on card
- `year` — year(s)
- `description` — shown on hover
- `tags` — tool/style tags
- `accent` — card accent colour (`#C9922A` gold or `#2C3E5C` slate)

## Adding Real Images

1. Add image files to `/public/` folder
2. Import Next.js Image component in the work page:
```tsx
import Image from "next/image";
```
3. Replace the `.card-placeholder` div with:
```tsx
<Image src="/your-image.jpg" alt={project.title} fill className="object-cover" />
```

## Deploying

1. Push to GitHub (public repo)
2. Import to Vercel at vercel.com/new
3. Click Deploy — live in ~2 minutes

## Contact Details on Site
- Email: caitlin.a.symonds@gmail.com
- LinkedIn: linkedin.com/in/caitlin-symonds
- Location: Brisbane, QLD
