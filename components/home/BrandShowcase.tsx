const brands = [
  { name: 'Sony', logo: 'https://martfury.magebig.com/media/brands/sony.png' },
  { name: 'Samsung', logo: 'https://martfury.magebig.com/media/brands/samsung.png' },
  { name: 'LG', logo: 'https://martfury.magebig.com/media/brands/lg.png' },
  { name: 'Apple', logo: 'https://martfury.magebig.com/media/brands/apple.png' },
  { name: 'Canon', logo: 'https://martfury.magebig.com/media/brands/canon.png' },
  { name: 'Nikon', logo: 'https://martfury.magebig.com/media/brands/nikon.png' },
  { name: 'Dell', logo: 'https://martfury.magebig.com/media/brands/dell.png' },
  { name: 'HP', logo: 'https://martfury.magebig.com/media/brands/hp.png' },
];

export default function BrandShowcase() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Shop by Brands</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-all cursor-pointer group"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 object-contain grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
