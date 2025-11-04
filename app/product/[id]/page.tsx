'use client';

import { useState } from 'react';
import { FiHeart, FiShare2, FiMinus, FiPlus } from 'react-icons/fi';
import ProductCard from '@/components/common/ProductCard';

const productImages = [
  'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/1/11_2.jpg',
  'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/2/12_2.jpg',
  'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/3/13_2.jpg',
  'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/4/14_2.jpg',
];

const relatedProducts = [
  { id: 11, name: 'Apple MacBook Pro 16" M2', price: 2499, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/1/11_2.jpg', rating: 5, reviews: 89 },
  { id: 12, name: 'Samsung Galaxy Watch 5', price: 299, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/2/12_2.jpg', rating: 4.5, reviews: 56 },
  { id: 13, name: 'Sony PlayStation 5', price: 499, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/3/13_2.jpg', rating: 4.8, reviews: 234 },
  { id: 14, name: 'LG OLED TV 55"', price: 1299, image: 'https://martfury.magebig.com/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/1/4/14_2.jpg', rating: 4.7, reviews: 145 },
];

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="bg-gray-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm mb-6">
          <a href="/" className="text-gray-500 hover:text-primary">Home</a>
          <span className="text-gray-400">/</span>
          <a href="/shop" className="text-gray-500 hover:text-primary">Shop</a>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900">Samsung Galaxy S23 Ultra 5G</span>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-12 gap-8 mb-12">
          {/* Product Images */}
          <div className="col-span-5">
            <div className="bg-white rounded-lg p-4 mb-4">
              <img
                src={productImages[selectedImage]}
                alt="Product"
                className="w-full h-96 object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-white rounded-lg p-2 border-2 transition-colors ${
                    selectedImage === index ? 'border-primary' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-20 object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="col-span-7">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">Hot Deal</span>
                  <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full ml-2">-25%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
                    <FiHeart className="w-5 h-5" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
                    <FiShare2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Samsung Galaxy S23 Ultra 5G Smartphone
              </h1>

              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">(234 reviews)</span>
                <span className="ml-4 text-sm text-gray-600">SKU: <strong>SMG-S23U-256</strong></span>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline space-x-3">
                  <span className="text-4xl font-bold text-primary">$899.99</span>
                  <span className="text-2xl text-gray-400 line-through">$1,199.99</span>
                  <span className="bg-red-100 text-red-600 text-sm font-semibold px-3 py-1 rounded">Save $300</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">Tax included. Shipping calculated at checkout.</p>
              </div>

              <div className="border-t border-b border-gray-200 py-4 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  The Samsung Galaxy S23 Ultra combines power and innovation with its stunning 6.8-inch Dynamic AMOLED display, 
                  200MP camera system, and the fastest Snapdragon processor. Experience unmatched performance and photography excellence.
                </p>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <label className="text-sm font-semibold text-gray-900 mb-2 block">Color:</label>
                <div className="flex items-center space-x-3">
                  <button className="w-10 h-10 rounded-full border-2 border-primary bg-black"></button>
                  <button className="w-10 h-10 rounded-full border-2 border-gray-300 bg-white"></button>
                  <button className="w-10 h-10 rounded-full border-2 border-gray-300 bg-green-600"></button>
                  <button className="w-10 h-10 rounded-full border-2 border-gray-300 bg-purple-600"></button>
                </div>
              </div>

              {/* Storage Selection */}
              <div className="mb-6">
                <label className="text-sm font-semibold text-gray-900 mb-2 block">Storage:</label>
                <div className="flex items-center space-x-3">
                  <button className="px-6 py-2 border-2 border-gray-300 rounded hover:border-primary">128GB</button>
                  <button className="px-6 py-2 border-2 border-primary bg-primary text-white rounded">256GB</button>
                  <button className="px-6 py-2 border-2 border-gray-300 rounded hover:border-primary">512GB</button>
                  <button className="px-6 py-2 border-2 border-gray-300 rounded hover:border-primary">1TB</button>
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-100"
                  >
                    <FiMinus className="w-5 h-5" />
                  </button>
                  <span className="px-6 py-3 border-x border-gray-300 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-100"
                  >
                    <FiPlus className="w-5 h-5" />
                  </button>
                </div>
                <button className="flex-1 btn btn-primary py-4">Add to Cart</button>
                <button className="btn btn-secondary py-4">Buy Now</button>
              </div>

              {/* Product Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Free Shipping</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-gray-700">1 Year Warranty</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span className="text-sm text-gray-700">30 Days Return</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-sm text-gray-700">Secure Payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="bg-white rounded-lg p-6 mb-12">
          <div className="border-b border-gray-200 mb-6">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`pb-4 border-b-2 font-semibold transition-colors ${
                  activeTab === 'description'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-600 hover:text-primary'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('specifications')}
                className={`pb-4 border-b-2 font-semibold transition-colors ${
                  activeTab === 'specifications'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-600 hover:text-primary'
                }`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`pb-4 border-b-2 font-semibold transition-colors ${
                  activeTab === 'reviews'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-600 hover:text-primary'
                }`}
              >
                Reviews (234)
              </button>
            </div>
          </div>

          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">Product Description</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Samsung Galaxy S23 Ultra represents the pinnacle of smartphone technology. With its revolutionary 
                200MP camera system, you can capture incredibly detailed photos and videos. The 6.8-inch Dynamic AMOLED 
                2X display offers stunning visuals with a 120Hz refresh rate for smooth scrolling and gaming.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Powered by the latest Snapdragon 8 Gen 2 processor, this device delivers lightning-fast performance for 
                all your tasks. The integrated S Pen provides precision control for note-taking, drawing, and navigation.
              </p>
              <h4 className="text-lg font-semibold mb-3 mt-6">Key Features:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>200MP main camera with advanced AI capabilities</li>
                <li>6.8&quot; Dynamic AMOLED 2X display with 120Hz refresh rate</li>
                <li>Snapdragon 8 Gen 2 processor for ultimate performance</li>
                <li>5000mAh battery with fast charging support</li>
                <li>Built-in S Pen for enhanced productivity</li>
                <li>5G connectivity for blazing-fast internet speeds</li>
              </ul>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Display</span>
                    <span className="font-medium">6.8&quot; Dynamic AMOLED 2X</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Processor</span>
                    <span className="font-medium">Snapdragon 8 Gen 2</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">RAM</span>
                    <span className="font-medium">12GB</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Storage</span>
                    <span className="font-medium">256GB</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Main Camera</span>
                    <span className="font-medium">200MP</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Battery</span>
                    <span className="font-medium">5000mAh</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">OS</span>
                    <span className="font-medium">Android 13</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Weight</span>
                    <span className="font-medium">234g</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <h3 className="text-xl font-semibold mb-6">Customer Reviews</h3>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b border-gray-200 pb-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center mb-1">
                          <span className="font-semibold text-gray-900 mr-2">John Doe</span>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">Verified Purchase • 2 days ago</p>
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2">Amazing phone!</h4>
                    <p className="text-gray-700">
                      This phone exceeded all my expectations. The camera quality is outstanding and the performance is incredibly smooth. 
                      Highly recommend for anyone looking for a premium smartphone experience.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
          <div className="grid grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
