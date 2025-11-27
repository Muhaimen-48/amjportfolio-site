# Abdul Muhaimen Jamil Washi - Academic Research Portfolio

## Overview

This is an academic portfolio website for Abdul Muhaimen Jamil Washi, a fisheries science researcher and GIS specialist. The application serves as a comprehensive showcase of research credentials, publications, technical skills, and professional achievements in the field of fisheries science, climate-ecosystem interactions, and geospatial analysis.

The portfolio is designed with a research-first approach, featuring clean information architecture inspired by Notion and Linear's design principles, combined with academic journal aesthetics to convey both technical proficiency and scientific rigor.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack React Query for server state management and API interactions

**UI Component System**
- Shadcn/ui component library with Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Custom design system following academic research aesthetic
- Typography system using Inter (body), DM Sans (headings), and JetBrains Mono (technical content)
- Comprehensive color system with HSL-based theming supporting light/dark modes

**State Management**
- React Query for server state (contact messages, data fetching)
- Local component state with React hooks
- Toast notifications for user feedback
- Theme preference stored in localStorage

**Design Principles**
- Research-first content hierarchy
- Mobile-responsive with breakpoint-aware layouts
- Accessible components via Radix UI primitives
- Consistent spacing system (Tailwind units: 4, 6, 8, 12, 16, 20)
- Maximum content width constraints for optimal readability

### Backend Architecture

**Server Framework**
- Express.js with TypeScript
- HTTP server created with Node's native http module
- Middleware stack: JSON parsing, URL-encoded bodies, request logging
- Static file serving for production builds

**API Design**
- RESTful endpoints under `/api` prefix
- Contact form API (`POST /api/contact`, `GET /api/contact`)
- Input validation using Zod schemas with drizzle-zod integration
- Structured error responses with HTTP status codes

**Data Storage Strategy**
- Interface-based storage abstraction (`IStorage`)
- In-memory storage implementation (`MemStorage`) for development
- Designed to support future PostgreSQL migration via Drizzle ORM
- UUID-based primary keys using crypto.randomUUID()

**Development vs Production**
- Development: Vite middleware integration with HMR over `/vite-hmr` path
- Production: Pre-built static assets served from `dist/public`
- Environment-aware logging and error handling
- Replit-specific plugins for development banner and cartographer

### Data Layer

**Schema Design**
- Drizzle ORM with PostgreSQL dialect configuration
- Two main tables defined:
  - `users`: Basic user authentication structure (id, username, password)
  - `contact_messages`: Form submissions (id, name, email, message, timestamp)
- Zod validation schemas derived from Drizzle schemas for runtime type safety
- Migrations directory structure for database versioning

**Type Safety**
- Shared schema definitions between frontend and backend via `@shared` path alias
- TypeScript inference for insert/select operations
- Validation at API boundaries using drizzle-zod

### External Dependencies

**UI & Component Libraries**
- Radix UI: Accessible component primitives (dialogs, dropdowns, navigation, tooltips, etc.)
- Shadcn/ui: Pre-configured component library following New York style variant
- Lucide React: Icon system for UI elements
- Class Variance Authority: Type-safe component variants
- Embla Carousel: Touch-friendly carousel implementation

**Database & ORM**
- Drizzle ORM: Type-safe SQL query builder
- @neondatabase/serverless: Neon PostgreSQL serverless driver
- Drizzle Kit: Schema management and migration tooling

**Development Tools**
- Vite plugins for Replit integration (runtime error overlay, dev banner, cartographer)
- ESBuild for server-side bundling in production
- PostCSS with Tailwind CSS and Autoprefixer

**Utility Libraries**
- date-fns: Date manipulation and formatting
- clsx & tailwind-merge: Conditional className composition
- nanoid: Unique ID generation for cache-busting

**Validation & Forms**
- Zod: Schema validation
- React Hook Form: Form state management
- @hookform/resolvers: Zod integration with React Hook Form

**Design Philosophy**
The application follows a "portfolio as research showcase" approach where content organization prioritizes academic credentials while maintaining modern web standards. The design system emphasizes credibility through professional typography, thoughtful spacing, and subtle visual hierarchy that guides visitors through research achievements, technical capabilities, and contact information.