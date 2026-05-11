# Deployment Guide: Paranormal Vault

This project is optimized for modern cloud hosting. Choose your preferred platform below.

## Option 1: Vercel (Recommended)
The fastest way to deploy your Next.js application.
1. Push your code to a GitHub repository.
2. Connect the repository to [Vercel](https://vercel.com).
3. Add your environment variables (from `.env.local`) in the Vercel dashboard.
4. Vercel will automatically build and deploy every time you push to the `main` branch.

## Option 2: Replit Deployments
1. Import your repository to Replit.
2. Go to the **Deployments** tab.
3. Select **Autoscale** or **Static Hosting** (Note: Autoscale is required for the Admin Dashboard/Supabase integration).
4. Add your secrets in the Replit "Secrets" tool.
5. Click **Deploy**.

## Option 3: GitHub Pages (Static Export)
*Note: This will disable the Admin Dashboard and dynamic features unless you connect them to a separate backend.*
1. Update `next.config.ts` to include `output: 'export'`.
2. Run `npm run build`.
3. The `out` folder will contain your static site.
4. Use the provided GitHub Action in `.github/workflows/deploy.yml` for automatic deployment.

## CI/CD Pipeline
The project includes a GitHub Action that:
- Runs Linting.
- Runs Tests.
- Builds the project.
- Deploys to Vercel/GitHub Pages on successful build.

## Custom Domain Setup
1. Point your domain A/CNAME records to your host (Vercel/Replit).
2. The site is pre-configured for SSL.
3. Update `SITE_URL` in your Supabase Auth settings to match your custom domain.
