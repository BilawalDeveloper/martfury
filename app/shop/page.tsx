import ProductGrid from '@/components/product/ProductGrid';
import ProductFilters from '@/components/product/ProductFilters';

export default function ShopPage() {
  return (
    <div className="bg-gray-50 py-8">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm mb-6">
          <a href="/" className="text-gray-500 hover:text-primary">Home</a>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900">Shop</span>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Products</h1>
          <p className="text-gray-600">We have 1,234+ products for you</p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar Filters */}
          <div className="col-span-3">
            <ProductFilters />
          </div>

          {/* Product Grid */}
          <div className="col-span-9">
            <ProductGrid />
          </div>
        </div>
      </div>
    </div>
  );
}
