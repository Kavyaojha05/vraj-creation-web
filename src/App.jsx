import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiArrowUp } from "react-icons/fi";

import Header from "./components/Header";
import AboutPage from "./pages/About";
import HeroSlider from "./components/HeroSlider";
import ProductSection from "./components/ProductSection";
import CollectionShowcase from "./components/CollectionShowcase";
import ReviewSlider from "./components/ReviewSlider";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import GalleryPage from "./pages/GalleryPage";
import DiscoverPage from "./pages/DiscoverPage";
import CategoriesSection from "./components/CategoriesSection";
import HomeDecorPage from "./pages/HomeDecorPage";
import WallDecorPage from "./pages/WallDecorPage";
import TableDecorPage from "./pages/TableDecorPage";
import ResinArtPage from "./pages/ResinArtPage";
import EthnicFurnishingPage from "./pages/EthnicFurnishingPage";
import DeskAccessoriesPage from "./pages/DeskAccessoriesPage";


function HomePage() {
  return (
    <>
      <Header />
      <main className="w-full overflow-hidden">
        <HeroSlider />
        <CategoriesSection />
        <CollectionShowcase />
        <ReviewSlider />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 70,
    });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      id="top"
      className="min-h-screen w-full overflow-x-hidden bg-[#f7efe3] text-[#38271d] antialiased dark:bg-[#15100d] dark:text-[#f3e5d4]"
    >
      <Routes>
        {/* Main Landing Route */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Dedicated Gallery Page Route */}
        <Route path="/gallery" element={<GalleryPage />} />

        <Route path="/discover" element={<DiscoverPage />} />

        {/* The 6 Separate Category Pages */}
        <Route path="/home-decor" element={<HomeDecorPage />} />
        <Route path="/wall-decor" element={<WallDecorPage />} />
        <Route path="/table-decor" element={<TableDecorPage />} />
        <Route path="/resin-art" element={<ResinArtPage />} />
        <Route path="/ethnic-home-furnishing" element={<EthnicFurnishingPage />} />
        <Route path="/desk-accessories" element={<DeskAccessoriesPage />} />
      </Routes>

      {/* Floating Action Button (Only Scroll-to-Top) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 sm:bottom-8 sm:right-8">
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className={`flex h-11 w-11 items-center justify-center rounded-full bg-[#8f3424] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#713622] dark:bg-[#b66d4d] dark:text-[#211914] ${
            showScrollTop
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none translate-y-4 opacity-0"
          }`}
        >
          <FiArrowUp size={18} />
        </button>
      </div>
    </div>
  );
}