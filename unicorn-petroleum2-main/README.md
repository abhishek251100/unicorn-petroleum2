# Unicorn Petroleum - React Website

A modern, responsive React website for Unicorn Petroleum Industries Pvt. Ltd., built with reusable components and data-driven architecture.

## 🚀 Features

- **Reusable Components**: Modular design with components that can be used across different pages
- **Data-Driven**: All content is stored in JSON files for easy updates
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design matching the Figma specifications
- **SEO-Friendly**: Semantic HTML and optimized structure

## 📁 Project Structure

```
Unicorn/
├── src/
│   ├── Common/           # Reusable components
│   │   ├── Header.jsx    # Navigation and contact bar
│   │   ├── Footer.jsx    # Footer with links and contact info
│   │   ├── Card.jsx      # Multi-purpose card component
│   │   ├── Section.jsx   # Flexible section component
│   │   ├── HeroSection.jsx # Hero banner component
│   │   ├── CallToAction.jsx # CTA section component
│   │   ├── CompanyStatement.jsx # Company motto component
│   │   └── FGridSection.jsx # Grid section component
│   ├── Data/             # JSON data files
│   │   ├── homeData.js   # Home page content
│   │   ├── headerData.js # Header navigation data
│   │   └── footerData.js # Footer content data
│   ├── components/       # Page-specific components
│   │   └── Home/
│   │       └── HomeIndex.jsx # Home page component
│   └── Pages/           # Page components
├── public/              # Static assets
└── README.md           # This file
```

## 🛠️ Technologies Used

- **React 19**: Latest React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **React Icons**: Icon library
- **Material-UI**: Additional UI components (optional)

## 🎨 Design Features

### Color Scheme
- **Primary Orange**: `#EDA94E` (brand color)
- **Gray Scale**: Various shades for text and backgrounds
- **White**: Clean backgrounds and cards

### Typography
- **Headings**: Bold, large text for main titles
- **Subheadings**: Medium weight for section titles
- **Body Text**: Readable gray text for content

### Components
- **Header**: Contact bar + navigation with dropdown menus
- **Hero Section**: Full-screen banner with overlay content
- **Card Grids**: Flexible card layouts for different content types
- **Footer**: Multi-column layout with contact information

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Unicorn
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

## 📝 Usage

### Adding New Pages

1. **Create data file** in `src/Data/`
   ```javascript
   // src/Data/aboutData.js
   export const aboutData = {
     hero: {
       title: "About Us",
       subtitle: "Learn about our company"
     },
     sections: {
       // Your section data
     }
   };
   ```

2. **Create page component** in `src/Pages/`
   ```javascript
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
           heading={aboutData.sections.heading}
           cards={aboutData.sections.cards}
         />
         <Footer />
       </div>
     );
   };

   export default AboutPage;
   ```

3. **Add route** in your routing configuration

### Updating Content

All content is stored in JSON files in the `src/Data/` directory:

- **Text Content**: Update strings in data files
- **Images**: Replace image paths in data files
- **Links**: Update URLs in data files
- **Styling**: Modify component CSS classes

### Component Reusability

Components are designed to be reusable with different data:

```javascript
// Same component, different data
<Section
  type="strengths"
  heading="Our Strengths"
  cards={strengthsData}
/>

<Section
  type="products"
  heading="Our Products"
  cards={productsData}
/>
```

## 🎯 Key Features

### 1. **Data-Driven Architecture**
- Content separated from presentation
- Easy content updates without code changes
- SEO-friendly content management

### 2. **Reusable Components**
- Single components for multiple use cases
- Consistent styling across the application
- Easy maintenance and updates

### 3. **Responsive Design**
- Mobile-first approach
- Flexible grid layouts
- Optimized for all screen sizes

### 4. **Modern Development**
- Latest React features
- Fast development with Vite
- Clean, maintainable code

## 📚 Learning Resources

See `LEARNING_DOCUMENTATION.md` for detailed explanations of:
- Component architecture patterns
- Data management strategies
- Styling approaches
- Best practices
- Usage examples

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Unicorn Petroleum Industries Pvt. Ltd.

## 📞 Support

For technical support or questions about the codebase, please refer to the learning documentation or contact the development team.

---

**Built with ❤️ for Unicorn Petroleum Industries Pvt. Ltd.**
