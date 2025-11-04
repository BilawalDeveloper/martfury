'use client';

import { useState } from 'react';
import ProductCard from '@/components/common/ProductCard';

const allProducts = [
  { id: 1, name: 'Samsung Galaxy S23 Ultra 5G', price: 899.99, oldPrice: 1199.99, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/1/11_2.jpg', rating: 4.5, reviews: 234, discount: 25 },
  { id: 2, name: 'Apple iPhone 14 Pro Max 256GB', price: 1099.99, oldPrice: 1299.99, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/2/12_2.jpg', rating: 5, reviews: 456, discount: 15 },
  { id: 3, name: 'Sony WH-1000XM5 Wireless Headphones', price: 349.99, oldPrice: 399.99, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/3/13_2.jpg', rating: 4.8, reviews: 189, discount: 12 },
  { id: 4, name: 'Dell XPS 15 Laptop Intel Core i7', price: 1499.99, oldPrice: 1899.99, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/4/14_2.jpg', rating: 4.7, reviews: 321, discount: 21 },
  { id: 5, name: 'Canon EOS R6 Mirrorless Camera', price: 2299.99, oldPrice: 2499.99, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/5/15_2.jpg', rating: 4.9, reviews: 167, discount: 8 },
  { id: 11, name: 'Apple MacBook Pro 16" M2', price: 2499, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/1/11_2.jpg', rating: 5, reviews: 89, badge: 'New' },
  { id: 12, name: 'Samsung Galaxy Watch 5', price: 299, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/2/12_2.jpg', rating: 4.5, reviews: 56, badge: 'New' },
  { id: 13, name: 'Sony PlayStation 5', price: 499, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/3/13_2.jpg', rating: 4.8, reviews: 234 },
  { id: 14, name: 'LG OLED TV 55"', price: 1299, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/4/14_2.jpg', rating: 4.7, reviews: 145 },
  { id: 15, name: 'Dyson V15 Vacuum', price: 649, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/5/15_2.jpg', rating: 4.9, reviews: 78 },
  { id: 21, name: 'AirPods Pro 2nd Gen', price: 249, oldPrice: 299, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/2/1/21_2.jpg', rating: 4.9, reviews: 567, discount: 17 },
  { id: 22, name: 'iPad Air 5th Gen', price: 599, oldPrice: 699, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/2/2/22_2.jpg', rating: 4.8, reviews: 432, discount: 14 },
];

export default function ProductGrid() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div>
      {/* Toolbar */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">
            Showing <strong>1-12</strong> of <strong>{allProducts.length}</strong> products
          </span>
        </div>

        <div className="flex items-center space-x-4">
          {/* View Mode */}
          <div className="flex items-center space-x-2 border border-gray-300 rounded p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'grid' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'list' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className={`grid ${viewMode === 'grid' ? 'grid-cols-3' : 'grid-cols-1'} gap-6 mb-8`}>
        {allProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center space-x-2">
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50" disabled>
          Previous
        </button>
        <button className="px-4 py-2 bg-primary text-white rounded">1</button>
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">2</button>
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">3</button>
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
          Next
        </button>
      </div>
    </div>
  );
}
