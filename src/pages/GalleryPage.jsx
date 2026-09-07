import { useEffect, useState } from "react";
import { FiX, FiMaximize2, FiLayers } from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/Footer";
import allProducts from "../data/products";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Escape key handler for gallery modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen w-full bg-[#fbf6ee] text-[#38271d] antialiased dark:bg-[#120c09] dark:text-[#f3e5d4]">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main className="pt-20 sm:pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Page Title Section */}
          <div className="mb-12 text-center" data-aos="fade-up">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d8c09b]/80 bg-[#fffaf2] px-4 py-1.5 shadow-sm dark:border-[#4a3528] dark:bg-[#1c140f]">
              <FiLayers className="text-[#8f3424] dark:text-[#dca34f]" size={14} />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8f3424] dark:text-[#dca34f]">
                Complete Studio Showcase
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl dark:text-[#fffaf2]">
              Artisan <span className="text-[#8f3424] dark:text-[#dca34f]">Gallery Exhibition</span>
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#735f50] sm:text-base dark:text-[#c3b1a2]">
              Explore our comprehensive collection of handcrafted home décor, wall art, and table centerpieces. Click any specimen to inspect in high resolution.
            </p>
          </div>

          {/* Dynamic Image Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {allProducts.map((item, idx) => (
              <div
                key={item.id || idx}
                data-aos="fade-up"
                data-aos-delay={(idx % 4) * 60}
                onClick={() => setSelectedImage(item)}
                className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#d8c09b] bg-[#fffaf2] shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-[#8f3424] hover:shadow-xl dark:border-[#3d2a1f] dark:bg-[#1c140f]"
              >
                {/* Image Frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#eadbc5] dark:bg-[#281d17]">
                  <img
                    src={item.image}
                    alt={item.name || "Handcrafted Specimen"}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  {/* Hover Icon */}
                  <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:scale-105">
                    <FiMaximize2 size={15} />
                  </div>
                </div>

                {/* Card Info */}
                <div className="flex flex-1 flex-col p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8f3424] dark:text-[#dca34f]">
                    {item.category || "Handcrafted Art"}
                  </span>
                  <h3 className="mt-1 line-clamp-1 text-sm font-bold text-[#38271d] dark:text-[#f3e5d4]">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-[#d8c09b] bg-[#fffaf2] shadow-2xl dark:border-[#4d382c] dark:bg-[#1a120d] animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close preview"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-[#8f3424]"
            >
              <FiX size={18} />
            </button>

            {/* Modal Image */}
            <div className="relative max-h-[65vh] w-full overflow-hidden bg-black/95 flex items-center justify-center p-4">
              <img
                src={selectedImage.image}
                alt={selectedImage.name}
                className="max-h-[60vh] w-auto object-contain drop-shadow-lg"
              />
            </div>

            {/* Modal Details */}
            <div className="p-6 sm:p-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8f3424] dark:text-[#dca34f]">
                Category: {selectedImage.category || "Authentic Decor"}
              </span>
              <h3 className="mt-1 text-xl font-extrabold text-[#38271d] sm:text-2xl dark:text-[#fffaf2]">
                {selectedImage.name}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#735f50] dark:text-[#c3b1a2]">
                {selectedImage.description || "An exquisite piece crafted with traditional Jodhpur artistry and durable materials."}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}