# Order Web (Angular Frontend)

Angular 21 SPA with Angular Material 21 (M3) for order management.

## Stack

- Angular 21 (standalone components)
- Angular Material 21 (Material 3 theming)
- TypeScript 5.9
- Vitest for unit testing
- ESLint + Prettier for code quality
- Husky + lint-staged for pre-commit hooks

## Quick Start

```bash
npm install
ng serve
```

Available at http://localhost:4200

## Scripts

| Command | Description |
|---|---|
| `ng serve` | Start dev server |
| `ng build` | Production build |
| `ng test` | Run unit tests |
| `npm run format` | Format with Prettier |
| `npm run lint` | Lint with ESLint |
| `npm run lint:fix` | Lint and auto-fix |

## Features

- **Navigation bar** with persistent sidenav drawer and toolbar
- **Order form** with Material form fields, validation, and toast notifications
- **Material 3 theming** with custom palette overrides

## Project Structure

```
src/app/
├── features/
│   ├── nav-bar/       # Sidenav + toolbar layout
│   ├── home/          # Home page
│   ├── order/         # Order creation form with validation
│   ├── login/         # Login page
│   └── toaster/       # MatSnackBar toast components (success/error)
├── directives/        # Custom directives
├── app.ts             # Root component
├── app.routes.ts      # Route definitions
└── app.config.ts      # Application providers
```

## Angular Material Theming

Theme customization is in `src/material-theme.scss`:

- **Primary palette:** Azure
- **Tertiary palette:** Blue
- **Toolbar:** Purple background, white text
- **Sidenav:** Light gray (`#e0e0e0`) background, black text/icons
- **Toast notifications:** Green for success, red for errors
