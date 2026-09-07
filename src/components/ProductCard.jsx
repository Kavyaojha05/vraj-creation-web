import { useEffect, useState } from "react";
import { FiX, FiCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const ProductCard = ({ product, index = 0 }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const delay = (index % 4) * 80;

  // Escape key handler for gallery modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsPreviewOpen(false);
    };
    if (isPreviewOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isPreviewOpen]);

  // Default features agar product mein na diye ho toh fallback
  const productFeatures = product.features || [
    "Handcrafted Finish",
    "Traditional Artistry"
  ];

  // WhatsApp Enquiry Link Generation
  const whatsappNumber = "918824968974";
  const message = encodeURIComponent(
    `Hello Vraj Creation! I am interested in knowing the price and details for this product: "${product.name}".`
  );
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay={delay}
        className="flex w-full min-w-0"
      >
        <article className="group relative flex w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[#d8c09b] bg-[#fffaf2] shadow-[0_10px_30px_rgba(56,39,29,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#8f3424]/70 hover:shadow-[0_22px_48px_rgba(56,39,29,0.18)] dark:border-[#423126] dark:bg-[#1c140f] dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)] dark:hover:border-[#c89269]/60 dark:hover:shadow-[0_22px_48px_rgba(0,0,0,0.55)]">
          {/* Top Heritage Bar */}
          <div className="flex h-1.5 w-full shrink-0">
            <span className="w-1/4 bg-[#8f3424]" />
            <span className="w-1/4 bg-[#d39a38]" />
            <span className="w-1/4 bg-[#70402e]" />
            <span className="w-1/4 bg-[#b99568]" />
          </div>

          {/* Clickable Image Frame */}
          <div
            onClick={() => setIsPreviewOpen(true)}
            className="relative w-full cursor-pointer p-3.5 sm:p-4"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#d8bd8c] bg-[#eadbc5] dark:border-[#523d30] dark:bg-[#281d17]">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name || "Handcrafted Artifact"}
                  loading="lazy"
                  className="h-full w-full object-cover brightness-[0.96] contrast-[1.03] transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-100"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[#d8c09b] text-xs font-semibold uppercase tracking-wider text-[#735f50] dark:bg-[#241a14] dark:text-[#b9a592]">
                  Studio Specimen
                </div>
              )}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Corner Accents */}
            <span className="pointer-events-none absolute left-2.5 top-2.5 h-3.5 w-3.5 border-l-2 border-t-2 border-[#8f3424] dark:border-[#c89269]" />
            <span className="pointer-events-none absolute right-2.5 top-2.5 h-3.5 w-3.5 border-r-2 border-t-2 border-[#8f3424] dark:border-[#c89269]" />
            <span className="pointer-events-none absolute bottom-2.5 left-2.5 h-3.5 w-3.5 border-b-2 border-l-2 border-[#8f3424] dark:border-[#c89269]" />
            <span className="pointer-events-none absolute bottom-2.5 right-2.5 h-3.5 w-3.5 border-b-2 border-r-2 border-[#8f3424] dark:border-[#c89269]" />
          </div>

          {/* Card Body */}
          <div className="flex flex-1 flex-col px-4 pb-5 sm:px-5 sm:pb-6">
            <div className="mb-2 flex items-center justify-center gap-2">
              <span className="h-px w-6 bg-[#c9a77b]/60 dark:bg-[#604738]" />
              <span className="max-w-[180px] truncate text-[10px] font-bold uppercase tracking-[0.22em] text-[#8f3424] dark:text-[#dca34f]">
                {product.category || "Authentic Decor"}
              </span>
              <span className="h-px w-6 bg-[#c9a77b]/60 dark:bg-[#604738]" />
            </div>

            <h3
              title={product.name}
              onClick={() => setIsPreviewOpen(true)}
              className="line-clamp-2 min-h-[48px] cursor-pointer text-center text-base font-bold leading-snug text-[#38271d] transition-colors duration-300 group-hover:text-[#8f3424] sm:text-lg dark:text-[#f3e5d4] dark:group-hover:text-[#e5a87a]"
            >
              {product.name}
            </h3>

            <p className="mt-1 line-clamp-2 min-h-[36px] text-center text-xs leading-5 text-[#735f50] dark:text-[#c3b1a2]">
              {product.description ||
                "Finely detailed handcrafted Indian art piece, forged with precision."}
            </p>

            {/* Side-by-Side Action Bar: Craft Info & WhatsApp Enquire Button */}
            <div className="mt-auto pt-4 flex items-center justify-between gap-3 border-t border-[#dcc8aa] dark:border-[#3d2c22]">
              <div className="text-left">
                <span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-[#92745a] dark:text-[#9e8778]">
                  Certification
                </span>
                <span className="block truncate text-xs font-semibold text-[#38271d] dark:text-[#e4d7cc]">
                  Rajasthan Artisan
                </span>
              </div>

              {/* WhatsApp Quick Enquiry Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#25D366] px-3.5 py-2 text-xs font-bold text-white shadow-md transition-all hover:bg-[#20ba5a] hover:scale-105"
              >
                <FaWhatsapp size={15} />
                <span>Enquire</span>
              </a>
            </div>
          </div>
        </article>
      </div>

      {/* =====================================================
          CINEMATIC LIGHTBOX MODAL (FULL IMAGE HERO)
      ====================================================== */}
      {isPreviewOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[120] flex items-center justify-center overflow-y-auto bg-black/90 p-3 pt-[15px] pb-5 backdrop-blur-xl transition-all duration-300 sm:p-5 sm:pt-[15px]"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div
            className="relative mt-[15px] mb-auto flex max-h-[92vh] w-4xl flex-col overflow-hidden rounded-3xl border border-[#4d382c] bg-[#160f0c] text-[#f5ebd9] shadow-[0_25px_70px_rgba(0,0,0,0.85)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsPreviewOpen(false)}
              aria-label="Close preview"
              className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-[#8f3424]"
            >
              <FiX size={18} />
            </button>

            {/* Full Image Showcase Container */}
            <div className="relative flex min-h-[52vh] max-h-[64vh] w-full items-center justify-center overflow-hidden bg-black/90 p-2 sm:min-h-[58vh] sm:max-h-[68vh] sm:p-4">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-contain drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
              />
            </div>

            {/* Bottom Details & Specifications */}
            <div className="flex flex-col border-t border-[#352319] bg-[#1a120d] p-5 sm:p-6">
              <div className="border-b border-[#2d1d15] pb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#dca34f]">
                  Category: {product.category || "Authentic Decor"}
                </span>
                <h3 className="mt-1 text-xl font-bold text-[#fffaf2] sm:text-2xl">
                  {product.name}
                </h3>
              </div>

              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl text-xs leading-relaxed text-[#c3b1a2] sm:text-sm">
                  {product.description}
                </p>

                {/* Dynamic Features Render */}
                <div className="flex shrink-0 flex-wrap items-center gap-3">
                  {productFeatures.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-center gap-1.5 rounded-full border border-[#3e2c22] bg-black/30 px-3 py-1 text-[11px] text-[#e4d7cc]"
                    >
                      <FiCheck size={11} className="text-[#dca34f]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;