# Trims & Tones website (Next.js 15, App Router)

## Run
```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL to your real domain
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

## Edit content
All business info, services, deals, membership, reviews and hours live in `data/site.js`.
Items marked DUMMY there (service menu prices, reviews, hours, social links) need real values.

## SEO included
Per-page titles and descriptions, canonical URLs, Open Graph and Twitter cards, LocalBusiness JSON-LD,
`/sitemap.xml`, `/robots.txt`, web manifest, favicon, `lang`, semantic landmarks, skip link.
