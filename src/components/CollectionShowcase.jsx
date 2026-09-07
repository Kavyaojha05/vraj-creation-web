import { useState, useEffect, useRef } from "react";
import { FiArrowUpRight, FiX, FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import products from "../data/products";

export default function CollectionShowcase() {
  const [activeItem, setActiveItem] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  // Escape key handler for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveItem(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto-Run Slider Effect (Runs every 3.5 seconds)
  useEffect(() => {
    if (isPaused || activeItem) return;

    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          sliderRef.current.scrollBy({ left: clientWidth * 0.8, behavior: "smooth" });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, activeItem]);

  // Manual Slider Scroll Handler
  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = sliderRef.current;
      const scrollAmount = clientWidth * 0.8;
      
      if (direction === "left") {
        if (scrollLeft <= 10) {
          sliderRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
        } else {
          sliderRef.current.scrollTo({ left: scrollLeft - scrollAmount, behavior: "smooth" });
        }
      } else {
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          sliderRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
        }
      }
    }
  };

  return (
    <>
      <section
        id="categories"
        className="relative w-full overflow-hidden bg-gradient-to-b from-[#fbf6ee] via-[#f4ebd9] to-[#ebdcc4] py-20 transition-colors duration-500 sm:py-24 lg:py-28 dark:from-[#0d0705] dark:via-[#140b08] dark:to-[#1a100c]"
      >
        {/* Glow Effects */}
        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#8f3424]/15 blur-[130px] dark:bg-[#8f3424]/25" />
        <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#d39a38]/15 blur-[130px] dark:bg-[#d39a38]/20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading & Navigation Controls */}
          <div className="mb-12 flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
            <div className="text-center sm:text-left">
              <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-[#d8c09b]/80 bg-white/70 px-4 py-1.5 shadow-sm backdrop-blur-md dark:border-[#4a3528] dark:bg-[#221812]">
                <FiStar className="text-[#8f3424] dark:text-[#dca34f]" size={14} />
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8f3424] dark:text-[#dca34f]">
                  Complete Product Exhibition
                </span>
              </div>

              <h2 className="text-4xl font-extrabold tracking-tight text-[#38271d] sm:text-4xl lg:text-5xl dark:text-[#fffaf2]">
                Explore All <span className="bg-gradient-to-r from-[#8f3424] via-[#c26838] to-[#d39a38] bg-clip-text text-transparent dark:from-[#e3a87d] dark:via-[#dca34f] dark:to-[#e8b87a]">Collections</span>
              </h2>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollSlider("left")}
                aria-label="Scroll Left"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8c09b] bg-[#fffaf2] text-[#38271d] shadow-md transition-all hover:bg-[#8f3424] hover:text-white dark:border-[#4a3528] dark:bg-[#1f1712] dark:text-[#fffaf2] dark:hover:bg-[#8f3424]"
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                onClick={() => scrollSlider("right")}
                aria-label="Scroll Right"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8c09b] bg-[#fffaf2] text-[#38271d] shadow-md transition-all hover:bg-[#8f3424] hover:text-white dark:border-[#4a3528] dark:bg-[#1f1712] dark:text-[#fffaf2] dark:hover:bg-[#8f3424]"
              >
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Slider Track Container with Pause on Hover */}
          <div
            ref={sliderRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {products.map((item, idx) => (
              <div
                key={item.id || idx}
                data-aos="fade-up"
                data-aos-delay={(idx % 4) * 60}
                onClick={() => setActiveItem(item)}
                className="group relative min-w-[280px] sm:min-w-[340px] lg:min-w-[380px] snap-start flex cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-[#d8c09b] bg-black shadow-xl h-[420px] sm:h-[460px] transition-all duration-500 hover:-translate-y-2 hover:border-[#8f3424] hover:shadow-[0_25px_60px_rgba(143,52,36,0.3)] dark:border-[#3d2a1f] dark:hover:border-[#dca34f]"
              >
                {/* Background Image with Zoom */}
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/95" />

                {/* Top Floating Tag */}
                <div className="relative z-10 flex items-center justify-between p-6">
                  <span className="rounded-full border border-white/20 bg-black/40 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white backdrop-blur-md shadow-md">
                    {item.category || "Handcrafted Art"}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#8f3424]">
                    <FiArrowUpRight size={16} />
                  </div>
                </div>

                {/* Bottom Content Info */}
                <div className="relative z-10 p-6 sm:p-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e2b96f]">
                    Jodhpur Heritage Craft
                  </span>
                  <h3 className="mt-1 text-2xl font-extrabold text-white sm:text-3xl line-clamp-1">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl sm:p-6"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-[#d8c09b] bg-[#fffaf2] shadow-2xl dark:border-[#4d382c] dark:bg-[#1a120d] animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              aria-label="Close dialog"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-[#8f3424]"
            >
              <FiX size={18} />
            </button>

            <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
              <img
                src={activeItem.image}
                alt={activeItem.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8f3424] dark:text-[#dca34f]">
                {activeItem.category || "Handcrafted Masterpiece"}
              </span>
              <h3 className="mt-1 text-2xl font-extrabold text-[#38271d] sm:text-3xl dark:text-[#fffaf2]">
                {activeItem.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#735f50] dark:text-[#c3b1a2]">
                {activeItem.description || "This exclusive piece is meticulously forged and hand-finished by generational master artisans in Jodhpur, bringing timeless cultural heritage and modern durability to your home space."}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}