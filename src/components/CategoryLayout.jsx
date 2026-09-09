
import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiLayers } from "react-icons/fi";
import Header from "./Header";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import allProducts from "../data/products";

export default function CategoryLayout({
  title,
  keywords = [],
  products: customProducts,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  const matchedProducts = useMemo(() => {
    if (customProducts && customProducts.length > 0) {
      return customProducts;
    }

    return allProducts.filter((item) => {
      const name = (item.name || "").toLowerCase();
      const cat = (item.category || "").toLowerCase();

      return keywords.some(
        (kw) =>
          name.includes(kw.toLowerCase()) ||
          cat.includes(kw.toLowerCase())
      );
    });
  }, [keywords, customProducts]);

  return (
    <div
      className="
        min-h-screen w-full
        bg-[#fbf7f1]
        text-[#38271d]
        antialiased
        dark:bg-[#120c09]
        dark:text-[#f3e5d4]
      "
    >
      <Header />

      <main className="w-full overflow-hidden pt-[61px]">

        {/* =====================================================
            CATEGORY HERO
        ====================================================== */}
        <section
          className="
            relative overflow-hidden
            border-b border-[#e4d5c3]
            bg-[#f7efe5]
            py-10 sm:py-12
            dark:border-[#34251d]
            dark:bg-[#18100c]
          "
        >
          {/* Background Decorative Shape */}
          <div
            className="
              pointer-events-none absolute
              -right-24 -top-24
              h-64 w-64
              rounded-full
              bg-[#d6a66f]/10
              blur-3xl
              dark:bg-[#c88954]/10
            "
          />

          <div
            className="
              pointer-events-none absolute
              -bottom-32 -left-20
              h-64 w-64
              rounded-full
              bg-[#8f3424]/5
              blur-3xl
            "
          />

          <div
            className="
              relative mx-auto
              max-w-7xl
              px-4 sm:px-6 lg:px-8
            "
          >
            {/* Back */}
            <Link
              to="/#categories"
              className="
                inline-flex items-center gap-2
                text-[10px] font-extrabold
                uppercase tracking-[0.18em]
                text-[#8f3424]
                transition-colors
                hover:text-[#b25a42]
                dark:text-[#dca34f]
              "
            >
              <FiArrowLeft size={14} />
              Back to Categories
            </Link>

            {/* Title */}
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span
                  className="
                    text-[9px] font-extrabold
                    uppercase tracking-[0.25em]
                    text-[#a06b42]
                    dark:text-[#d39a60]
                  "
                >
                  Vraj Creation · Collection
                </span>

                <h1
                  className="
                    mt-1.5
                    text-3xl font-black
                    tracking-[-0.03em]
                    text-[#38271d]
                    sm:text-5xl
                    dark:text-[#fff8ef]
                  "
                >
                  {title}
                </h1>
              </div>

              {/* Collection Count */}
              <div
                className="
                  inline-flex w-fit
                  items-center gap-2
                  rounded-full
                  border border-[#dfcdb8]
                  bg-white/70
                  px-4 py-2
                  text-[10px] font-bold
                  uppercase tracking-wider
                  text-[#795f4b]
                  backdrop-blur-sm
                  dark:border-[#453227]
                  dark:bg-[#211711]
                  dark:text-[#cbb3a1]
                "
              >
                <FiLayers
                  size={14}
                  className="text-[#a06b42] dark:text-[#dca34f]"
                />

                <span>
                  {matchedProducts.length}{" "}
                  {matchedProducts.length === 1 ? "Piece" : "Pieces"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PRODUCT COLLECTION
        ====================================================== */}
        <section className="py-10 sm:py-14">
          <div
            className="
              mx-auto max-w-7xl
              px-4 sm:px-6 lg:px-8
            "
          >
            {matchedProducts.length > 0 ? (
              <div
                className="
                  grid
                  grid-cols-1
                  gap-5
                  md:grid-cols-2
                  lg:grid-cols-3
                  lg:gap-6
                "
              >
                {matchedProducts.map((product, idx) => (
                  <ProductCard
                    key={product.id || idx}
                    product={product}
                    index={idx}
                  />
                ))}
              </div>
            ) : (
              /* =================================================
                 EMPTY STATE
              ================================================== */
              <div
                className="
                  mx-auto max-w-xl
                  rounded-[24px]
                  border border-dashed
                  border-[#d9c5ad]
                  bg-white/60
                  px-6 py-14
                  text-center
                  dark:border-[#4b372b]
                  dark:bg-[#1a120e]
                "
              >
                <div
                  className="
                    mx-auto flex h-14 w-14
                    items-center justify-center
                    rounded-full
                    bg-[#f0e1ce]
                    text-[#8f3424]
                    dark:bg-[#2b1d15]
                    dark:text-[#dca34f]
                  "
                >
                  <FiLayers size={22} />
                </div>

                <h2
                  className="
                    mt-5
                    text-xl font-extrabold
                    text-[#38271d]
                    dark:text-[#f3e4d5]
                  "
                >
                  Collection Coming Soon
                </h2>

                <p
                  className="
                    mx-auto mt-2 max-w-sm
                    text-sm leading-6
                    text-[#766657]
                    dark:text-[#bba99a]
                  "
                >
                  New artisan pieces are currently being prepared for this
                  collection.
                </p>

                <Link
                  to="/#collection"
                  className="
                    mt-6 inline-flex
                    rounded-full
                    bg-[#8f3424]
                    px-6 py-3
                    text-[10px] font-extrabold
                    uppercase tracking-[0.15em]
                    text-white
                    transition-all
                    hover:-translate-y-0.5
                    hover:bg-[#74291d]
                    hover:shadow-lg
                  "
                >
                  Explore Collection
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}