import { FiCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const FALLBACK_IMAGE =
  "https://via.placeholder.com/800x800?text=Vraj+Creation";

const ProductCard = ({ product, index = 0 }) => {
  const features = Array.isArray(product?.features)
    ? product.features
    : [
        "Handcrafted Finish",
        "Traditional Artistry",
      ];

  const whatsappNumber = "918824968974";

  const productName =
    product?.name || "Handcrafted Product";

  const message = encodeURIComponent(
    `Hello Vraj Creation! I am interested in knowing the price and details for this product: "${productName}".`
  );

  const whatsappUrl =
    `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;

  // =====================================================
  // IMAGE ERROR
  // =====================================================

  const handleImageError = (event) => {
    const image = event.currentTarget;

    if (image.src !== FALLBACK_IMAGE) {
      image.src = FALLBACK_IMAGE;
    }
  };

  return (
    <article
      data-aos="fade-up"
      data-aos-delay={(index % 3) * 80}
      className="
        group relative flex h-full flex-col
        overflow-hidden rounded-[24px]
        border border-[#e7d8c5]
        bg-[#fffdfa]
        transition-all duration-500
        hover:-translate-y-2
        hover:border-[#c59b70]
        hover:shadow-[0_24px_60px_rgba(66,42,25,0.13)]
        dark:border-[#3c2c22]
        dark:bg-[#1b130f]
        dark:hover:border-[#765039]
        dark:hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)]
      "
    >
      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div className="relative p-3">
        <div
          className="
            relative aspect-[1.18/1]
            overflow-hidden rounded-[19px]
            bg-[#eee3d4]
            dark:bg-[#2a1e17]
          "
        >
          {product?.image ? (
            <img
              src={product.image}
              alt={
                productName ||
                "Vraj Creation Handicraft"
              }
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              onError={handleImageError}
              className="
                block h-full w-full
                object-cover
                transition-transform
                duration-700
                ease-out
                will-change-transform
                group-hover:scale-[1.055]
              "
            />
          ) : (
            <div
              className="
                flex h-full items-center justify-center
                text-xs font-bold uppercase
                tracking-[0.2em]
                text-[#806b59]
                dark:text-[#b9a393]
              "
            >
              Vraj Creation
            </div>
          )}

          {/* =================================================
              SOFT IMAGE OVERLAY
          ================================================= */}

          <div
            className="
              pointer-events-none absolute inset-0
              bg-gradient-to-t
              from-black/45
              via-transparent
              to-transparent
            "
          />

          {/* =================================================
              PRODUCT NUMBER
          ================================================= */}

          <span
            className="
              absolute left-3 top-3
              flex h-8 min-w-8
              items-center justify-center
              rounded-full
              bg-[#fffaf2]/95
              px-2
              text-[9px]
              font-extrabold
              tracking-wider
              text-[#8f3424]
              shadow-sm
              backdrop-blur
              dark:bg-[#1b130f]/90
              dark:text-[#dda56c]
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* =================================================
              CATEGORY
          ================================================= */}

          <span
            className="
              absolute bottom-3 left-3
              max-w-[80%]
              truncate
              rounded-full
              border border-white/20
              bg-black/35
              px-3 py-1.5
              text-[9px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-white
              backdrop-blur-md
            "
          >
            {product?.category || "Home Décor"}
          </span>
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="flex flex-1 flex-col px-5 pb-5">

        {/* =================================================
            COLLECTION LABEL
        ================================================= */}

        <div className="mb-2 flex items-center gap-2">
          <span className="h-[2px] w-6 rounded-full bg-[#a96e43]" />

          <span
            className="
              text-[9px]
              font-extrabold
              uppercase
              tracking-[0.2em]
              text-[#9b6844]
              dark:text-[#d29a62]
            "
          >
            Vraj Artisan
          </span>
        </div>

        {/* =================================================
            PRODUCT NAME
        ================================================= */}

        <h3
          title={productName}
          className="
            line-clamp-2
            text-[19px]
            font-extrabold
            leading-[1.3]
            tracking-[-0.015em]
            text-[#38271d]
            transition-colors
            duration-300
            group-hover:text-[#8f3424]
            dark:text-[#f4e5d7]
            dark:group-hover:text-[#dda16d]
          "
        >
          {productName}
        </h3>

        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <p
          className="
            mt-2.5
            line-clamp-3
            text-[12px]
            leading-[1.65]
            text-[#766557]
            dark:text-[#bba99a]
          "
        >
          {product?.description ||
            "A beautifully handcrafted Indian décor piece created by skilled artisans with timeless traditional detailing."}
        </p>

        {/* =====================================================
            FEATURES
        ====================================================== */}

        <div
          className="
            mt-4
            rounded-xl
            bg-[#f8f2e9]
            px-3 py-2.5
            dark:bg-[#251913]
          "
        >
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {features
              .slice(0, 2)
              .map(
                (
                  feature,
                  featureIndex
                ) => (
                  <span
                    key={`${feature}-${featureIndex}`}
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      text-[10px]
                      font-semibold
                      text-[#6f5948]
                      dark:text-[#c9b4a3]
                    "
                  >
                    <span
                      className="
                        flex h-4 w-4
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#ead7c0]
                        dark:bg-[#493326]
                      "
                    >
                      <FiCheck
                        size={9}
                        className="
                          text-[#8f3424]
                          dark:text-[#dca064]
                        "
                      />
                    </span>

                    <span className="line-clamp-1">
                      {feature}
                    </span>
                  </span>
                )
              )}
          </div>
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div
          className="
            mt-4
            flex items-center
            justify-between
            gap-3
            border-t
            border-[#e9ddcf]
            pt-3.5
            dark:border-[#392920]
          "
        >
          {/* ARTISAN INFO */}

          <div className="min-w-0">
            <span
              className="
                block
                text-[8px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#a18d79]
              "
            >
              Crafted With Care
            </span>

            <span
              className="
                mt-0.5
                block
                truncate
                text-[11px]
                font-bold
                text-[#503d2f]
                dark:text-[#dbc8b7]
              "
            >
              Rajasthan Artisan
            </span>
          </div>

          {/* =================================================
              WHATSAPP ENQUIRE
          ================================================= */}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${productName}`}
            className="
              inline-flex
              shrink-0
              items-center
              gap-1.5
              rounded-full
              bg-[#25D366]
              px-3.5
              py-2
              text-[11px]
              font-extrabold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#20b957]
              hover:shadow-[0_8px_20px_rgba(37,211,102,0.25)]
              active:scale-95
            "
          >
            <FaWhatsapp
              size={14}
            />

            <span>
              Enquire
            </span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;