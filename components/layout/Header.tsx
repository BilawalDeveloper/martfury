'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiHeart, FiShoppingCart, FiUser, FiSearch, FiMenu, FiPhone, FiMail } from 'react-icons/fi';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6">
              <span className="text-gray-600">Welcome to Martfury Online Shopping Store!</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/track-order" className="text-gray-600 hover:text-primary">
                Track Your Order
              </Link>
              <div className="flex items-center space-x-2 text-gray-600">
                <FiPhone className="w-4 h-4" />
                <span>(+800) 1234 5678 90</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <FiMail className="w-4 h-4" />
                <span>martfury@example.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img 
                src="https://martfury.magebig.com/media/logo/stores/1/logo.png" 
                alt="Martfury" 
                className="h-10"
              />
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="I'm shopping for..."
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-full focus:outline-none focus:border-primary"
                />
                <button className="absolute right-0 top-0 h-full px-6 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors">
                  <FiSearch className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Header Icons */}
            <div className="flex items-center space-x-6">
              <Link href="/compare" className="flex items-center space-x-2 text-gray-700 hover:text-primary">
                <div className="relative">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
                </div>
                <div className="hidden lg:block">
                  <div className="text-xs text-gray-500">Compare</div>
                  <div className="text-sm font-medium">Products</div>
                </div>
              </Link>

              <Link href="/wishlist" className="flex items-center space-x-2 text-gray-700 hover:text-primary">
                <div className="relative">
                  <FiHeart className="w-6 h-6" />
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
                </div>
                <div className="hidden lg:block">
                  <div className="text-xs text-gray-500">Wishlist</div>
                  <div className="text-sm font-medium">Products</div>
                </div>
              </Link>

              <Link href="/cart" className="flex items-center space-x-2 text-gray-700 hover:text-primary">
                <div className="relative">
                  <FiShoppingCart className="w-6 h-6" />
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
                </div>
                <div className="hidden lg:block">
                  <div className="text-xs text-gray-500">Shopping</div>
                  <div className="text-sm font-medium">Cart</div>
                </div>
              </Link>

              <Link href="/account" className="flex items-center space-x-2 text-gray-700 hover:text-primary">
                <FiUser className="w-6 h-6" />
                <div className="hidden lg:block">
                  <div className="text-xs text-gray-500">Hello, Sign In</div>
                  <div className="text-sm font-medium">Account</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-dark text-white">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <nav className="flex items-center space-x-8 py-3">
              <button className="flex items-center space-x-2 bg-primary px-6 py-3 rounded hover:bg-primary-dark transition-colors">
                <FiMenu className="w-5 h-5" />
                <span className="font-medium">All Categories</span>
              </button>
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
              <Link href="/deals" className="hover:text-primary transition-colors">Hot Deals</Link>
              <Link href="/electronics" className="hover:text-primary transition-colors">Electronics</Link>
              <Link href="/fashion" className="hover:text-primary transition-colors">Fashion</Link>
              <Link href="/home-garden" className="hover:text-primary transition-colors">Home & Garden</Link>
              <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </nav>
            <div className="flex items-center space-x-2 text-sm">
              <span>Need help?</span>
              <span className="text-primary font-semibold">(+800) 1234 5678 90</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
