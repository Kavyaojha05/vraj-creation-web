import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiLayers } from "react-icons/fi";
import Header from "./Header";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import allProducts from "../data/products";

export default function CategoryLayout({ title, keywords = [], products: customProducts }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  const matchedProducts = useMemo(() => {
    // Agar page se custom products pass kiye gaye hain, toh wahi use honge
    if (customProducts && customProducts.length > 0) {
      return customProducts;
    }
    // Warna purane tarike se keywords ke base par filter honge
    return allProducts.filter((item) => {
      const name = (item.name || "").toLowerCase();
      const cat = (item.category || "").toLowerCase();
      return keywords.some(
        (kw) => name.includes(kw.toLowerCase()) || cat.includes(kw.toLowerCase())
      );
    });
  }, [keywords, customProducts]);

  return (
    <div className="min-h-screen w-full bg-[#fbf6ee] text-[#38271d] antialiased dark:bg-[#120c09] dark:text-[#f3e5d4]">
      <Header />

      <main className="w-full overflow-hidden pt-[61px]">
        {/* Page Header */}
        <section className="border-b border-[#dfcdb7] bg-gradient-to-b from-[#f2e4d2] to-[#fbf6ee] py-14 sm:py-18 dark:border-[#38261c] dark:from-[#19110c] dark:to-[#120c09]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              to="/#categories"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8f3424] hover:underline dark:text-[#dca34f]"
            >
              <FiArrowLeft /> Back to All Categories
            </Link>

            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl dark:text-[#fffaf2]">
              {title}
            </h1>

            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#8f3424] dark:text-[#dca34f]">
              <FiLayers />
              <span>{matchedProducts.length} Items Available in Collection</span>
            </div>
          </div>
        </section>

        {/* Product Items */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {matchedProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {matchedProducts.map((product, idx) => (
                  <ProductCard key={product.id || idx} product={product} index={idx} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-[#d8c09b] p-12 text-center dark:border-[#4d382c]">
                <p className="text-sm font-semibold text-[#735f50] dark:text-[#c3b1a2]">
                  New artisan specimens are currently being forged for this collection.
                </p>
                <Link
                  to="/#collection"
                  className="mt-4 inline-block rounded-full bg-[#8f3424] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
                >
                  Explore All Products
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