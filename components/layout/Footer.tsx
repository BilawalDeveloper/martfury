import Link from 'next/link';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      {/* Newsletter Section */}
      <div className="bg-white border-t border-b border-gray-200">
        <div className="container-custom py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-primary text-white p-3 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Sign up to Newsletter</h3>
                <p className="text-gray-600">...and receive $20 coupon for first shopping</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-3 border border-gray-300 rounded-l-full w-96 focus:outline-none focus:border-primary"
              />
              <button className="bg-primary text-white px-8 py-3 rounded-r-full hover:bg-primary-dark transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About */}
          <div className="lg:col-span-2">
            <img 
              src="https://martfury.magebig.com/media/logo/stores/1/logo.png" 
              alt="Martfury" 
              className="h-10 mb-4"
            />
            <p className="text-gray-600 mb-4">
              Got Question? Call us 24/7
            </p>
            <div className="text-3xl font-bold text-primary mb-4">
              (+800) 1234 5678 90
            </div>
            <p className="text-gray-600 mb-2">
              502 New Design Str, Melbourne, San Francisco, CA 94110, United States
            </p>
            <p className="text-gray-600">
              <a href="mailto:contact@martfury.com" className="hover:text-primary">contact@martfury.com</a>
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <FiYoutube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Find it Fast */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Find It Fast</h3>
            <ul className="space-y-2">
              <li><Link href="/laptops" className="text-gray-600 hover:text-primary transition-colors">Laptops & Computers</Link></li>
              <li><Link href="/cameras" className="text-gray-600 hover:text-primary transition-colors">Cameras & Photography</Link></li>
              <li><Link href="/smartphones" className="text-gray-600 hover:text-primary transition-colors">Smart Phones & Tablets</Link></li>
              <li><Link href="/games" className="text-gray-600 hover:text-primary transition-colors">Video Games & Consoles</Link></li>
              <li><Link href="/tv" className="text-gray-600 hover:text-primary transition-colors">TV & Audio</Link></li>
              <li><Link href="/gadgets" className="text-gray-600 hover:text-primary transition-colors">Gadgets</Link></li>
              <li><Link href="/accessories" className="text-gray-600 hover:text-primary transition-colors">Accessories & Parts</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li><Link href="/account" className="text-gray-600 hover:text-primary transition-colors">My Account</Link></li>
              <li><Link href="/track-order" className="text-gray-600 hover:text-primary transition-colors">Track Your Order</Link></li>
              <li><Link href="/wishlist" className="text-gray-600 hover:text-primary transition-colors">Wishlist</Link></li>
              <li><Link href="/customer-service" className="text-gray-600 hover:text-primary transition-colors">Customer Service</Link></li>
              <li><Link href="/returns" className="text-gray-600 hover:text-primary transition-colors">Returns / Exchange</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link href="/support" className="text-gray-600 hover:text-primary transition-colors">Product Support</Link></li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Download App</h3>
            <div className="space-y-3">
              <a href="#" className="block">
                <img 
                  src="https://martfury.magebig.com/media/general/app-store.jpg" 
                  alt="App Store" 
                  className="h-12"
                />
              </a>
              <a href="#" className="block">
                <img 
                  src="https://martfury.magebig.com/media/general/google-play.jpg" 
                  alt="Google Play" 
                  className="h-12"
                />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">We Accept</h4>
              <img 
                src="https://martfury.magebig.com/media/general/payment-methods.png" 
                alt="Payment Methods" 
                className="h-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-dark text-white">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Martfury. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link>
              <Link href="/careers" className="text-sm text-gray-400 hover:text-white transition-colors">Careers</Link>
              <Link href="/delivery" className="text-sm text-gray-400 hover:text-white transition-colors">Delivery Information</Link>
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
