import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";
import { FiLayers, FiCheck } from "react-icons/fi";

const ProductSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Generate unique categories dynamically from products data
  const categories = useMemo(() => {
    const cats = ["All", ...new Set(products.map((p) => p.category).filter(Boolean))];
    return cats;
  }, []);

  // Filter products by selected category tag
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      const featured = products.filter((item) => item.featured);
      return featured.length > 0 ? featured : products;
    }
    return products.filter(
      (item) =>
        (item.category || "").toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [selectedCategory]);

  return (
    <section
      id="collection"
      className="relative w-full overflow-hidden bg-[#f7efe3] py-16 text-[#38271d] transition-colors duration-300 sm:py-20 lg:py-24 dark:bg-[#15100d] dark:text-[#f3e5d4]"
    >
      {/* Decorative Atmosphere Glows */}
      <div className="pointer-events-none absolute -left-36 top-16 h-80 w-80 rounded-full bg-[#d39a38]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-36 bottom-16 h-96 w-96 rounded-full bg-[#8f3424]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div
          data-aos="fade-up"
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
        >
          <div className="mb-3.5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#b99568] sm:w-12" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8f3424] sm:text-xs dark:text-[#d19a76]">
              Exclusive Catalog
            </span>
            <span className="h-px w-8 bg-[#b99568] sm:w-12" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-[#38271d] sm:text-4xl lg:text-5xl dark:text-[#f3e5d4]">
            Our{" "}
            <span className="text-[#8f3424] dark:bg-gradient-to-r dark:from-[#e3a87d] dark:via-[#dca34f] dark:to-[#b8523f] dark:bg-clip-text dark:text-transparent">
              Handcrafted
            </span>{" "}
            Collection
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#735f50] sm:text-base dark:text-[#b9a592]">
            Discover fine pieces forged by regional artisans, balancing authentic
            Indian heritage with refined residential and commercial interior aesthetics.
          </p>
        </div>

        {/* Commercial Filter Tabs */}
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-[#8f3424] text-white shadow-md ring-2 ring-[#8f3424]/30 dark:bg-[#c89269] dark:text-[#18110d] dark:ring-[#c89269]/40"
                    : "border border-[#d8c09b] bg-[#fffaf2] text-[#735f50] hover:border-[#8f3424]/60 hover:text-[#8f3424] dark:border-[#423126] dark:bg-[#1f1612] dark:text-[#b9a592] dark:hover:border-[#c89269]/60 dark:hover:text-[#f3e5d4]"
                }`}
              >
                {isActive ? <FiCheck size={13} /> : <FiLayers size={13} />}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid w-full grid-cols-1 items-stretch gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id || index}
                product={product}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-[#c9a77b] bg-[#fffaf2] px-6 py-16 text-center dark:border-[#5c4637] dark:bg-[#211914]">
            <p className="text-sm font-medium text-[#735f50] dark:text-[#b9a592]">
              No items available under "{selectedCategory}". Please select another category.
            </p>
          </div>
        )}

        {/* Bottom Commercial Trust Accent */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-14 text-center sm:mt-16"
        >
          <div className="mx-auto flex max-w-md items-center justify-center gap-3">
            <span className="h-px flex-1 bg-[#d8c09b] dark:bg-[#4e3b30]" />
            <span className="text-sm text-[#8f3424] dark:text-[#d19a76]">✦</span>
            <span className="h-px flex-1 bg-[#d8c09b] dark:bg-[#4e3b30]" />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#92745a] dark:text-[#9c826c]">
            <span>100% Solid Wrought Iron</span>
            <span>•</span>
            <span>Custom Bulk Inquiries Welcome</span>
            <span>•</span>
            <span>Direct Studio Dispatch</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;