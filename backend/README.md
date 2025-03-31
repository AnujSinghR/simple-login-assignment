# Simple Login - Backend

## Tech Stack
- Node.js 18+
- Express
- Prisma
- PostgreSQL
- TypeScript

## Project Structure
```
backend/
├── prisma/         # Database schema and migrations
├── src/
│   ├── controllers/ # Business logic handlers
│   ├── routes/      # API endpoint definitions
│   └── index.ts     # Server entry point
├── .env            # Environment variables
└── package.json    # Dependency management
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm 8+
- PostgreSQL database

### Installation
1. Install dependencies:
```bash
npm install
```

2. Create `.env` file (use `.env.example` if available):
```env
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
PORT=3001
```

3. Run database migrations:
```bash
npx prisma migrate dev
```

4. Start development server:
```bash
npm run dev
```

## Available Scripts
- `npm start`: Start production server
- `npm run dev`: Start development server with hot-reload
- `prisma migrate dev`: Create new database migration
- `prisma generate`: Generate Prisma client

## Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `PORT`: Server port (default: 3001)