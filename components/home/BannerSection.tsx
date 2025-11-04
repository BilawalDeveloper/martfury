import Link from 'next/link';

export default function BannerSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/electronics" className="relative overflow-hidden rounded-lg group">
            <img
              src="https://martfury.magebig.com/media/promotion/1.jpg"
              alt="Electronics"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Electronics</h3>
                <p className="mb-4">Up to 50% Off</p>
                <span className="text-primary font-semibold">Shop Now →</span>
              </div>
            </div>
          </Link>

          <Link href="/fashion" className="relative overflow-hidden rounded-lg group">
            <img
              src="https://martfury.magebig.com/media/promotion/2.jpg"
              alt="Fashion"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Fashion Trends</h3>
                <p className="mb-4">New Collection</p>
                <span className="text-primary font-semibold">Shop Now →</span>
              </div>
            </div>
          </Link>

          <Link href="/home" className="relative overflow-hidden rounded-lg group">
            <img
              src="https://martfury.magebig.com/media/promotion/3.jpg"
              alt="Home & Garden"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Home & Garden</h3>
                <p className="mb-4">Best Deals</p>
                <span className="text-primary font-semibold">Shop Now →</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
