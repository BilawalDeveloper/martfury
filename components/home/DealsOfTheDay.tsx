'use client';

import { useState, useEffect } from 'react';
import ProductCard from '../common/ProductCard';

const deals = [
  {
    id: 1,
    name: 'Samsung Galaxy S23 Ultra 5G Smartphone',
    price: 899.99,
    oldPrice: 1199.99,
    image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/1/11_2.jpg',
    rating: 4.5,
    reviews: 234,
    badge: 'Hot',
    discount: 25
  },
  {
    id: 2,
    name: 'Apple iPhone 14 Pro Max 256GB',
    price: 1099.99,
    oldPrice: 1299.99,
    image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/2/12_2.jpg',
    rating: 5,
    reviews: 456,
    discount: 15
  },
  {
    id: 3,
    name: 'Sony WH-1000XM5 Wireless Headphones',
    price: 349.99,
    oldPrice: 399.99,
    image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/3/13_2.jpg',
    rating: 4.8,
    reviews: 189,
    badge: 'Sale',
    discount: 12
  },
  {
    id: 4,
    name: 'Dell XPS 15 Laptop Intel Core i7',
    price: 1499.99,
    oldPrice: 1899.99,
    image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/4/14_2.jpg',
    rating: 4.7,
    reviews: 321,
    discount: 21
  },
  {
    id: 5,
    name: 'Canon EOS R6 Mirrorless Camera',
    price: 2299.99,
    oldPrice: 2499.99,
    image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/5/15_2.jpg',
    rating: 4.9,
    reviews: 167,
    discount: 8
  }
];

export default function DealsOfTheDay() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);
    targetDate.setHours(23, 59, 59, 999);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Deals Of The Day</h2>
            <p className="text-gray-600">Limited quantities. Shop now before they&apos;re gone!</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="bg-white border-2 border-primary rounded-lg px-4 py-2 min-w-[70px]">
                <div className="text-2xl font-bold text-primary">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="text-xs text-gray-500 uppercase">Days</div>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-400">:</div>
            <div className="text-center">
              <div className="bg-white border-2 border-primary rounded-lg px-4 py-2 min-w-[70px]">
                <div className="text-2xl font-bold text-primary">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs text-gray-500 uppercase">Hours</div>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-400">:</div>
            <div className="text-center">
              <div className="bg-white border-2 border-primary rounded-lg px-4 py-2 min-w-[70px]">
                <div className="text-2xl font-bold text-primary">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs text-gray-500 uppercase">Mins</div>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-400">:</div>
            <div className="text-center">
              <div className="bg-white border-2 border-primary rounded-lg px-4 py-2 min-w-[70px]">
                <div className="text-2xl font-bold text-primary">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs text-gray-500 uppercase">Secs</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {deals.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
