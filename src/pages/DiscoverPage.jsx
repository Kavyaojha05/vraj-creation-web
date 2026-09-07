import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheck,
  FiCompass,
  FiFeather,
  FiHeart,
  FiLayers,
  FiMessageCircle,
  FiStar,
} from "react-icons/fi";

import Header from "../components/Header";
import Footer from "../components/Footer";
import products from "../data/products";

// =====================================================
// IMAGE HELPER
// =====================================================
const getCraftImage = (keywords = []) => {
  const item = products.find((p) => {
    const name = (p.name || "").toLowerCase();
    const category = (p.category || "").toLowerCase();

    return keywords.some((kw) => {
      const lowerKw = kw.toLowerCase();
      return name.includes(lowerKw) || category.includes(lowerKw);
    });
  });

  return item?.image || products[0]?.image;
};

// =====================================================
// CRAFT JOURNEY
// TEXT KEPT EXACTLY SAME
// =====================================================
const craftStages = [
  {
    number: "01",
    title: "Selecting the Raw Material",
    description:
      "We carefully select quality wood and iron that provide the right foundation for each creation. Every material has its own character, texture, and potential.",
    image: getCraftImage(["jharokha", "wood"]),
    badge: "Material Selection",
    icon: FiLayers,
  },
  {
    number: "02",
    title: "Creativity Takes Shape",
    description:
      "Our artists turn simple raw materials into creative concepts. Through cutting, shaping, bending, carving, and skilled handwork, an idea slowly begins to take form.",
    image: getCraftImage(["boat", "cycle", "clock"]),
    badge: "Hand Forging",
    icon: FiCompass,
  },
  {
    number: "03",
    title: "Crafting with Precision",
    description:
      "Every curve, detail, and element is carefully crafted by skilled artisans. We combine traditional craftsmanship with fresh ideas to create distinctive designs.",
    image: getCraftImage(["dancers", "musician"]),
    badge: "Artisan Detailing",
    icon: FiFeather,
  },
  {
    number: "04",
    title: "The Final Artistic Touch",
    description:
      "The finishing process brings the creation to life. Colours, textures, polishing, and detailing are thoughtfully added to give each piece its unique identity and a beautiful finished appearance.",
    image: getCraftImage(["tealight", "jhoola", "radha krishna"]),
    badge: "Patina & Lacquer",
    icon: FiStar,
  },
];

// =====================================================
// VALUES
// TEXT KEPT EXACTLY SAME
// =====================================================
const valuesList = [
  "Carefully crafted by generational folk artisans",
  "Distinctive accents curated for modern interior aesthetics",
  "Artful gifts carrying warmth, character, and cultural soul",
  "Rigid multi-layer quality assurance and protective transit packaging",
];

// =====================================================
// COMPONENT
// =====================================================
const DiscoverPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const soulCraftImage =
    products.find((p) =>
      p.name?.toLowerCase().includes("radha krishna jhoola")
    )?.image ||
    products.find((p) => p.name?.toLowerCase().includes("jhoola"))?.image ||
    products.find((p) => p.name?.toLowerCase().includes("boat"))?.image ||
    products[0]?.image;

  const heroImage =
    products.find((p) =>
      p.name?.toLowerCase().includes("elephant phone stand")
    )?.image ||
    products.find((p) => p.name?.toLowerCase().includes("elephant"))?.image ||
    products[0]?.image;

  const secondaryHeroImage =
    products.find((p) =>
      p.name?.toLowerCase().includes("green jharokha")
    )?.image ||
    products.find((p) => p.name?.toLowerCase().includes("jharokha"))?.image ||
    products[1]?.image ||
    products[0]?.image;

  return (
    <div className="min-h-screen overflow-hidden bg-[#fbf6ee] text-[#38271d] transition-colors duration-500 dark:bg-[#120c09] dark:text-[#f8eee1]">
      <Header />

      <main>
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative isolate px-5 pb-20 pt-28 sm:px-8 lg:px-12 lg:pb-28 lg:pt-36">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#dca34f]/10 blur-3xl dark:bg-[#dca34f]/5" />

            <div className="absolute right-[-120px] top-10 h-[420px] w-[420px] rounded-full bg-[#8f3424]/10 blur-3xl dark:bg-[#8f3424]/10" />

            <div className="absolute bottom-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#dca34f]/50 to-transparent" />
          </div>

          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* HERO CONTENT */}
            <div className="relative z-10">
              <div
                data-aos="fade-right"
                className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#dca34f]/40 bg-white/50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8f3424] backdrop-blur-md dark:bg-white/[0.04] dark:text-[#dca34f]"
              >
                <span className="h-2 w-2 rounded-full bg-[#dca34f] shadow-[0_0_12px_#dca34f]" />
                ✦ About Vraj Creation
              </div>

              <h1
                data-aos="fade-up"
                className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
              >
                Every Piece Has a Story,{" "}
                <span className="font-serif italic text-[#8f3424] dark:text-[#dca34f]">
                  Every Space
                </span>{" "}
                Deserves Something Special.
              </h1>

              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="mt-8 max-w-2xl text-base leading-8 text-[#735f50] dark:text-[#c7b7a7] sm:text-lg"
              >
                At Vraj Creation, our philosophy is rooted in creativity,
                craftsmanship, quality, and the timeless beauty of Indian art
                and culture. We curate unique handicraft gifts, wall décor,
                table accents, and artistic pieces that bring warmth,
                character, and elegance to your home.
              </p>

              {/* Motto */}
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="mt-7 flex items-center gap-4"
              >
                <div className="h-px w-12 bg-[#dca34f]" />

                <span className="font-serif text-sm italic tracking-[0.15em] text-[#8f3424] dark:text-[#dca34f]">
                  Create • Inspire • Celebrate
                </span>
              </div>

              {/* Buttons */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href="/#collection"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#8f3424] px-7 py-4 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(143,52,36,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#74291d]"
                >
                  Explore Catalog
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <Link
                  to="/gallery"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#8f3424]/25 bg-white/50 px-7 py-4 text-sm font-semibold text-[#8f3424] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#8f3424] dark:border-[#dca34f]/30 dark:bg-white/[0.04] dark:text-[#dca34f]"
                >
                  View Full Gallery
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div
              data-aos="fade-left"
              className="relative mx-auto w-full max-w-[620px]"
            >
              {/* Main image */}
              <div className="relative ml-auto aspect-[0.86] w-[82%] overflow-hidden rounded-[2rem] border border-white/70 bg-white p-2 shadow-[0_35px_80px_rgba(56,39,29,0.15)] dark:border-white/10 dark:bg-[#211611]">
                <div className="relative h-full overflow-hidden rounded-[1.5rem]">
                  <img
                    src={heroImage}
                    alt="Vraj Creation handicraft"
                    className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="rounded-2xl border border-white/20 bg-black/20 p-5 text-white backdrop-blur-xl">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#f0c36b]">
                        Vraj Creation
                      </p>

                      <p className="mt-2 font-serif text-xl italic">
                        Handmade with character.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary image */}
              <div className="absolute bottom-[-35px] left-0 w-[43%] rotate-[-5deg] rounded-[1.5rem] border-[6px] border-[#fbf6ee] bg-white shadow-[0_25px_50px_rgba(56,39,29,0.18)] transition-transform duration-500 hover:rotate-0 dark:border-[#120c09]">
                <div className="aspect-square overflow-hidden rounded-[1rem]">
                  <img
                    src={secondaryHeroImage}
                    alt="Indian handcrafted décor"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute right-[-10px] top-[15%] hidden rounded-2xl border border-[#dca34f]/30 bg-[#fffaf2]/90 p-4 shadow-xl backdrop-blur-xl sm:block dark:bg-[#211611]/90">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#8f3424] text-white">
                    <FiFeather />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8f3424] dark:text-[#dca34f]">
                      Crafted
                    </p>

                    <p className="text-sm font-semibold">
                      With Soul & Art
                    </p>
                  </div>
                </div>
              </div>

              {/* Vertical label */}
              <div className="absolute -right-8 bottom-16 hidden rotate-90 text-[9px] font-bold uppercase tracking-[0.45em] text-[#8f3424]/50 lg:block dark:text-[#dca34f]/50">
                Indian Art • Handmade • Timeless
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SOUL OF OUR CRAFT
        ===================================================== */}
        <section className="relative px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
            {/* IMAGE AREA */}
            <div
              data-aos="fade-right"
              className="relative mx-auto w-full max-w-[580px]"
            >
              <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full border border-[#dca34f]/30" />

              <div className="absolute -bottom-8 -right-8 h-44 w-44 rounded-full border border-[#8f3424]/20" />

              <div className="relative aspect-[0.88] overflow-hidden rounded-[2.5rem] border border-[#dca34f]/20 bg-[#fffaf2] p-3 shadow-[0_30px_70px_rgba(56,39,29,0.13)] dark:bg-[#211611]">
                <div className="relative h-full overflow-hidden rounded-[2rem]">
                  <img
                    src={soulCraftImage}
                    alt="The soul of Vraj Creation craft"
                    className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#120c09]/70 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-xl">
                      <div className="flex items-center gap-2 text-[#f0c36b]">
                        <FiHeart />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">
                          Artisan Authenticity
                        </span>
                      </div>

                      <h3 className="mt-2 font-serif text-2xl italic">
                        Hand-Forged Heritage Metalcraft
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-white/75">
                        Crafted with generational mastery, anti-rust layers,
                        and hand-painted lacquer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating number */}
              <div className="absolute -bottom-7 left-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#8f3424] font-serif text-xl text-white shadow-xl dark:bg-[#dca34f] dark:text-[#211611]">
                01
              </div>
            </div>

            {/* CONTENT */}
            <div data-aos="fade-left">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#8f3424] dark:text-[#dca34f]">
                THE SOUL OF OUR CRAFT
              </span>

              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                More than an object — an expression of{" "}
                <span className="font-serif italic text-[#8f3424] dark:text-[#dca34f]">
                  imagination and tradition.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[#735f50] dark:text-[#c7b7a7]">
                At Vraj Creation, every creation begins with a passion for art,
                creativity, and craftsmanship. We believe that handmade décor
                is more than an object—it is an expression of imagination,
                tradition, and the hands that bring an idea to life. Each piece
                is thoughtfully designed with attention to detail, vibrant
                colours, and a distinctive artistic character. Our aim is to
                bring the beauty of Indian craftsmanship into modern homes while
                creating pieces that feel unique, meaningful, and timeless.
              </p>

              {/* Values */}
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {valuesList.map((value, index) => (
                  <div
                    key={value}
                    className="group flex gap-4 rounded-2xl border border-[#8f3424]/10 bg-white/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#dca34f]/40 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03]"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#8f3424]/10 text-[#8f3424] dark:bg-[#dca34f]/10 dark:text-[#dca34f]">
                      <FiCheck size={16} />
                    </div>

                    <p className="text-sm leading-6 text-[#735f50] dark:text-[#c7b7a7]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="relative mt-10 border-l-2 border-[#dca34f] pl-6">
                <p className="font-serif text-xl italic leading-8 text-[#38271d] dark:text-[#f8eee1]">
                  "The soul of our craft lies in creating something that is not
                  just beautiful to look at, but beautiful to own."
                </p>

                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8f3424] dark:text-[#dca34f]">
                  — Vraj Creation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CRAFT JOURNEY
        ===================================================== */}
        <section className="relative bg-[#f3eadc] px-5 py-24 sm:px-8 lg:px-12 lg:py-32 dark:bg-[#18100c]">
          {/* Decorative background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#dca34f]/40 to-transparent" />

            <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#8f3424]/5 blur-3xl" />

            <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-[#dca34f]/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            {/* Section heading */}
            <div className="mx-auto max-w-3xl text-center">
              <div
                data-aos="fade-up"
                className="mx-auto mb-5 flex w-fit items-center gap-3 text-[10px] font-bold uppercase tracking-[0.35em] text-[#8f3424] dark:text-[#dca34f]"
              >
                <span className="h-px w-8 bg-current" />
                OUR CRAFT JOURNEY
                <span className="h-px w-8 bg-current" />
              </div>

              <h2
                data-aos="fade-up"
                className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl"
              >
                From Raw Material to{" "}
                <span className="font-serif italic text-[#8f3424] dark:text-[#dca34f]">
                  Timeless Art
                </span>
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative mt-20">
              {/* Desktop line */}
              <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-[#dca34f]/50 to-transparent lg:block" />

              <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-7">
                {craftStages.map((stage, index) => {
                  const Icon = stage.icon;

                  return (
                    <article
                      key={stage.number}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      className="group relative"
                    >
                      {/* Number */}
                      <div className="relative z-10 mb-7 flex items-center justify-between">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#dca34f]/40 bg-[#f3eadc] shadow-sm dark:bg-[#18100c]">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8f3424] text-white transition-all duration-500 group-hover:scale-110 dark:bg-[#dca34f] dark:text-[#211611]">
                            <Icon size={19} />
                          </div>
                        </div>

                        <span className="font-serif text-5xl italic text-[#8f3424]/15 dark:text-[#dca34f]/15">
                          {stage.number}
                        </span>
                      </div>

                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#8f3424]/10 bg-white p-2 shadow-[0_20px_40px_rgba(56,39,29,0.08)] dark:border-white/10 dark:bg-[#211611]">
                        <div className="h-full overflow-hidden rounded-2xl">
                          <img
                            src={stage.image}
                            alt={stage.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>

                        <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/25 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                          {stage.badge}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="mt-6">
                        <h3 className="text-xl font-semibold tracking-tight">
                          {stage.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[#735f50] dark:text-[#bfae9e]">
                          {stage.description}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            GUIDING PILLARS
        ===================================================== */}
        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <span
                  data-aos="fade-right"
                  className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#8f3424] dark:text-[#dca34f]"
                >
                  What Guides Us
                </span>

                <h2
                  data-aos="fade-up"
                  className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl"
                >
                  Our Guiding Pillars
                </h2>
              </div>

              <div
                data-aos="fade-left"
                className="hidden h-px max-w-sm flex-1 bg-gradient-to-r from-[#dca34f]/60 to-transparent lg:block"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div
                data-aos="fade-up"
                className="group relative overflow-hidden rounded-[2rem] border border-[#8f3424]/10 bg-[#fffaf2] p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(56,39,29,0.1)] dark:border-white/10 dark:bg-[#211611]"
              >
                <span className="font-serif text-6xl italic text-[#8f3424]/10 dark:text-[#dca34f]/10">
                  01
                </span>

                <FiHeart className="mt-5 text-2xl text-[#8f3424] dark:text-[#dca34f]" />

                <h3 className="mt-5 text-xl font-semibold">
                  Craftsmanship
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#735f50] dark:text-[#bfae9e]">
                  We believe every handmade creation should carry the spirit of
                  the artisan who created it.
                </p>

                <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-[#dca34f]/10 transition-transform duration-500 group-hover:scale-150" />
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="group relative overflow-hidden rounded-[2rem] border border-[#8f3424]/10 bg-[#fffaf2] p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(56,39,29,0.1)] dark:border-white/10 dark:bg-[#211611]"
              >
                <span className="font-serif text-6xl italic text-[#8f3424]/10 dark:text-[#dca34f]/10">
                  02
                </span>

                <FiCompass className="mt-5 text-2xl text-[#8f3424] dark:text-[#dca34f]" />

                <h3 className="mt-5 text-xl font-semibold">Creativity</h3>

                <p className="mt-3 text-sm leading-7 text-[#735f50] dark:text-[#bfae9e]">
                  Traditional inspiration meets fresh ideas to create
                  distinctive artistic pieces.
                </p>

                <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-[#8f3424]/5 transition-transform duration-500 group-hover:scale-150" />
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="group relative overflow-hidden rounded-[2rem] border border-[#8f3424]/10 bg-[#fffaf2] p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(56,39,29,0.1)] dark:border-white/10 dark:bg-[#211611]"
              >
                <span className="font-serif text-6xl italic text-[#8f3424]/10 dark:text-[#dca34f]/10">
                  03
                </span>

                <FiStar className="mt-5 text-2xl text-[#8f3424] dark:text-[#dca34f]" />

                <h3 className="mt-5 text-xl font-semibold">Quality</h3>

                <p className="mt-3 text-sm leading-7 text-[#735f50] dark:text-[#bfae9e]">
                  Every creation is carefully finished and prepared with
                  attention to quality and detail.
                </p>

                <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-[#dca34f]/10 transition-transform duration-500 group-hover:scale-150" />
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="group relative overflow-hidden rounded-[2rem] border border-[#8f3424]/10 bg-[#fffaf2] p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(56,39,29,0.1)] dark:border-white/10 dark:bg-[#211611]"
              >
                <span className="font-serif text-6xl italic text-[#8f3424]/10 dark:text-[#dca34f]/10">
                  04
                </span>

                <FiFeather className="mt-5 text-2xl text-[#8f3424] dark:text-[#dca34f]" />

                <h3 className="mt-5 text-xl font-semibold">Tradition</h3>

                <p className="mt-3 text-sm leading-7 text-[#735f50] dark:text-[#bfae9e]">
                  We celebrate the timeless beauty of Indian art, culture, and
                  handcrafted traditions.
                </p>

                <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-[#8f3424]/5 transition-transform duration-500 group-hover:scale-150" />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
            TEXT KEPT EXACTLY SAME
        ===================================================== */}
        <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#8f3424] px-7 py-14 text-white shadow-[0_30px_70px_rgba(143,52,36,0.25)] sm:px-12 lg:px-20 lg:py-20">
            {/* Decorations */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute -bottom-32 left-[40%] h-80 w-80 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute right-10 top-10 text-8xl font-serif italic text-white/5">
              ✦
            </div>

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div data-aos="fade-right">
                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#f0c36b]">
                  <span className="h-px w-8 bg-[#f0c36b]" />
                  Handcrafted Gifting & Spaces
                </div>

                <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                  Bring Distinctive Indian Craftsmanship Into Your Space
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">
                  Looking for tailored handcrafted sets, festive bulk gifts, or
                  bespoke interior focal points? Get in touch with our studio
                  workshop today.
                </p>
              </div>

              <div
                data-aos="fade-left"
                className="flex flex-col gap-3 sm:flex-row lg:flex-col"
              >
                <a
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#8f3424] transition-all duration-300 hover:-translate-y-1 hover:bg-[#fff5e7]"
                >
                  Contact Studio
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href="https://wa.me/919876543210?text=Hello%20Vraj%20Creation%2C%20I%20would%20like%20to%20know%20more%20about%20your%20handcrafted%20products."
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                >
                  <FiMessageCircle />
                  Chat on WhatsApp
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DiscoverPage;