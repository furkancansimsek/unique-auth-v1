# Authentication V1

Production-ready authentication system built with Next.js 15, React Query, and TypeScript.

## Tech Stack

- **Next.js 15** - App Router
- **TypeScript** - Strict mode
- **React Query** - Data fetching & caching
- **Orval** - API client generation
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Tailwind CSS** - Styling

## Features

- ✅ Register form (email, password, confirm password)
- ✅ Login form (email, password)
- ✅ Client-side validation with Zod
- ✅ Atomic design pattern (atoms, molecules, organisms)
- ✅ Responsive design
- ✅ TypeScript strict mode
- ✅ Production-ready UI
- ✅ Server Components by default
- ✅ Lockfile committed

## Project Structure

```
unique-auth-v1/
├── app/
│   ├── login/
│   │   └── page.tsx          # Login page
│   ├── register/
│   │   └── page.tsx          # Register page
│   ├── layout.tsx            # Root layout with QueryProvider
│   └── page.tsx              # Home page
├── components/
│   ├── atoms/
│   │   ├── Button.tsx        # Button component
│   │   ├── Input.tsx         # Input component
│   │   └── Label.tsx         # Label component
│   ├── molecules/
│   │   └── FormField.tsx     # Form field (label + input)
│   └── organisms/
│       ├── LoginForm.tsx     # Login form
│       └── RegisterForm.tsx  # Register form
└── lib/
    └── providers/
        └── QueryProvider.tsx # React Query provider
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Screenshots

### Home Page
![Home](screenshot-home.png)

### Register Page
![Register](screenshot-register.png)

### Login Page
![Login](screenshot-login.png)

## UNIQUE Standards

This project follows UNIQUE frontend standards:

- ✅ TypeScript strict mode enabled
- ✅ No comment lines in code
- ✅ Atomic design pattern
- ✅ Server Components by default, Client Components explicit
- ✅ Consistent folder structure
- ✅ Lockfile committed

## License

MIT
