# 🎓 Ibadur Rahman Academy Website

A modern, responsive website for Ibadur Rahman Academy built with Next.js 14 and React-Bootstrap.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Pages](#pages)
- [Components](#components)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Future Enhancements](#future-enhancements)
- [License](#license)
- [Contact](#contact)

## 🏫 About

Ibadur Rahman Academy's official website serves as a comprehensive digital platform for students, parents, and prospective families. The website showcases the academy's commitment to excellence in  education, providing easy access to information about programs, events, and school activities.

### 🎯 Key Objectives

- Provide essential school information to stakeholders
- Enable easy content management for school staff
- Ensure fast loading and mobile-friendly experience

## ✨ Features

### Current Features (MVP)
- 📱 **Fully Responsive Design** - Works seamlessly on all devices
- 🎨 **Modern UI/UX** - Clean and professional interface
- 🎠 **Interactive Carousels** - Hero section and news carousel with smooth transitions
- 📑 **7 Core Pages** - Home, About, Academic, Staff, Students, Gallery, Contact
- 🎯 **Navigation Menu** - Sticky header with active page indicators
- 📰 **News Section** - Latest updates and announcements
- 👥 **Leadership Profiles** - Staff information and photos
- 📞 **Contact Information** - Easy access to school details

### Design Features
- 🌈 **Custom Color Scheme** - Navy blue (#090A46) and gold (#FFD700)
- 🎭 **Gradient Overlays** - Professional image overlays
- ✨ **Smooth Animations** - Fade-in effects and transitions
- 🎪 **Bootstrap Components** - Consistent and reliable UI elements

## 🛠️ Tech Stack

### Frontend
- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **UI Library:** [React 18](https://react.dev/)
- **Styling:** [React Bootstrap](https://react-bootstrap.github.io/) + Custom CSS
- **Icons:** [Bootstrap Icons](https://icons.getbootstrap.com/)

### Planned Integrations
- **CMS:** [Sanity.io](https://www.sanity.io/)
- **Database:** PostgreSQL/Supabase (for future portals)
- **Authentication:** NextAuth.js
- **Hosting:** [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ibadur-rahman-academy.git
   cd ibadur-rahman-academy
   ```

2. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your environment variables:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
ibadur-rahman-academy/
├── frontend/
│   ├── app/
│   │   ├── layout.js          # Root layout with header/footer
│   │   ├── page.js            # Homepage
│   │   ├── globals.css        # Global styles
│   │   ├── about/
│   │   │   └── page.js        # About page
│   │   ├── academic/
│   │   │   └── page.js        # Academic programs page
│   │   ├── staff/
│   │   │   └── page.js        # Staff directory
│   │   ├── students/
│   │   │   └── page.js        # Student life page
│   │   ├── gallery/
│   │   │   └── page.js        # Photo gallery
│   │   ├── contact/
│   │   │   └── page.js        # Contact page
│   │   └── login/
│   │       └── page.js        # Login page (placeholder)
│   │
│   ├── components/
│   │   ├── Header.js          # Navigation header
│   │   ├── Hero.js            # Hero carousel section
│   │   └── Footer.js          # Site footer
│   │
│   ├── public/
│   │   └── images/            # Static images
│   │
│   ├── package.json
│   └── next.config.js
│
├── backend/                   # Reserved for future API development
│   └── README.md
│
└── README.md                  # This file
```

## 📜 Available Scripts

In the frontend directory, you can run:

### `npm run dev`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`
Builds the app for production to the `.next` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run start`
Runs the built app in production mode.\
You need to run `npm run build` first.

### `npm run lint`
Runs the linter to check for code quality issues.

## 📄 Pages

### Homepage (`/`)
- Hero carousel with school highlights
- About us preview section
- Academic departments showcase
- News and events carousel
- Leadership team profiles

### About Us (`/about`)
- School history and background
- Vision and mission statements
- Core values
- Achievements

### Academic (`/academic`)
- Program offerings (Science, Arts, Visual Arts, Home Economics)
- Curriculum overview
- Admission requirements
- Academic calendar

### Staff (`/staff`)
- Management team profiles
- Teaching staff directory
- Support staff listing

### Students (`/students`)
- Student life overview
- Clubs and societies
- Student leadership (prefects)
- Extracurricular activities

### Gallery (`/gallery`)
- Photo collections
- Event highlights
- Campus facilities
- Student activities

### Contact (`/contact`)
- Contact form
- School location and map
- Office hours
- Communication channels

### Login (`/login`)
- Placeholder for future portal access
- Coming soon message

## 🧩 Components

### Header Component
- Responsive navigation menu
- Active page highlighting
- Mobile hamburger menu
- Sticky positioning

### Hero Component
- Full-screen carousel
- Gradient overlays
- Smooth transitions
- Call-to-action buttons

### Footer Component
- Contact information
- Quick links in columns
- Social media links (placeholder)
- Copyright section with dark background

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Configure environment variables
5. Deploy!

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```
2. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
3. Deploy:
   ```bash
   netlify deploy --prod
   ```

## 🤝 Contributing

We welcome contributions to improve the website! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Test responsive design on multiple devices
- Ensure all links are working
- Optimize images before adding

## 🚧 Future Enhancements

### Phase 2: Content Management
- [ ] Integrate Sanity CMS
- [ ] Dynamic content loading
- [ ] News article management
- [ ] Event calendar system
- [ ] Staff profile management

### Phase 3: Interactive Features
- [ ] Student portal with grades and assignments
- [ ] Parent portal with student information
- [ ] Teacher portal with class management
- [ ] Online admission system
- [ ] Fee payment integration

### Phase 4: Advanced Features
- [ ] Multi-language support (English/Local languages)
- [ ] Advanced search functionality
- [ ] Alumni directory and networking
- [ ] Mobile app development
- [ ] Live chat support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Ibadur Rahman Academy**
- Website: [www.ibadurrahman.edu.gh](https://www.ibadurrahman.edu.gh)
- Email: info@ibadurrahman.edu.gh
- Phone: +233 XX XXX XXXX
- Location: Ghana

**Development Team**
- ICT Department, Ibadur Rahman Academy

---

<p align="center">Made with ❤️ by Ibadur Rahman Academy ICT Team</p>