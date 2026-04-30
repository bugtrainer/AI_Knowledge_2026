# Aura OS (AI Knowledge Graph Explorer)

Aura OS is the interactive React app for browsing this vault as a visual graph and reading notes in-context.

## Prerequisites
- Node.js 18+
- Root manifest generated via `scripts/aura-indexer.js`
- Local vault API server via `scripts/aura-server.js`

## Local Development
From repository root:

1. Generate/update graph data manifest:
   ```bash
   node scripts/aura-indexer.js
   ```
2. Start the local vault API server:
   ```bash
   node scripts/aura-server.js
   ```
3. In another terminal, run the Aura UI:
   ```bash
   cd aura-os
   npm install
   npm run dev
   ```

## Environment Variables
Create `aura-os/.env.local` as needed:

```bash
VITE_API_BASE_URL=http://localhost:3002
```

If omitted, Aura defaults to `http://localhost:3002`.

## Build
```bash
cd aura-os
npm run build
```

## Architecture Notes
- Graph node/link data comes from `data/aura-manifest.json`.
- Markdown content is fetched from `GET /vault/<path>` on the local API server.
- Doc rendering uses `react-markdown`.
