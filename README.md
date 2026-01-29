# Pluxee Cashback France

A mobile-first demo application showcasing the Pluxee Cashback experience for the French market.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Railway

## Getting Started

### Development in Codespaces

1. Click "Code" → "Codespaces" → "Create codespace on main"
2. Wait for the container to build
3. Run `npm run dev`
4. Open the preview at port 3000

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/           # Next.js App Router pages
├── components/    # React components
├── data/          # Mock data (merchants, offers)
└── lib/           # Utilities
```

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Blue | `#221C46` | Primary text, headers |
| Ultra Green | `#00EB5E` | CTAs, highlights |
| Boldly Blue | `#17CCF9` | Secondary accent |
| Very Yellow | `#FFDC37` | Tertiary accent |
| Confidently Coral | `#FF7375` | Warnings, delete |

## Building Instructions

See `BUILDER-PLAN.md` for complete implementation details.

## Deployment

Connected to Railway for automatic deployments from main branch.
