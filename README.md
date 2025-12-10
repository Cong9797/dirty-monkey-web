# dirty-monkey-web (Docker + Next.js)

This is a minimal Next.js 15.3.6 (TypeScript, App Router, Tailwind CSS) starter
configured to run entirely inside Docker. You do **not** need to install
Node.js or Next.js on your Windows system.

## Prerequisites

- Docker Desktop installed and running on Windows

## First-time setup & development

From PowerShell in this folder:

```powershell
# Start the dev container (builds image on first run)
docker-compose up --build
```

Then open your browser at:

- http://localhost:3000

Any changes you make to the source files on Windows will be reflected
inside the container thanks to the bind-mounted volume.

To stop the dev container:

```powershell
docker-compose down
```

## Production build in Docker

To build and run a production image:

```powershell
# Build production image
docker build -t dirty-monkey-web:prod -f Dockerfile .

# Run production container
docker run --rm -p 3000:3000 dirty-monkey-web:prod
```

Then open http://localhost:3000 again.

## Scripts

These are executed **inside** a Node.js environment (e.g. in the dev
container):

- `npm run dev` – start Next.js dev server
- `npm run build` – build the app
- `npm run start` – start the production server
- `npm run lint` – run ESLint
