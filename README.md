# Martfury - Multi-Purpose E-Commerce Next.js Template

A pixel-perfect clone of the Martfury e-commerce template built with Next.js 14, TypeScript, and TailwindCSS.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14 (App Router), TypeScript, and TailwindCSS
- **Responsive Design**: Fully responsive across all devices
- **Component-Based**: Modular, reusable components for easy maintenance
- **Performance Optimized**: Fast loading times with Next.js optimizations
- **E-Commerce Ready**: Complete product catalog, cart, wishlist, and checkout flow

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🏗️ Project Structure

```
martfury/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Header & Footer
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Layout components (Header, Footer)
│   ├── home/              # Homepage sections
│   ├── common/            # Reusable components
│   └── product/           # Product-related components
├── public/                # Static assets
└── tailwind.config.ts     # TailwindCSS configuration
```

## 🎨 Key Components

### Layout Components
- **Header**: Multi-level navigation with search, cart, and user menu
- **Footer**: Newsletter signup, links, and contact information

### Home Page Sections
- **HeroSlider**: Full-width carousel with category sidebar
- **FeaturedCategories**: Category grid with icons
- **DealsOfTheDay**: Products with countdown timer
- **BannerSection**: Promotional banners
- **ProductTabs**: Tabbed product listings (New Arrivals, Best Sellers, Featured)
- **TrendingProducts**: Product grid
- **BrandShowcase**: Brand logo grid

## 🛠️ Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **TailwindCSS**: Utility-first CSS framework
- **React Icons**: Icon library
- **Swiper**: Touch-enabled slider

## 🎯 Configuration

### Colors
The project uses a custom color scheme defined in `tailwind.config.ts`:
- Primary: Orange (#FD8D27)
- Secondary: Green (#00B853)
- Dark: (#222222)

### Images
Images are loaded directly from the Martfury demo site. You can replace them with your own images.

## 📱 Pages

- **Homepage** (`/`): Main landing page with all sections
- **Shop**: Product listing with filters (Coming soon)
- **Product Detail**: Individual product page (Coming soon)
- **Cart**: Shopping cart (Coming soon)
- **Checkout**: Checkout process (Coming soon)
- **Account**: User account pages (Coming soon)

## 🚧 Development Roadmap

- [x] Project setup with Next.js 14 and TailwindCSS
- [x] Header component with navigation
- [x] Footer component
- [x] Homepage hero slider
- [x] Featured categories section
- [x] Deals of the Day with countdown
- [x] Product cards and grids
- [x] Product tabs (New Arrivals, Best Sellers, Featured)
- [x] Trending products section
- [x] Brand showcase
- [ ] Shop/Product listing page
- [ ] Product detail page
- [ ] Shopping cart functionality
- [ ] Wishlist functionality
- [ ] Checkout process
- [ ] User authentication
- [ ] Admin panel

## 📄 License

This is a template project for educational purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For any questions or support, please open an issue on GitHub.
