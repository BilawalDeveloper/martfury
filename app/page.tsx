import HeroSlider from '@/components/home/HeroSlider';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import DealsOfTheDay from '@/components/home/DealsOfTheDay';
import ProductTabs from '@/components/home/ProductTabs';
import BannerSection from '@/components/home/BannerSection';
import TrendingProducts from '@/components/home/TrendingProducts';
import BrandShowcase from '@/components/home/BrandShowcase';

export default function Home() {
  return (
    <div className="bg-gray-50">
      <HeroSlider />
      <FeaturedCategories />
      <DealsOfTheDay />
      <BannerSection />
      <ProductTabs />
      <TrendingProducts />
      <BrandShowcase />
    </div>
  );
}
