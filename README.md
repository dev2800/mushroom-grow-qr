# Mushroom Grow Bag QR System

## Concept
Customer purchases a mushroom grow bag, scans a QR code on the packaging, and is instantly taken to a branded instructional video showing exactly how to grow mushrooms with that specific product.

## Tech Stack
- **Next.js 14** — Landing page + video hosting
- **Supabase** — Analytics, product database, scan tracking
- **Vercel** — Deployment + edge functions
- **QR Code API** — Dynamic QR generation per product SKU

## Features
- 🎥 Product-specific video instructions
- 📊 Scan analytics (location, time, device)
- 🔗 Unique QR per product SKU
- 📱 Mobile-optimized video player
- 🌙 Dark mode for grow room visibility
- 📈 Dashboard for brand analytics

## Project Structure
```
mushroom-grow-qr/
├── app/
│   ├── page.tsx              # Landing page
│   ├── [sku]/page.tsx        # Product-specific video page
│   ├── api/
│   │   ├── scan/route.ts     # Track QR scans
│   │   └── products/route.ts # Product CRUD
│   └── layout.tsx
├── components/
│   ├── VideoPlayer.tsx
│   ├── QRGenerator.tsx
│   └── Analytics.tsx
├── lib/
│   └── supabase.ts
└── package.json
```

## Database Schema (Supabase)
```sql
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sku TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  video_url TEXT NOT NULL,
  thumbnail_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE scans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES products(id),
  scanned_at TIMESTAMPTZ DEFAULT NOW(),
  location TEXT,
  device_type TEXT,
  referrer TEXT
);
```

## Deployment
- GitHub: Private repo (transfer to client)
- Vercel: Auto-deploy from main branch
- Supabase: Hosted database + auth
