import ProductCard from '../common/ProductCard';

const trendingProducts = [
  { id: 41, name: 'Samsung QLED 4K TV', price: 1199, oldPrice: 1499, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/4/1/41_2.jpg', rating: 4.8, reviews: 234, discount: 20 },
  { id: 42, name: 'Logitech MX Master 3', price: 99, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/4/2/42_2.jpg', rating: 4.9, reviews: 567 },
  { id: 43, name: 'Kindle Paperwhite', price: 139, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/4/3/43_2.jpg', rating: 4.7, reviews: 890 },
  { id: 44, name: 'Razer Gaming Keyboard', price: 149, oldPrice: 199, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/4/4/44_2.jpg', rating: 4.6, reviews: 345, discount: 25 },
  { id: 45, name: 'Anker Power Bank', price: 49, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/4/5/45_2.jpg', rating: 4.8, reviews: 678 },
  { id: 46, name: 'JBL Flip 6 Speaker', price: 129, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/4/6/46_2.jpg', rating: 4.7, reviews: 456 },
  { id: 47, name: 'Corsair Gaming Headset', price: 79, oldPrice: 99, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/4/7/47_2.jpg', rating: 4.5, reviews: 234, discount: 20 },
  { id: 48, name: 'Webcam 1080p HD', price: 69, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/4/8/48_2.jpg', rating: 4.4, reviews: 123 },
  { id: 49, name: 'USB-C Hub 7-in-1', price: 39, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/4/9/49_2.jpg', rating: 4.6, reviews: 345 },
  { id: 50, name: 'Ring Video Doorbell', price: 99, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/5/0/50_2.jpg', rating: 4.7, reviews: 567 },
];

export default function TrendingProducts() {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Trending Products</h2>
          <button className="text-primary hover:text-primary-dark font-medium flex items-center space-x-1">
            <span>View All</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
