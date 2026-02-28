# EDUGUILD

EDUGUILD is a full stack academic resource platform with a formal public homepage and an authenticated MVP dashboard. It provides structured resource sharing for universities while keeping the experience reliable and demo-ready.

## Product Scope

- Public university-style website (Home, About, Features, Benefits, Contact, Login, Signup)
- Credentials-based authentication with NextAuth
- Protected dashboard with sidebar and top navigation
- Add resource form (external links only)
- Resource list with embedded preview

## Tech Stack

- Next.js 14 (App Router)
- TypeScript + Tailwind CSS
- Prisma ORM with PostgreSQL (Supabase)
- NextAuth (credentials provider)

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- npm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   Create a `.env.local` file in the project root:
   ```
   DATABASE_URL="postgresql://user:password@host:port/db"
   NEXTAUTH_SECRET="super-secret-dev-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

3. Generate Prisma client and migrate:
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   npm run db:seed
   ```

4. Start the dev server:
   ```bash
   npm run dev
   ```

Visit `http://localhost:3000`.

Seeded demo account:
- Email: `student@eduguild.edu`
- Password: `password123`

## App Routes

Public:
- `/` Home
- `/about`
- `/features`
- `/benefits`
- `/contact`
- `/auth/login`
- `/auth/signup`

Authenticated:
- `/dashboard`
- `/dashboard/resources`
- `/dashboard/add-resource`

## Environment Variables

See `.env.example` for the required configuration.

## Database Schema

The MVP schema includes:

- `User` with `name`, `email`, `passwordHash`, `college`, `department`, and `academicYear`.
- `Resource` with `title`, `description`, `externalLink`, `college`, `department`, `academicYear`, and `createdById`.

## Notes

- The resource library stores only external links (no direct uploads).
- The embedded viewer is a standard iframe; some providers may block embedding.
