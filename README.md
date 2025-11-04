# Martfury - Multi-Purpose E-Commerce Next.js Template

A pixel-perfect clone of the Martfury e-commerce template built with Next.js 14, TypeScript, and TailwindCSS. This is a modern, fully-featured e-commerce website with a component-based architecture.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14 (App Router), TypeScript, and TailwindCSS
- **Responsive Design**: Fully responsive across all devices (in progress)
- **Component-Based**: Modular, reusable components for easy maintenance
- **Performance Optimized**: Fast loading times with Next.js optimizations
- **E-Commerce Ready**: Complete product catalog with filters, sorting, and pagination
- **Rich UI Components**: Hero sliders, product grids, filters, tabs, and more
- **Type Safe**: Full TypeScript support for better developer experience

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/BilawalDeveloper/martfury.git
cd martfury

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser

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

### Pages
- **Homepage** (`/`): Full-featured landing page with all sections
- **Shop** (`/shop`): Product listing with advanced filters and sorting
- **Product Detail** (`/product/[id]`): Detailed product page with gallery and tabs
- **Cart** (Coming soon): Shopping cart functionality
- **Checkout** (Coming soon): Checkout process
- **Account** (Coming soon): User account pages

### Layout Components
- **Header**: Multi-level navigation with search, cart, wishlist, and user menu
- **Footer**: Newsletter signup, links, contact information, and social media

### Home Page Sections
- **HeroSlider**: Full-width carousel with category sidebar and auto-play
- **FeaturedCategories**: Category grid with icons and product counts
- **DealsOfTheDay**: Products with live countdown timer
- **BannerSection**: Promotional banners with hover effects
- **ProductTabs**: Tabbed product listings (New Arrivals, Best Sellers, Featured)
- **TrendingProducts**: Curated product grid
- **BrandShowcase**: Brand logo grid with hover effects

### Product Components
- **ProductCard**: Reusable product card with ratings, prices, and quick actions
- **ProductFilters**: Advanced filtering (category, price, brand, rating)
- **ProductGrid**: Grid/list view with sorting and pagination

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

### Implemented
- **Homepage** (`/`): Main landing page with all sections
  - Hero slider with category sidebar
  - Featured categories (8 categories)
  - Deals of the day with countdown
  - Product tabs (New Arrivals, Best Sellers, Featured)
  - Promotional banners
  - Trending products
  - Brand showcase
  - Newsletter subscription

- **Shop** (`/shop`): Product listing page
  - Category filter sidebar
  - Price range filters
  - Brand filters
  - Rating filters
  - Grid/List view toggle
  - Sort options (Featured, Newest, Price, Rating)
  - Pagination
  - 12 products per page

- **Product Detail** (`/product/[id]`): Individual product page
  - Image gallery with thumbnails
  - Product information and pricing
  - Color and storage selection
  - Quantity selector
  - Add to cart / Buy now
  - Product tabs (Description, Specifications, Reviews)
  - Related products
  - Feature badges (Free Shipping, Warranty, etc.)

### Coming Soon
- Cart: Shopping cart with quantity management
- Checkout: Multi-step checkout process
- Account: User login, registration, and profile
- Wishlist: Save products for later
- About: Company information
- Contact: Contact form and information
- Blog: News and articles

## 🚧 Development Roadmap

### Completed ✅
- [x] Project setup with Next.js 14 and TailwindCSS
- [x] Header component with navigation and search
- [x] Footer component with newsletter
- [x] Homepage hero slider with auto-play
- [x] Featured categories section (8 categories)
- [x] Deals of the Day with countdown timer
- [x] Product cards with hover effects
- [x] Product tabs (New Arrivals, Best Sellers, Featured)
- [x] Trending products section
- [x] Brand showcase (8 brands)
- [x] Shop/Product listing page with filters
- [x] Advanced product filters (category, price, brand, rating)
- [x] Product grid with sorting and pagination
- [x] Product detail page with image gallery
- [x] Product tabs (Description, Specifications, Reviews)
- [x] Related products section
- [x] Color and storage variants selection

### In Progress 🔄
- [ ] Mobile responsive design
- [ ] Shopping cart functionality
- [ ] Wishlist functionality

### Planned 📋
- [ ] Checkout process (multi-step)
- [ ] User authentication (login/register)
- [ ] User account dashboard
- [ ] Order tracking
- [ ] Product reviews and ratings (user-generated)
- [ ] Search functionality
- [ ] About page
- [ ] Contact page with form
- [ ] Blog/News section
- [ ] Admin panel
- [ ] API integration for real data
- [ ] Payment gateway integration
- [ ] Product image zoom
- [ ] Quick view modal
- [ ] Compare products feature
- [ ] Advanced animations and transitions

## 📄 License

This is a template project for educational purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For any questions or support, please open an issue on GitHub.
