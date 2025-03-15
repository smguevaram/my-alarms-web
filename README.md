# My Alarms App (Web)

## Preview

https://github.com/user-attachments/assets/d4b0698e-1081-4552-8eea-7143b8aaea48


A React application built with Vite that serves as an alarms and reminders control system. This project leverages Material UI for styling, React Router for navigation, and Recharts for visual consumption analysis.

## Prerequisites

- [Node.js](https://nodejs.org/en/) (version 14 or later recommended)
- npm or yarn package manager

## Getting Started

### 2. Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### 3. Run the Development Server

Start the Vite development server:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

The app will be available at [http://localhost:3000](http://localhost:3000) (the port may vary).

### 4. Build for Production

To create an optimized production build:

```bash
npm run build
```

Or with yarn:

```bash
yarn build
```

### 5. Preview the Production Build

After building, you can preview the production build with:

```bash
npm run preview
```

Or with yarn:

```bash
yarn preview
```

### 6. Lint the Project

To check the code for linting errors:

```bash
npm run lint
```

Or with yarn:

```bash
yarn lint
```

## Project Structure

- **src/**
    - **assets/**: Static assets (images, icons, etc.).
    - **pages/**: React components for each page (Home, Privacy Policy, History, Medicine Edit, Consumption Analysis).
    - **routes.jsx**: Application routing configuration using React Router.
    - **App.jsx**: Main application component.
- **vite.config.js**: Vite configuration file.
- **eslint.config.js**: ESLint configuration for maintaining code quality.

## Extending the ESLint Configuration

For production applications, it's recommended to use TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) into your project.
