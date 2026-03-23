# Azure Port

Azure Port is a single-page portfolio web application built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui. It presents a modern personal portfolio experience with animated hero visuals, bilingual content, light/dark theme switching, featured projects, skills, and a contact section.

## Features

- Responsive single-page portfolio layout with anchored navigation
- Light and dark theme toggle with local persistence
- English and Indonesian language switching with local persistence
- Animated hero section with gradient, particles, and floating visual elements
- About, skills, projects, and contact sections
- Toast feedback on contact form submission
- Component tests with Vitest and Testing Library

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router
- TanStack Query
- Vitest + Testing Library

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

The app will typically be available at `http://localhost:8080`.

## Available Scripts

- `npm run dev` — start the Vite development server
- `npm run build` — create a production build
- `npm run build:dev` — create a development-mode build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint
- `npm run test` — run the test suite once
- `npm run test:watch` — run tests in watch mode

## Project Structure

```text
src/
  components/      Reusable UI and page sections
  hooks/           Theme, language, toast, and responsive hooks
  lib/             Utility helpers and translation data
  pages/           Route-level pages
  test/            Test setup
```

## Main Sections

- **Hero**: Introductory banner with CTA buttons and animated background effects
- **About**: Brief personal summary and highlight cards
- **Skills**: Categorized skill groups with progress indicators
- **Projects**: Portfolio project cards with tags and action buttons
- **Contact**: Contact form, toast notification, and social links

## Localization

The site currently supports:

- English (`en`)
- Indonesian (`id`)

Translations are managed in `src/lib/translations.ts`.

## Theming

Theme preference is stored in `localStorage` and applied to the document root so the selected mode persists across visits.

## Testing

Run the automated tests with:

```bash
npm run test
```

Run linting with:

```bash
npm run lint
```

Create a production build with:

```bash
npm run build
```

## Deployment

Build the application and deploy the generated `dist/` folder using any static hosting provider, such as:

- Vercel
- Netlify
- Azure Static Web Apps
- GitHub Pages

## Future Improvements

- Connect the contact form to a real backend or email service
- Replace placeholder project links with live portfolio entries
- Add downloadable CV functionality to the hero CTA
- Add end-to-end testing for key user flows
