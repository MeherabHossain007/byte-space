# ByteSpace — Modern EdTech Learning Platform Frontend

A high-fidelity, responsive frontend implementation of the **ByteSpace** online learning platform built for the **Jr. Software Engineer assessment**.

Based on the official Figma design: [ByteSpace Figma Design](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0)

---

## 🚀 Key Features

### 1. Landing Page (Core Requirement)
- **Hero Section**:
  - Signature ByteSpace Royal Blue (`#1856F3`) background with blueprint grid pattern (`.bg-grid-pattern`).
  - Playful 3D Memphis floating geometric elements (neon lime coil, 3D cylinder, smooth torus, triangular prism, and zigzag doodles).
  - Search bar with live search input and neon lime (`#CEFF1A`) action button.
  - High-res student cutout on a neon lime circular glow backdrop.
  - Floating glassmorphism cards: **Category (Web Design)**, **Course Progress (55%)**, and **Popular Tutors (Avatar stack & 4.9 rating)**.
- **Partner Logos Bar**:
  - Grayscale Logoipsum brand logos displayed in an edge-to-edge responsive strip.
- **"Discover Your Passion, Build Your Skills" (Course Catalog)**:
  - Dynamic category pill filter bar (*Design*, *All*, *Front End Development*, *Back End*, *Cyber Security*, *Data Science*, etc.) with live filtering and active state styling.
  - 6 rich course cards with real images, category badges, duration with clock icon, star rating with reviews count, student avatar stacks, and pricing.
- **"Explore Diverse Learning Paths at Bytespace"**:
  - 6 category path cards (*Design*, *Development*, *Data Science*, *Marketing*, *Photography*, *Writing & Audio*) featuring circular lime icon containers and smooth hover lift animations.
- **"Your Path to Professional Growth Starts Here!"**:
  - Student value proposition with 3 key metric counters (**17K+** Enrolled Students, **90+** Expert Instructors, **18** Career Tracks).
  - Visual composition with student photo and floating course snippet cards.
- **"Create & Manage Courses Easily."**:
  - Instructor value proposition featuring instructor visual holding tablet, floating revenue badge (**$25,480.00**), active learners indicator (**55,045**), 5-star rating badge, and a 4-point benefit checklist.
- **Creator CTA Banner**:
  - Royal blue blueprint banner with floating 3D shapes and **"Join as Creator"** action button.
- **"Discover What Our Community Is Saying" (Testimonials)**:
  - 3 community testimonial cards with 5-star rating badges, quotes, avatars, and ambient lime glow backdrop.
- **Footer**:
  - ByteSpace brand mark and newsletter subscription form with simulated validation.
  - Multi-column navigation links (*Quick Links*, *Explore*, *Company*) and copyright bar.

### 2. Authentication Pages (Bonus / Extra Credit)
- **Login Page (`/login`)**:
  - Clean card layout with subtle blueprint background and ambient glow.
  - Google and GitHub social auth options.
  - Email and password fields with interactive password visibility toggle (eye/eye-off).
  - "Remember me" checkbox and "Forgot password" modal flow.
  - Simulated authentication with loading states and redirect to home.
- **Signup Page (`/signup`)**:
  - Role switcher tab (**"I want to Learn"** vs **"I want to Teach"**).
  - Full name, email, and password fields with validation.
  - Terms of service and privacy policy consent checkbox.
  - Seamless navigation back to ByteSpace home or between Login and Signup.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Typography**: [Inter](https://fonts.google.com/specimen/Inter) via `next/font/google`

---

## 📁 Project Structure

```
byte-space/
├── app/
│   ├── globals.css         # Custom animations, blueprint grid, brand colors
│   ├── layout.tsx          # Root layout with Inter font and SEO metadata
│   ├── page.tsx            # Main Landing Page assembling all 9 sections
│   ├── login/
│   │   └── page.tsx        # Bonus: Login page
│   └── signup/
│       └── page.tsx        # Bonus: Signup page with role selector
├── components/
│   ├── Navbar.tsx          # Responsive navbar with mobile hamburger menu
│   ├── DecorativeShapes.tsx# Crisp 3D Memphis floating shapes & doodle squiggles
│   ├── HeroSection.tsx     # Hero section with search & student visual
│   ├── PartnerLogos.tsx    # Logoipsum partner bar
│   ├── CourseCatalog.tsx   # Interactive category filter & 6 course cards
│   ├── LearningPaths.tsx   # 6 learning path cards with lime icon circles
│   ├── StudentGrowthSection.tsx # Metrics counters & student visual
│   ├── InstructorSection.tsx    # Instructor visual, revenue card, and checklist
│   ├── CreatorCTA.tsx      # Royal blue creator CTA banner
│   ├── TestimonialsSection.tsx  # 3 testimonial cards with ambient glow
│   └── Footer.tsx          # Newsletter subscription & footer link columns
├── public/
│   └── images/
│       ├── hero-student.jpg
│       ├── instructor.jpg
│       └── courses/        # 6 course card preview images
├── package.json
└── tsconfig.json
```

---

## 💻 Getting Started Locally

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd byte-space
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

5. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

---

## 🚀 Deploying to Vercel

1. Push this project to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: complete ByteSpace landing page and auth pages"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. Visit [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Keep standard Next.js build settings (`npm run build`).
5. Click **Deploy**. Vercel will build and deploy the application with zero additional configuration needed.
