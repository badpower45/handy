# Duck Handmade - Ultra-Modern E-Commerce Website

An ultra-modern, AI-powered e-commerce website for Duck Handmade, an Egyptian brand established in 1998 that crafts premium handmade leather shoes.

## Features

### 🎨 Design
- **Unique, Non-Template Design**: Custom-built from the ground up with a sleek, futuristic aesthetic
- **Leather & Metallic Color Palette**: Earthy leather tones (tan, brown, cognac) blended with metallic accents (gold, bronze, copper)
- **Dark/Light Mode**: Full theme support with smooth transitions
- **Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Micro-interactions**: Motion-powered animations throughout

### 🤖 AI-Powered Features
- **AI Shopping Assistant**: Persistent chat widget that provides personalized recommendations and answers questions
- **AI Personalized Recommendations**: Smart product suggestions based on browsing behavior
- **AI Color Matching**: Intelligent color pairing suggestions in the custom designer
- **AI Review Analysis**: Sentiment analysis and summary of customer reviews
- **AI Styling Tips**: Personalized fashion advice in the user dashboard

### 🛍️ Key Pages

#### Home Page
- Dynamic hero section with video/animation placeholder
- Bold tagline and CTAs
- AI-powered product recommendations
- Live product carousel
- Loyalty program progress bar
- Interactive feature grid

#### Custom Shoe Designer
- Interactive tool for designing custom shoes
- Choose leather type, colors, sole style
- Add custom engravings
- Real-time 3D preview with rotation
- AI color-matching assistant
- Live price calculator

#### Product Discovery
- Advanced search with voice and image upload options
- Filter panel (size, color, style, price)
- Product cards with hover animations
- Quick add to cart and wishlist
- AR try-on button on each product
- AI recommendations badge

#### Product Detail Page
- Full-width 3D viewer with navigation
- Detailed descriptions and specifications
- Sustainability badges
- User reviews with AI sentiment analysis
- "AI recommends" related products section
- Size selection and quantity picker

#### About & Story
- Interactive timeline of company history (1998-2026)
- Heritage and mission statements
- Community impact statistics
- Sustainability initiatives
- Values showcase

#### Contact & Support
- Real location in Port Said, Egypt with interactive map placeholder
- Contact form with smart autofill
- FAQ section
- Multiple contact methods (phone, email, address)
- Business hours display

#### User Dashboard
- Order tracking with timeline visualization
- Loyalty points progress
- AI-powered styling tips
- Rewards and perks display
- Order history

#### Blog/Journal
- Multimedia content with categories
- AI-generated article summaries
- Featured articles
- Newsletter subscription
- Filter by category

### 🛒 E-Commerce Features
- Shopping cart with context management
- Product wishlist
- Size and color selection
- Quantity management
- Multi-currency support (USD, EUR, EGP)
- Multi-language toggle (EN, AR)

### 📱 Additional Features
- Persistent navigation with sticky header
- Mobile-friendly menu
- Theme toggle (light/dark)
- User account integration
- Social media gallery placeholder
- Custom scrollbar styling
- Smooth scroll behavior

## Technology Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Motion (Framer Motion)** - Animations
- **Lucide React** - Icons
- **Context API** - State management

## Color Scheme

### Light Mode
- Background: Stone-50 (#fafaf9)
- Text: Stone-900 (#1c1917)
- Accent: Amber-600 to Amber-700

### Dark Mode
- Background: Stone-950 (#0c0a09)
- Text: Stone-50 (#fafaf9)
- Accent: Amber-500 to Amber-700

### Leather & Metallic Tones
- Leather Tan: #d4a574
- Leather Brown: #8b4513
- Leather Cognac: #a0522d
- Metallic Gold: #d4af37
- Metallic Bronze: #cd7f32
- Metallic Copper: #b87333

## Components Structure

```
/components
├── AIAssistant.tsx          # Persistent AI chat widget
├── AboutStory.tsx           # Company history & timeline
├── Blog.tsx                 # Journal/blog section
├── CartContext.tsx          # Shopping cart state
├── Contact.tsx              # Contact form & info
├── CustomDesigner.tsx       # 3D shoe designer
├── Home.tsx                 # Landing page
├── Navigation.tsx           # Header & menu
├── ProductDetail.tsx        # Single product view
├── ProductDiscovery.tsx     # Product listing & filters
├── ThemeContext.tsx         # Dark/light mode
└── UserDashboard.tsx        # User account dashboard
```

## Setup & Development

The application is built for Figma Make and runs automatically in the platform environment.

## Company Information

**Duck Handmade**
- Established: 1998
- Location: Industrial zone – South El Raswa – Port block 213/214, Port Said, Egypt
- Specialty: Premium handmade leather shoes
- Artisans: 150+ skilled craftsmen
- Mission: Preserve traditional Egyptian leather craftsmanship while embracing modern innovation

## Design Philosophy

This website combines traditional craftsmanship with cutting-edge technology, reflecting Duck Handmade's 25+ year heritage while providing a modern, AI-enhanced shopping experience. The design emphasizes:

1. **Heritage**: Warm leather tones and artisan imagery
2. **Innovation**: AI features and futuristic UI elements
3. **Sustainability**: Carbon-neutral messaging and eco-friendly badges
4. **Quality**: Premium feel with attention to detail
5. **Personalization**: AI-driven recommendations and customization

## Notes

- All AI features are front-end implementations with mock responses
- Images are sourced from Unsplash
- Map integration is a placeholder for future implementation
- 3D shoe viewer is represented with SVG graphics
- All data is mocked for demonstration purposes
