
import DealsOfTheDay from './components/DealoftheDay'
import FashionCategoryLayout from './components/FashionCategoryLayout'
import HeroSection from './components/heroSection'
import TopSellerProducts from './components/TopSellerProducts'
import PromotionalBanner from './components/promotionalBanner'
export default function Home() {
  return (
    <>
    <HeroSection />
      <FashionCategoryLayout />
      <TopSellerProducts />
      <DealsOfTheDay/>
      <PromotionalBanner/>
    </>
  )
}
