# Installation Guide: Paranormal Vault

Follow these steps to set up the Paranormal Vault environment locally or on your server.

## Prerequisites
- Node.js 18.x or higher
- npm or yarn
- A Supabase account
- A Cloudinary account (for media storage)

## 1. Clone the Project
```bash
git clone <your-repo-url>
cd paranormal-vault
```

## 2. Install Dependencies
```bash
npm install
```

## 3. Environment Variables
Copy `.env.example` to `.env.local` and fill in the credentials:
```bash
cp .env.example .env.local
```

### Required Keys:
- `NEXT_PUBLIC_SUPABASE_URL`: Found in Supabase project settings.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Found in Supabase API settings.
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`: Found in Cloudinary dashboard.

## 4. Database Setup
1. Log in to your [Supabase Dashboard](https://app.supabase.com).
2. Create a new project.
3. Go to the **SQL Editor**.
4. Copy the content of `supabase/schema.sql` and run it.
5. This will create the necessary tables (`investigations`, `locations`, `team`, etc.) and enable Row Level Security.

## 5. Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

## 6. Production Build
```bash
npm run build
npm start
```

## 7. Troubleshooting
If you see connection errors, ensure your IP is whitelisted in Supabase and that your `.env.local` variables are correctly prefixed with `NEXT_PUBLIC_`.
