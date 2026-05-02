# Peter Parker — Portfolio

Spider-Man art and illustration portfolio built with Next.js 14.

## File Structure

```
app/
  layout.tsx        ← Root layout with fonts + metadata
  globals.css       ← Global styles
  page.tsx          ← Home / landing page
  showcase/
    page.tsx        ← Project showcase / gallery page
package.json
next.config.js
tsconfig.json
```

## How to Set Up on GitHub

1. Create a new repo on GitHub called `peter-parker-portfolio`
2. Create each file listed above and paste in the code
3. Commit all files

## How to Deploy on Vercel

1. Go to vercel.com/new
2. Import your GitHub repo
3. Click Deploy — done!

## How to Update Your Projects

Open `app/showcase/page.tsx` and edit the `projects` array at the top of the file.
Each project has:
- `title` — name of the piece
- `category` — type of work
- `year` — when it was made
- `description` — short description shown on hover
- `tags` — array of tag labels
- `color` — accent color for that card

## To Add a Real Image

Replace the card placeholder div with a Next.js Image component:
```tsx
import Image from "next/image";
<Image src="/your-image.jpg" alt={project.title} fill className="object-cover" />
```
Put your images in the `/public` folder.
