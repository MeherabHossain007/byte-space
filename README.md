# ByteSpace — Modern EdTech Learning Platform Frontend

A high-fidelity, responsive frontend implementation of the **ByteSpace** online learning platform built with Next.js 16, React 19, and Tailwind CSS v4.

Based on the official Figma design: [ByteSpace Figma Design](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0)

---

## 🚀 Key Features

### 1. Landing Page
- **Hero Section**:
  - Signature ByteSpace Royal Blue (`#003BE2`) background with blueprint grid pattern (`.bg-grid-pattern`).
  - Search bar with live search input and neon lime (`#CBFC01`) action button.
  - High-res student cutout on a neon lime circular glow backdrop.
  - Interactive floating cards: **UI/UX Design**, **Learning Progress (55%)**, and **Happy Students (Avatar stack & 4.5 rating)** with responsive positioning.
- **Partner Logos Bar**:
  - Brand partner logos displayed in an edge-to-edge responsive strip.
- **Course Catalog ("Discover Your Passion, Build Your Skills")**:
  - Dynamic category pill filter bar with interactive filtering and active state styling.
  - 6 rich course cards with badges, duration, star rating, student avatar stacks, and pricing.
- **Learning Paths ("Explore Diverse Learning Paths at Bytespace")**:
  - 6 category path cards featuring circular lime icon containers and smooth hover lift animations.
- **Student Growth & Course Management**:
  - Metrics counters (**12K** Students, **70+** Courses, **16** Creators).
  - Learning and Creator illustrations with revenue metrics and Happy Students card.
- **Creator CTA Banner**:
  - Royal blue blueprint banner with floating 3D shapes and **"Join as Creator"** action button.
- **Testimonials ("Discover What Our Community Is Saying")**:
  - 3 community testimonial cards with ratings, quotes, and avatars.
- **Footer**:
  - Brand mark, newsletter subscription form with client-side email validation, and categorized navigation links.

### 2. Authentication Pages
- **Login Page (`/login`)**:
  - Branded layout with blueprint pattern and course artwork cluster.
  - Email and password input fields using standard `Input` and `Button` UI components.
  - Social login options (Google & Facebook simulation).
  - Validation error handling and simulated authentication.
- **Signup Page (`/signup`)**:
  - Full Name, Email, and Password fields with validation.
  - Consistent visual language and responsive 2-column layout.

### 3. Error Handling & 404
- **404 Page (`/not-found`)**: Branded 404 error page with navigation back to Home.
- **Global Error Boundary (`app/error.tsx`)**: Client error boundary with recovery action.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Testing**: [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Typography**: Satoshi (Fontshare) & Poppins (Google Fonts)

---

## 📁 Project Architecture

```
byte-space/
├── app/
│   ├── globals.css             # Theme tokens, custom gradients, CSS variables
│   ├── layout.tsx              # Root layout with fonts, metadata, navbar & footer
│   ├── page.tsx                # Main Landing Page assembling all sections
│   ├── error.tsx               # Global client error boundary
│   ├── not-found.tsx           # Branded 404 error page
│   ├── login/
│   │   └── page.tsx            # Login page
│   └── signup/
│       └── page.tsx            # Signup page
├── components/
│   ├── sections/               # High-level page sections
│   │   ├── CourseSection.tsx
│   │   ├── CreatorCTA.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LearningPathsSection.tsx
│   │   ├── PartnersSection.tsx
│   │   ├── StudentGrowthSection.tsx
│   │   └── TestimonialsSection.tsx
│   ├── shared/                 # Shell / layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/                     # Primitives and reusable cards
│       ├── Button.tsx
│       ├── Input.tsx
│       └── cards/
│           ├── AuthCardCluster.tsx
│           ├── CourseCard.tsx
│           ├── HappyStudentsCard.tsx
│           ├── LearningProgressCard.tsx
│           └── UiUxDesignCard.tsx
├── lib/
│   ├── constants/              # Centralized domain mock data & constants
│   │   ├── avatars.ts
│   │   ├── courses.ts
│   │   ├── navigation.ts
│   │   ├── partners.ts
│   │   ├── testimonials.ts
│   │   └── index.ts
│   └── utils/                  # Validation & helper utilities
│       ├── validation.ts
│       └── index.ts
├── types/                      # Centralized TypeScript definitions
│   ├── course.ts
│   ├── navigation.ts
│   ├── partner.ts
│   ├── testimonial.ts
│   └── index.ts
├── test/                       # Automated Vitest unit & integration tests
│   ├── setup.ts
│   ├── Button.test.tsx
│   ├── Input.test.tsx
│   ├── CourseCard.test.tsx
│   └── validation.test.ts
├── public/                     # Static assets (images, icons, logos, shapes)
├── vitest.config.mts           # Vitest test runner configuration
├── next.config.ts              # Next.js configuration (remote image patterns)
├── tsconfig.json               # TypeScript configuration
└── package.json
```

---

## 💻 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| `dev` | `pnpm dev` | Starts the Next.js local development server on `http://localhost:3000` |
| `build` | `pnpm build` | Builds the optimized production bundle |
| `start` | `pnpm start` | Runs the built production server |
| `lint` | `pnpm lint` | Runs ESLint across all TypeScript and React files |
| `test` | `pnpm test` | Runs all Vitest unit and integration test suites |
| `test:watch` | `pnpm test:watch` | Runs Vitest in interactive watch mode |

---

## 🧪 Testing Guidelines

Run all automated unit and integration tests:
```bash
pnpm test
```

All new UI primitives and utility functions should include corresponding test coverage under `test/` verifying:
1. Component mounting and prop rendering.
2. User interaction callbacks and state updates.
3. Edge cases and validation failure handling.

---

## 🚀 Deployment

The project is fully preconfigured for deployment on [Vercel](https://vercel.com/):
1. Connect your repository to Vercel.
2. The framework preset is automatically detected as **Next.js**.
3. Deploy without requiring custom build overrides or manual environment keys.
