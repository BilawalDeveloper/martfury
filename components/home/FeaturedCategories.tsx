import Link from 'next/link';

const categories = [
  {
    name: 'Electronics',
    itemCount: 456,
    icon: 'https://martfury.magebig.com/media/general/laptop.png',
    link: '/electronics',
    color: 'bg-blue-50 hover:bg-blue-100'
  },
  {
    name: 'Fashion',
    itemCount: 789,
    icon: 'https://martfury.magebig.com/media/general/fashion.png',
    link: '/fashion',
    color: 'bg-pink-50 hover:bg-pink-100'
  },
  {
    name: 'Home & Garden',
    itemCount: 234,
    icon: 'https://martfury.magebig.com/media/general/home.png',
    link: '/home-garden',
    color: 'bg-green-50 hover:bg-green-100'
  },
  {
    name: 'Health & Beauty',
    itemCount: 567,
    icon: 'https://martfury.magebig.com/media/general/beauty.png',
    link: '/health',
    color: 'bg-purple-50 hover:bg-purple-100'
  },
  {
    name: 'Sports',
    itemCount: 345,
    icon: 'https://martfury.magebig.com/media/general/sport.png',
    link: '/sports',
    color: 'bg-orange-50 hover:bg-orange-100'
  },
  {
    name: 'Toys & Games',
    itemCount: 432,
    icon: 'https://martfury.magebig.com/media/general/toys.png',
    link: '/toys',
    color: 'bg-yellow-50 hover:bg-yellow-100'
  },
  {
    name: 'Automotive',
    itemCount: 123,
    icon: 'https://martfury.magebig.com/media/general/car.png',
    link: '/automotive',
    color: 'bg-red-50 hover:bg-red-100'
  },
  {
    name: 'Books',
    itemCount: 678,
    icon: 'https://martfury.magebig.com/media/general/book.png',
    link: '/books',
    color: 'bg-indigo-50 hover:bg-indigo-100'
  }
];

export default function FeaturedCategories() {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Categories</h2>
          <Link href="/categories" className="text-primary hover:text-primary-dark font-medium flex items-center space-x-1">
            <span>View All</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.link}
              className={`${category.color} p-6 rounded-lg text-center transition-all hover:shadow-md group`}
            >
              <div className="mb-4 flex justify-center">
                <img 
                  src={category.icon} 
                  alt={category.name}
                  className="w-16 h-16 object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.itemCount} items</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
