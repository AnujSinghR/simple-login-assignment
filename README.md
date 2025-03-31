# Simple Login - Full Stack Project

## Project Overview
A full-stack authentication system with React frontend and Node.js backend using Supabase PostgreSQL. Features JWT-based authentication, secure password storage, and session management.

## Tech Stack
- **Frontend**: React 18, Vite, Axios
- **Backend**: Node.js, Express, Prisma
- **Database**: Supabase PostgreSQL
- **Auth**: JWT, Bcrypt

## Key Features
- User registration/login with email/password
- Protected routes implementation
- Session persistence with HTTP-only cookies
- Error handling middleware
- Database migrations with Prisma

## Supabase Integration
1. Created PostgreSQL instance on Supabase
2. Configured connection string in backend `.env`:
```env
DATABASE_URL="postgresql://[user]:[password]@[host]:[port]/[db-name]?schema=public"
```
3. Prisma schema configured for Supabase-compatible tables
4. Row Level Security policies in Supabase dashboard

## API Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/register` | POST | Create new user account |
| `/api/auth/login` | POST | Authenticate user |
| `/api/users/me` | GET | Get current user profile |

## Development Challenges
1. **CORS Configuration**: Implemented proper origin whitelisting
2. **Database Migrations**: Managed schema changes with Prisma
3. **State Management**: Context API for auth state synchronization
4. **Secure Cookies**: HttpOnly flag and same-site policy
5. **Type Safety**: Shared TS interfaces between frontend/backend

## Local Setup
```bash
# Backend
cd backend
npm install
npx prisma migrate dev
npm run dev

# Frontend
cd frontend
npm install
npm run dev
```

## Deployment
1. Build frontend: `npm run build`
2. Configure production environment variables
3. Deploy backend to Heroku/DigitalOcean
4. Connect to Supabase production database
5. Set up CI/CD pipeline for automated testing

## Architecture Diagram
```
[Frontend] ←HTTP→ [Backend] ←Prisma→ [Supabase PostgreSQL]
   ↑                    ↑
(React)           (Express Middleware)