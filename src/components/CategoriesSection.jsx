import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import products from "../data/products";

// =====================================================
// SMART CATEGORY IMAGE HELPER
// =====================================================
const getCategoryCover = (
  targetKeywords = [],
  fallbackCategory = ""
) => {
  // 1. Exact product-name match
  const preciseMatch = products.find((p) => {
    const name = (p.name || "").toLowerCase();

    return targetKeywords.some((kw) =>
      name.includes(kw.toLowerCase())
    );
  });

  if (preciseMatch?.image) {
    return preciseMatch.image;
  }

  // 2. Category match
  const categoryMatch = products.find((p) => {
    const cat = (p.category || "").toLowerCase();

    return cat.includes(fallbackCategory.toLowerCase());
  });

  if (categoryMatch?.image) {
    return categoryMatch.image;
  }

  // 3. Fallback
  return products[0]?.image;
};

// =====================================================
// CATEGORIES
// =====================================================
const categories = [
  {
    name: "Home Décor",
    path: "/home-decor",
    image: getCategoryCover(
      [
        "elephant stool",
        "camel napkin stand",
        "chowki",
        "jhoola",
        "urli",
      ],
      "home"
    ),
    number: "01",
    label: "Living Spaces",
    size: "large",
  },
  {
    name: "Wall Décor",
    path: "/wall-decor",
    image: getCategoryCover(
      [
        "tree of life",
        "wall hanging",
        "mural",
        "peacock wall",
      ],
      "wall"
    ),
    number: "02",
    label: "Statement Walls",
    size: "small",
  },
  {
    name: "Table Décor",
    path: "/table-decor",
    image: getCategoryCover(
      [
        "boat",
        "cycle",
        "tealight",
        "candle holder",
      ],
      "table"
    ),
    number: "03",
    label: "Tabletop Art",
    size: "small",
  },
  {
    name: "Resin Art",
    path: "/resin-art",
    image: getCategoryCover(
      [
        "resin",
        "ocean",
        "geode",
        "crystal",
        "epoxy",
      ],
      "resin"
    ),
    number: "04",
    label: "Modern Craft",
    size: "large",
  },
  {
    name: "Ethnic Home Furnishing",
    path: "/ethnic-home-furnishing",
    image: getCategoryCover(
      [
        "jharokha",
        "khidki",
        "carved wood",
        "wooden frame",
      ],
      "furnishing"
    ),
    number: "05",
    label: "Heritage Collection",
    size: "medium",
  },
  {
    name: "Desk Accessories",
    path: "/desk-accessories",
    image: getCategoryCover(
      [
        "bike table clock",
        "pen stand",
        "clock",
        "watch",
      ],
      "desk"
    ),
    number: "06",
    label: "Workplace Details",
    size: "medium",
  },
];

// =====================================================
// COMPONENT
// =====================================================
export default function CategoriesSection() {
  return (
    <section
      id="categories"
      className="
        relative w-full overflow-hidden
        bg-[#f7efe3]
        py-20
        text-[#38271d]
        transition-colors duration-500
        dark:bg-[#120b08]
        dark:text-[#f5e9dc]
        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute -right-32 -top-32
            h-80 w-80 rounded-full
            bg-[#8f3424]/5
            blur-3xl
            dark:bg-[#dca34f]/5
          "
        />

        <div
          className="
            absolute -bottom-40 -left-40
            h-96 w-96 rounded-full
            bg-[#dca34f]/5
            blur-3xl
          "
        />

        {/* Subtle pattern */}
        <div
          className="
            absolute inset-0 opacity-[0.025]
            dark:opacity-[0.035]
          "
          style={{
            backgroundImage:
              "radial-gradient(#8f3424 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <div
          data-aos="fade-up"
          className="
            mb-12
            flex flex-col
            gap-7
            sm:mb-16
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          {/* LEFT */}
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#8f3424] dark:bg-[#dca34f]" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-[#8f3424]
                  dark:text-[#dca34f]
                  sm:text-xs
                "
              >
                Curated Collections
              </span>
            </div>

            <h2
              className="
                text-4xl
                font-black
                leading-[1.05]
                tracking-tight
                text-[#38271d]
                dark:text-[#fffaf2]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Discover Your
              <br />

              <span className="font-serif font-normal italic text-[#8f3424] dark:text-[#dca34f]">
                Signature Style
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="max-w-sm lg:pb-1">
            <p
              className="
                text-sm
                leading-7
                text-[#765b48]
                dark:text-[#c8b19a]
                sm:text-base
              "
            >
              Explore thoughtfully crafted collections inspired by
              Indian heritage, timeless artistry and contemporary
              interiors.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="text-xs font-bold text-[#8f3424] dark:text-[#dca34f]">
                06
              </span>

              <span className="h-px w-16 bg-[#d8c09b] dark:bg-[#4c3527]" />

              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8b705c] dark:text-[#9f8875]">
                Collections
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            CATEGORY GRID
        ===================================================== */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">

          {categories.map((cat, index) => {
            const isLarge = cat.size === "large";

            return (
              <Link
                key={cat.name}
                to={cat.path}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
                className={`
                  group
                  relative
                  block
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-[#d8c09b]
                  bg-black
                  shadow-[0_10px_35px_rgba(56,39,29,0.08)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#8f3424]
                  hover:shadow-[0_25px_60px_rgba(143,52,36,0.20)]
                  dark:border-[#3c2a20]
                  dark:shadow-none
                  dark:hover:border-[#dca34f]

                  ${
                    isLarge
                      ? "lg:col-span-7 lg:aspect-[1.55/1]"
                      : cat.size === "small"
                      ? "lg:col-span-5 lg:aspect-[1.35/1]"
                      : "lg:col-span-6 lg:aspect-[1.55/1]"
                  }

                  aspect-[1.25/1]
                  sm:aspect-[1.2/1]
                `}
              >
                {/* =====================================================
                    IMAGE
                ===================================================== */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:scale-110
                  "
                />

                {/* =====================================================
                    IMAGE OVERLAY
                ===================================================== */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/25
                    to-black/5
                    opacity-85
                    transition-all
                    duration-500
                    group-hover:opacity-95
                  "
                />

                {/* =====================================================
                    TOP NUMBER
                ===================================================== */}
                <div className="absolute left-5 top-5 sm:left-6 sm:top-6">
                  <div
                    className="
                      flex
                      h-10
                      min-w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/25
                      bg-black/20
                      px-3
                      text-[10px]
                      font-bold
                      tracking-[0.15em]
                      text-white
                      backdrop-blur-md
                      transition-all
                      duration-300
                      group-hover:border-[#dca34f]
                      group-hover:bg-[#8f3424]/80
                    "
                  >
                    {cat.number}
                  </div>
                </div>

                {/* =====================================================
                    TOP RIGHT ARROW
                ===================================================== */}
                <div
                  className="
                    absolute
                    right-5
                    top-5
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-500
                    group-hover:rotate-45
                    group-hover:border-[#dca34f]
                    group-hover:bg-[#8f3424]
                    sm:right-6
                    sm:top-6
                  "
                >
                  <FiArrowUpRight className="text-lg" />
                </div>

                {/* =====================================================
                    BOTTOM CONTENT
                ===================================================== */}
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    p-5
                    sm:p-7
                  "
                >
                  <div
                    className="
                      mb-2
                      flex
                      items-center
                      gap-2
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-[#e7bb73]
                      sm:text-[10px]
                    "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#dca34f]" />
                    {cat.label}
                  </div>

                  <h3
                    className={`
                      max-w-[90%]
                      font-bold
                      leading-tight
                      tracking-tight
                      text-white
                      ${
                        isLarge
                          ? "text-2xl sm:text-4xl"
                          : "text-xl sm:text-2xl"
                      }
                    `}
                  >
                    {cat.name}
                  </h3>

                  {/* Explore line */}
                  <div
                    className="
                      mt-4
                      flex
                      max-h-0
                      items-center
                      gap-2
                      overflow-hidden
                      text-xs
                      font-semibold
                      text-white/80
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:max-h-8
                      group-hover:opacity-100
                    "
                  >
                    <span>Explore Collection</span>

                    <span className="h-px w-8 bg-white/50" />
                  </div>
                </div>

                {/* =====================================================
                    BORDER GLOW
                ===================================================== */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[1.5rem]
                    border
                    border-white/0
                    transition-all
                    duration-500
                    group-hover:border-white/15
                  "
                />
              </Link>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM NOTE
        ===================================================== */}
        <div
          data-aos="fade-up"
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-center
            gap-3
            text-center
            sm:mt-14
            sm:flex-row
          "
        >
          <span className="h-px w-8 bg-[#cdb18c] dark:bg-[#4c3527]" />

          <p
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#8b705c]
              dark:text-[#a9917e]
            "
          >
            Crafted for spaces with character
          </p>

          <span className="h-px w-8 bg-[#cdb18c] dark:bg-[#4c3527]" />
        </div>
      </div>
    </section>
  );
}