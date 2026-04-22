import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MarqueeBar from "../components/MarqueeBar";
import ProductSlider from "../components/ProductSlider";
import Products from "../components/Products";
import Promo from "../components/Promo";
import Categories from "../components/Categories";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import ParallaxSection from "../components/ParallaxSection";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";
import CursorGlow from "../components/CursorGlow";
import Loader from "../components/Loader";
import ScrollProgress from "../components/ScrollProgress";
import FloatingCart from "../components/FloatingCart";
import NewsletterPopup from "../components/NewsletterPopup";
import PurchasePopup from "../components/PurchasePopup";
import SaleTimer from "../components/SaleTimer";
import SmartSearch from "../components/SmartSearch";
import RecentlyViewed from "../components/RecentlyViewed";
import PersonalizedBanner from "../components/PersonalizedBanner";
import VoiceSearch from "../components/VoiceSearch";
import SmartSort from "../components/SmartSort";
import AIRecommendations from "../components/AIRecommendations";
import AIChatbot from "../components/AIChatbot";
import AISearch from "../components/AISearch";
import SizeAdvisor from "../components/SizeAdvisor";

function Home() {
  return (
    <>
  <Loader />
  <ScrollProgress />
  <CursorGlow />
  <Navbar />
  <Hero />
  <PersonalizedBanner />
  <SaleTimer />
  <MarqueeBar />
  <SmartSearch />
  <VoiceSearch />
  <SmartSort />
  <ProductSlider />
  <Products />
  <AIRecommendations />
  <Promo />
  <ParallaxSection />
  <RecentlyViewed />
  <Categories />
  <Stats />
  <Testimonials />
  <Footer />
  <FloatingCart />
  <ThemeToggle />
  <NewsletterPopup />
  <PurchasePopup />
  <AIChatbot />
  <AISearch />
  <SizeAdvisor />
</>
  );
}

export default Home;