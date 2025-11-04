'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const slides = [
  {
    id: 1,
    title: "The Best Place To Find And Buy Amazing Products",
    subtitle: "We Are The Leading Ecommerce Template",
    buttonText: "Shop Now",
    buttonLink: "/shop",
    image: "https://martfury.magebig.com/media/slider/1-1.jpg",
    bgColor: "bg-gradient-to-r from-orange-100 to-orange-50"
  },
  {
    id: 2,
    title: "Top Collection For Electronics",
    subtitle: "Special Offer For This Month",
    buttonText: "Discover Now",
    buttonLink: "/electronics",
    image: "https://martfury.magebig.com/media/slider/1-2.jpg",
    bgColor: "bg-gradient-to-r from-blue-100 to-blue-50"
  },
  {
    id: 3,
    title: "Premium Sound Quality",
    subtitle: "Exclusive Headphones Collection",
    buttonText: "View Collection",
    buttonLink: "/audio",
    image: "https://martfury.magebig.com/media/slider/1-3.jpg",
    bgColor: "bg-gradient-to-r from-purple-100 to-purple-50"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative bg-white">
      <div className="container-custom py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Categories Sidebar */}
          <div className="col-span-3 bg-white border border-gray-200 rounded-lg p-4 h-fit">
            <h3 className="text-lg font-semibold mb-4">Top Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/electronics" className="flex items-center justify-between text-gray-700 hover:text-primary transition-colors">
                  <span>Electronics</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/fashion" className="flex items-center justify-between text-gray-700 hover:text-primary transition-colors">
                  <span>Fashion & Clothing</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/home-garden" className="flex items-center justify-between text-gray-700 hover:text-primary transition-colors">
                  <span>Home & Garden</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/sports" className="flex items-center justify-between text-gray-700 hover:text-primary transition-colors">
                  <span>Sports & Outdoors</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/toys" className="flex items-center justify-between text-gray-700 hover:text-primary transition-colors">
                  <span>Toys & Games</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/health" className="flex items-center justify-between text-gray-700 hover:text-primary transition-colors">
                  <span>Health & Beauty</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/books" className="flex items-center justify-between text-gray-700 hover:text-primary transition-colors">
                  <span>Books & Office</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/automotive" className="flex items-center justify-between text-gray-700 hover:text-primary transition-colors">
                  <span>Automotive</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/jewelry" className="flex items-center justify-between text-gray-700 hover:text-primary transition-colors">
                  <span>Jewelry & Watches</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="/all" className="flex items-center justify-between text-primary font-semibold hover:text-primary-dark transition-colors">
                  <span>View All Categories</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          {/* Slider */}
          <div className="col-span-9 relative overflow-hidden rounded-lg">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-500 ${
                  index === currentSlide ? 'opacity-100 relative' : 'opacity-0 absolute inset-0'
                }`}
              >
                <div className={`${slide.bgColor} rounded-lg overflow-hidden`}>
                  <div className="flex items-center">
                    <div className="w-1/2 p-12">
                      <p className="text-primary text-sm font-semibold mb-2 uppercase tracking-wide">
                        {slide.subtitle}
                      </p>
                      <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        {slide.title}
                      </h2>
                      <Link
                        href={slide.buttonLink}
                        className="btn btn-primary inline-flex items-center space-x-2"
                      >
                        <span>{slide.buttonText}</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                    <div className="w-1/2">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-96 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            >
              <FiChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            >
              <FiChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-primary w-8' : 'bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
