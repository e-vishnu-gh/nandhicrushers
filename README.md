# Nandhi Crushers

A static, mobile-first public website for Nandhi Engineering, Coimbatore.

## Build locally

Requires Node.js 22 or later. The site generator uses only Node's standard library.

```sh
npm run build
```

The generated site is written to `dist/`. Set `SITE_URL` when building for a specific Pages URL so canonical links, `sitemap.xml`, and `robots.txt` use that address:

```sh
SITE_URL=https://<github-account>.github.io/nandhicrushers/ npm run build
```

## Deploy with GitHub Pages

Push this repository to GitHub with the default branch named `main`. In repository **Settings → Pages**, select **GitHub Actions** as the build and deployment source. The workflow builds the site with the repository owner's Pages URL and deploys `dist/` after pushes to `main` or a manual workflow run.

## Content notes

Product categories and named models are taken from Nandhi Engineering's public English-language site. The source does not publish detailed technical specifications, so product pages invite buyers to discuss their application with the company instead of making unsupported performance or availability claims. The customer review section is omitted because no verified, permission-cleared stories were supplied.

The VSI 200 page uses the two factory photographs supplied in the project Downloads folder, need to add others as well.

Business contact details and hours are presented as published: Monday–Saturday, 9:00 am–6:00 pm. Factory visits are by appointment.
