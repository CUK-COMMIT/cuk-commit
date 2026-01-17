# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Deploy to Vercel

This project is a Vite + React app. Vercel can deploy it easily. The repo includes a minimal `vercel.json` that tells Vercel to run the build and serve the `dist` folder.

Two common ways to deploy:

- Web UI (recommended):
	1. Go to https://vercel.com and sign in with GitHub/GitLab/Bitbucket.
	2. Click "New Project" → Import your repository.
	3. Vercel usually detects Vite. If asked, set the Build Command to `npm run build` and the Output Directory to `dist`.
	4. Deploy. Subsequent pushes to the selected branch will trigger automatic deployments.

- CLI (quick test / preview):
	1. Install the Vercel CLI globally (requires Node/npm):

```powershell
npm install -g vercel
```

	2. Login and deploy from your project folder:

```powershell
cd 'd:\1.Projects\Web\CUK_COMMIT'
vercel login
vercel --prod
```

The CLI will detect `package.json` scripts and use `npm run build` by default. If you prefer, you can also run `npm run build` locally and then `vercel --confirm --prod` to deploy the built `dist` folder.

Notes:

- No special environment variables are required by default. If your app needs secrets (APIs, keys), add them in the Vercel dashboard under Project Settings → Environment Variables.
- The included `vercel.json` is minimal and safe for most static Vite apps. If you need rewrites or custom routes, add them to this file.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
