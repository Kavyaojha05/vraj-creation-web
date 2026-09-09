import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import "swiper/css";
import "swiper/css/effect-fade";

import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";

// =====================================================
// HERO SLIDES
// =====================================================

const slides = [
  {
    video: video1,
    tag: "VRAJ CREATION INDIA",
    tagSub: "Handcrafted • Traditional • Unique",
    title: "Where Indian Tradition",
    highlight: "Meets Modern Décor.",
    desc:
      "Handcrafted wall décor, table décor, artistic figurines & unique gifting pieces inspired by the rich heritage of India.",
    btnText: "DISCOVER VRAJ CREATION",
    btnHref: "/discover",
  },

  {
    video: video2,
    tag: "BEAUTIFUL SPACES START WITH BEAUTIFUL DETAILS",
    tagSub: "Art • Décor • Craftsmanship",
    title: "Decorate Your Space.",
    highlight: "Celebrate Indian Art.",
    desc:
      "Unique wall décor, table décor and handcrafted creations designed to bring warmth, character and beauty to your space.",
    btnText: "DISCOVER VRAJ CREATION",
    btnHref: "/discover",
  },

  {
    video: video3,
    tag: "HANDCRAFTED ART",
    tagSub: "Musician Figures • Tea Light Holders",
    title: "Light Up Your Space",
    highlight: "With Indian Art.",
    desc:
      "Beautifully crafted musician figure tea light holders that add warmth, character and an artistic touch to your décor.",
    btnText: "DISCOVER VRAJ CREATION",
    btnHref: "/discover",
  },
];

// =====================================================
// HERO SLIDER
// =====================================================

export default function HeroSlider() {
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);

  return (
    <section className="relative h-[100svh] min-h-[580px] w-full overflow-hidden bg-black">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        loop={true}
        speed={700}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        onSlideChange={(swiper) => {
          setActive(swiper.realIndex);
        }}
        className="!h-full !w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="relative !h-full !w-full overflow-hidden"
          >
            {/* =====================================================
                BACKGROUND VIDEO
            ===================================================== */}
            <video
              src={slide.video}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
                brightness-[0.92]
                contrast-[1.05]
              "
            />

            {/* =====================================================
                LEFT DARK OVERLAY
            ===================================================== */}
            <div
              className="
                absolute
                inset-0
                z-10
                bg-gradient-to-r
                from-black/80
                via-black/35
                to-transparent
              "
            />

            {/* =====================================================
                BOTTOM OVERLAY
            ===================================================== */}
            <div
              className="
                absolute
                inset-x-0
                bottom-0
                z-10
                h-32
                bg-gradient-to-t
                from-black/60
                to-transparent
              "
            />

            {/* =====================================================
                CONTENT
            ===================================================== */}
            <div className="relative z-20 flex h-full w-full items-center">
              <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
                <div className="max-w-2xl text-left">

                  {/* =================================================
                      TAG
                  ================================================= */}
                  <div className="mb-3.5 flex flex-col gap-1">
                    <span
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.25em]
                        text-[#e5b567]
                        drop-shadow-sm
                        sm:text-xs
                      "
                    >
                      ✦ {slide.tag}
                    </span>

                    {slide.tagSub && (
                      <span
                        className="
                          text-[10px]
                          font-medium
                          tracking-[0.18em]
                          text-[#f0dfcd]/80
                          sm:text-[11px]
                        "
                      >
                        {slide.tagSub}
                      </span>
                    )}
                  </div>

                  {/* =================================================
                      TITLE
                  ================================================= */}
                  <h1
                    className="
                      mb-4
                      text-3xl
                      font-extrabold
                      leading-tight
                      text-white
                      drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
                      sm:text-5xl
                      lg:text-6xl
                    "
                  >
                    <span className="block">
                      {slide.title}
                    </span>

                    <span
                      className="
                        mt-1
                        block
                        bg-gradient-to-r
                        from-[#ffd89b]
                        to-[#e5a054]
                        bg-clip-text
                        text-transparent
                      "
                    >
                      {slide.highlight}
                    </span>
                  </h1>

                  {/* =================================================
                      DESCRIPTION
                  ================================================= */}
                  <p
                    className="
                      mb-7
                      max-w-xl
                      text-sm
                      leading-relaxed
                      text-[#f0dfcd]
                      drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]
                      sm:text-base
                    "
                  >
                    {slide.desc}
                  </p>

                  {/* =================================================
                      BUTTON
                  ================================================= */}
                  <div className="flex items-center">
                    <Link
                      to={slide.btnHref}
                      className="
                        group
                        inline-flex
                        items-center
                        gap-2.5
                        rounded-full
                        bg-[#8f3424]
                        px-6
                        py-3.5
                        text-xs
                        font-bold
                        uppercase
                        tracking-wider
                        text-white
                        shadow-lg
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-[#a83d29]
                        hover:shadow-xl
                        active:scale-95
                        sm:px-7
                        sm:text-sm
                      "
                    >
                      <span>{slide.btnText}</span>

                      <FiArrowRight
                        size={16}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* =====================================================
          PREVIOUS BUTTON
      ===================================================== */}
      <button
        type="button"
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label="Previous slide"
        className="
          absolute
          left-6
          top-1/2
          z-30
          hidden
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/25
          bg-black/35
          p-2.5
          text-white
          backdrop-blur-sm
          transition-all
          duration-300
          hover:border-[#8f3424]
          hover:bg-[#8f3424]
          sm:flex
        "
      >
        <FiChevronLeft size={20} />
      </button>

      {/* =====================================================
          NEXT BUTTON
      ===================================================== */}
      <button
        type="button"
        onClick={() => swiperRef.current?.slideNext()}
        aria-label="Next slide"
        className="
          absolute
          right-6
          top-1/2
          z-30
          hidden
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/25
          bg-black/35
          p-2.5
          text-white
          backdrop-blur-sm
          transition-all
          duration-300
          hover:border-[#8f3424]
          hover:bg-[#8f3424]
          sm:flex
        "
      >
        <FiChevronRight size={20} />
      </button>

      {/* =====================================================
          SLIDE INDICATORS
      ===================================================== */}
      <div
        className="
          absolute
          bottom-8
          left-6
          right-6
          z-30
          flex
          items-center
          justify-between
          sm:left-12
          sm:right-12
        "
      >
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() =>
                swiperRef.current?.slideToLoop(index)
              }
              aria-label={`Go to slide ${index + 1}`}
              aria-current={
                active === index ? "true" : undefined
              }
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300
                ${
                  active === index
                    ? "w-8 bg-[#e5b567]"
                    : "w-3 bg-white/40 hover:bg-white/70"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}