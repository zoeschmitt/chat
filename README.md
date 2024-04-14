# Z Chat

## Stack

- [Vite](https://vitejs.dev)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)

### Testing

- [Playwright](https://playwright.dev)
- [Vitest](https://vitest.dev/)

### Linting and Formatting

Prettier for formatting and linters for catching bugs!

- [ESLint for TypeScript](https://typescript-eslint.io)
- [Prettier](https://prettier.io/)
- [Stylelint](https://stylelint.io)
- [BEM](https://getbem.com)
- [Commitlint](https://commitlint.js.org)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### CI/CD

- [Github Actions](https://docs.github.com/en/actions)

## Workspace Structure

```plaintext
chat/
├── src/
│   ├── assets/              # Static assets like images, fonts, etc.
│   ├── components/          # React components
│   ├── pages/               # React page components
│   ├── services/            # API services or other external services
│   ├── styles/              # CSS or other styling files
│   ├── utils/               # Utility functions
│   ├── App.tsx              # Main React application component
│   ├── index.tsx            # Entry point of the application
│   ├── setupTests.ts        # Jest setup file
├── tests/                    # Folder for automated tests
│   ├── e2e/                  # End-to-end tests (Playwright)
│   ├── unit/                 # Unit tests (Jest)
├── public/                   # Public assets and static files
│   ├── index.html            # HTML template
├── .github/                  # GitHub Actions workflow configurations
│   ├── workflows/            # GitHub Actions workflows
│       ├── build.yml         # Example: CI/CD workflow
├── vite.config.ts            # Vite configuration file
├── tsconfig.json             # TypeScript configuration file
├── jest.config.js            # Jest configuration file
├── package.json              # NPM project configuration file
└── README.md                 # Project documentation
```
