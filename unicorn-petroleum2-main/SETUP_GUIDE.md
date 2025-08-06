# Quick Setup Guide - Unicorn Petroleum Website

## 🚀 Getting Started

### 1. Install Dependencies

```bash
cd Unicorn
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

### 3. Open in Browser

Navigate to `http://localhost:5173`

## 📁 Project Structure Overview

```
Unicorn/
├── src/
│   ├── Common/           # ✅ Reusable components
│   │   ├── Header.jsx    # Navigation with contact bar
│   │   ├── Footer.jsx    # Footer with links
│   │   ├── Card.jsx      # Multi-purpose card component
│   │   ├── Section.jsx   # Flexible section component
│   │   ├── HeroSection.jsx # Hero banner
│   │   ├── CallToAction.jsx # CTA section
│   │   ├── CompanyStatement.jsx # Company motto
│   │   └── FGridSection.jsx # Grid section
│   ├── Data/             # ✅ JSON data files
│   │   ├── homeData.js   # Home page content
│   │   ├── headerData.js # Header navigation
│   │   └── footerData.js # Footer content
│   ├── components/       # ✅ Page components
│   │   └── Home/
│   │       └── HomeIndex.jsx # Home page
│   └── Routing/          # ✅ App routing
└── README.md            # ✅ Project documentation
```

## 🎯 Key Features Implemented

### ✅ Reusable Components

- **Header**: Contact bar + navigation with dropdowns
- **Footer**: Multi-column layout with contact info
- **Card**: Multi-purpose card (strength, product, industry, news)
- **Section**: Flexible section component for different layouts
- **HeroSection**: Full-screen banner with overlay
- **CallToAction**: CTA section with buttons
- **CompanyStatement**: Company motto display

### ✅ Data-Driven Architecture

- All content stored in JSON files
- Easy content updates without code changes
- SEO-friendly content management

### ✅ Responsive Design

- Mobile-first approach
- Tailwind CSS utility classes
- Flexible grid layouts

### ✅ Modern Development

- React 19 with hooks
- Vite for fast development
- React Router for navigation

## 🔧 How to Use Components

### 1. Using the Card Component

```javascript
// Strength card
<Card
  type="strength"
  icon="🏆"
  title="60+ Years of Expertise"
  description="Pioneering quality ingredients since 1964"
/>

// Product card
<Card
  type="product"
  image="https://example.com/image.jpg"
  title="Petroleum Jelly"
  description="High-purity, pharma-grade jelly"
  buttonText="View Details →"
/>
```

### 2. Using the Section Component

```javascript
// Strengths section
<Section
  type="strengths"
  heading="Our Strengths"
  subheading="Excellence built on expertise"
  cards={strengthsData}
  buttonText="Request Info →"
/>

// Products section
<Section
  type="products"
  heading="Our Products"
  subheading="Quality products for your needs"
  cards={productsData}
/>
```

### 3. Adding New Pages

```javascript
// 1. Create data file
// src/Data/aboutData.js
export const aboutData = {
  hero: {
    title: "About Us",
    subtitle: "Learn about our company",
  },
};

// 2. Create page component
// src/Pages/AboutPage.jsx
import React from "react";
import Header from "../Common/Header";
import Section from "../Common/Section";
import Footer from "../Common/Footer";
import { aboutData } from "../Data/aboutData";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <Section
        type="strengths"
        heading={aboutData.hero.title}
        cards={aboutData.sections.cards}
      />
      <Footer />
    </div>
  );
};

export default AboutPage;
```

## 📝 Content Management

### Updating Text Content

Edit the JSON files in `src/Data/`:

- `homeData.js` - Home page content
- `headerData.js` - Navigation and contact info
- `footerData.js` - Footer content

### Adding Images

1. Place images in `public/images/`
2. Update image paths in data files
3. Use relative paths: `/images/your-image.jpg`

### Changing Colors/Styling

- Edit Tailwind classes in components
- Brand color: `#EDA94E` (orange-500)
- Text colors: gray-900, gray-700, gray-600

## 🎨 Design System

### Colors

- **Primary Orange**: `#EDA94E`
- **Text**: gray-900 (headings), gray-700 (body), gray-600 (subtle)
- **Backgrounds**: white, gray-50, orange-50

### Typography

- **Headings**: text-4xl font-bold
- **Subheadings**: text-xl text-gray-600
- **Body**: text-gray-700

### Spacing

- **Sections**: py-16 px-6 md:px-8 lg:px-12
- **Cards**: p-6
- **Buttons**: px-8 py-3

## 🚀 Next Steps

1. **Add Real Images**: Replace placeholder images with actual product photos
2. **Create Other Pages**: About, Products, Contact pages using same pattern
3. **Add Animations**: Implement smooth transitions and hover effects
4. **Add Forms**: Contact forms and inquiry forms
5. **SEO Optimization**: Add meta tags and structured data
6. **Performance**: Implement lazy loading and image optimization

## 📚 Learning Resources

- **LEARNING_DOCUMENTATION.md**: Comprehensive learning guide
- **README.md**: Project overview and usage instructions
- **Component Comments**: Inline documentation in each component

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading**: Check image paths in data files
2. **Styling issues**: Ensure Tailwind CSS is properly configured
3. **Routing problems**: Check route definitions in Routing.jsx
4. **Component errors**: Verify prop names match component expectations

### Development Tips

1. **Hot Reload**: Changes auto-refresh in development
2. **Console Logs**: Check browser console for errors
3. **React DevTools**: Use for component debugging
4. **Tailwind IntelliSense**: Install VS Code extension for better CSS autocomplete

---

**Ready to build amazing websites! 🚀**
