'use client';

import { useState } from 'react';
import ProductCard from '../common/ProductCard';

const products = {
  newArrivals: [
    { id: 11, name: 'Apple MacBook Pro 16" M2', price: 2499, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/1/11_2.jpg', rating: 5, reviews: 89, badge: 'New' },
    { id: 12, name: 'Samsung Galaxy Watch 5', price: 299, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/2/12_2.jpg', rating: 4.5, reviews: 56, badge: 'New' },
    { id: 13, name: 'Sony PlayStation 5', price: 499, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/3/13_2.jpg', rating: 4.8, reviews: 234 },
    { id: 14, name: 'LG OLED TV 55"', price: 1299, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/4/14_2.jpg', rating: 4.7, reviews: 145 },
    { id: 15, name: 'Dyson V15 Vacuum', price: 649, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/5/15_2.jpg', rating: 4.9, reviews: 78 },
  ],
  bestSellers: [
    { id: 21, name: 'AirPods Pro 2nd Gen', price: 249, oldPrice: 299, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/2/1/21_2.jpg', rating: 4.9, reviews: 567, discount: 17 },
    { id: 22, name: 'iPad Air 5th Gen', price: 599, oldPrice: 699, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/2/2/22_2.jpg', rating: 4.8, reviews: 432, discount: 14 },
    { id: 23, name: 'Nintendo Switch OLED', price: 349, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/2/3/23_2.jpg', rating: 4.7, reviews: 789 },
    { id: 24, name: 'GoPro Hero 11', price: 399, oldPrice: 499, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/2/4/24_2.jpg', rating: 4.6, reviews: 234, discount: 20 },
    { id: 25, name: 'Bose SoundLink', price: 129, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/2/5/25_2.jpg', rating: 4.5, reviews: 456 },
  ],
  featured: [
    { id: 31, name: 'Microsoft Surface Pro 9', price: 999, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/3/1/31_2.jpg', rating: 4.7, reviews: 123, badge: 'Featured' },
    { id: 32, name: 'Nikon Z6 II Camera', price: 1999, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/3/2/32_2.jpg', rating: 4.8, reviews: 89 },
    { id: 33, name: 'HP Envy Printer', price: 149, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/3/3/33_2.jpg', rating: 4.3, reviews: 234 },
    { id: 34, name: 'Fitbit Charge 5', price: 179, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/3/4/34_2.jpg', rating: 4.5, reviews: 345 },
    { id: 35, name: 'Amazon Echo Dot', price: 49, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/3/5/35_2.jpg', rating: 4.6, reviews: 678 },
  ]
};

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState<'newArrivals' | 'bestSellers' | 'featured'>('newArrivals');

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setActiveTab('newArrivals')}
              className={`text-lg font-semibold pb-2 border-b-2 transition-colors ${
                activeTab === 'newArrivals'
                  ? 'text-primary border-primary'
                  : 'text-gray-600 border-transparent hover:text-primary'
              }`}
            >
              New Arrivals
            </button>
            <button
              onClick={() => setActiveTab('bestSellers')}
              className={`text-lg font-semibold pb-2 border-b-2 transition-colors ${
                activeTab === 'bestSellers'
                  ? 'text-primary border-primary'
                  : 'text-gray-600 border-transparent hover:text-primary'
              }`}
            >
              Best Sellers
            </button>
            <button
              onClick={() => setActiveTab('featured')}
              className={`text-lg font-semibold pb-2 border-b-2 transition-colors ${
                activeTab === 'featured'
                  ? 'text-primary border-primary'
                  : 'text-gray-600 border-transparent hover:text-primary'
              }`}
            >
              Featured
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {products[activeTab].map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
