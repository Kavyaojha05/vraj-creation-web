import { Link } from "react-router-dom";
import products from "../data/products";

// Smart Precision Image Helper (Matches targeted keywords first, then fallback category)
const getCategoryCover = (targetKeywords = [], fallbackCategory = "") => {
  // 1. First priority: Match specific artifact names in products data
  const preciseMatch = products.find((p) => {
    const name = (p.name || "").toLowerCase();
    return targetKeywords.some((kw) => name.includes(kw.toLowerCase()));
  });
  if (preciseMatch?.image) return preciseMatch.image;

  // 2. Second priority: Match category field
  const categoryMatch = products.find((p) => {
    const cat = (p.category || "").toLowerCase();
    return cat.includes(fallbackCategory.toLowerCase());
  });
  if (categoryMatch?.image) return categoryMatch.image;

  return products[0]?.image;
};

const categories = [
  {
    name: "Home Décor",
    path: "/home-decor",
    // Updated keywords to match your newly added home decor items (Elephant Stool, Camel Napkin Stand, Chowki, etc.)
    image: getCategoryCover(["elephant stool", "camel napkin stand", "chowki", "jhoola", "urli"], "home"),
  },
  {
    name: "Wall Décor",
    path: "/wall-decor",
    // Matches metal tree murals, wall frames, and wall sculptures
    image: getCategoryCover(["tree of life", "wall hanging", "mural", "peacock wall"], "wall"),
  },
  {
    name: "Table Décor",
    path: "/table-decor",
    // Matches miniature desk artifacts, metal boats, cycles & tealight glows
    image: getCategoryCover(["boat", "cycle", "tealight", "candle holder"], "table"),
  },
  {
    name: "Resin Art",
    path: "/resin-art",
    // Matches resin preservation, ocean wave art, geode or crystal work
    image: getCategoryCover(["resin", "ocean", "geode", "crystal", "epoxy"], "resin"),
  },
  {
    name: "Ethnic Home Furnishing",
    path: "/ethnic-home-furnishing",
    // Matches carved wooden jharokha, traditional haveli khidki, and wooden mirrors
    image: getCategoryCover(["jharokha", "khidki", "carved wood", "wooden frame"], "furnishing"),
  },
  {
    name: "Desk Accessories",
    path: "/desk-accessories",
    // Matches executive desk items: metal motorbike clocks, pen stands, timepieces
    image: getCategoryCover(["bike table clock", "pen stand", "clock", "watch"], "desk"),
  },
];

export default function CategoriesSection() {
  return (
    <section
      id="categories"
      className="relative w-full overflow-hidden bg-[#f7efe3] py-16 sm:py-20 lg:py-24 text-[#38271d] transition-colors duration-300 dark:bg-[#140d09] dark:text-[#f3e5d4]"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Simple Clean Section Header */}
        <div data-aos="fade-up" className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8f3424] sm:text-xs dark:text-[#dca34f]">
            ✦ Curated Portfolios ✦
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#38271d] sm:text-4xl lg:text-5xl dark:text-[#fffaf2]">
            Shop by{" "}
            <span className="text-[#8f3424] dark:text-[#dca34f]">
              Category
            </span>
          </h2>
        </div>

        {/* Categories Grid (Only Image + Name + Click Link) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, index) => (
            <Link
              key={cat.name}
              to={cat.path}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 80}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#d8c09b] bg-black shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#8f3424] hover:shadow-[0_18px_40px_rgba(143,52,36,0.22)] dark:border-[#3d2a1f]"
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Gradient Shade for Title Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

              {/* Title & Click Prompt at Bottom */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5 sm:p-6 text-white">
                <h3 className="text-xl font-bold tracking-wide drop-shadow-md sm:text-2xl">
                  {cat.name}
                </h3>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/40 text-sm backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#8f3424] group-hover:border-[#8f3424]">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}