import Link from 'next/link';
import { FiHeart, FiShoppingCart, FiEye } from 'react-icons/fi';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  discount?: number;
}

export default function ProductCard({
  id,
  name,
  price,
  oldPrice,
  image,
  rating,
  reviews,
  badge,
  discount
}: ProductCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all group">
      <div className="relative overflow-hidden">
        {badge && (
          <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
            {badge}
          </span>
        )}
        {discount && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">
            -{discount}%
          </span>
        )}
        <Link href={`/product/${id}`}>
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-contain p-4 group-hover:scale-110 transition-transform duration-300"
          />
        </Link>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-2">
          <button className="bg-white p-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors">
            <FiHeart className="w-5 h-5" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors">
            <FiShoppingCart className="w-5 h-5" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors">
            <FiEye className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <Link href={`/product/${id}`}>
          <h3 className="text-gray-900 font-medium mb-2 hover:text-primary transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">({reviews})</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">${price.toFixed(2)}</span>
          {oldPrice && (
            <span className="text-sm text-gray-400 line-through">${oldPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
