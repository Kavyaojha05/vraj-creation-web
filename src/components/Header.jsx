import { useEffect, useState, useRef, useTransition } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiSun,
  FiMoon,
  FiChevronDown,
  FiInstagram,
  FiArrowUpRight,
} from "react-icons/fi";
import { FaPinterestP, FaWhatsapp, FaFacebookF } from "react-icons/fa";

import logoImg from "../assets/products/logo.jpeg";
import { useTheme } from "../context/ThemeContext";
import products from "../data/products";

// Social Media Links
const socialLinks = [
  {
    icon: FiInstagram,
    href: "https://www.instagram.com/vraj_creation_india?igsi=MWN1NTRnN3pyN291Zg==",
    label: "Instagram",
  },
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/profile.php?id=1000...",
    label: "Facebook",
  },
  {
    icon: FaPinterestP,
    href: "https://pin.it/1s54OiO68",
    label: "Pinterest",
  },
  {
    icon: FaWhatsapp,
    href: "https://api.whatsapp.com/send?phone=918824968974&text=Hello%20vraj%20creation%20!%20i%20visited%20your%20webside%20and%20i%20want%20to%20know%20more%20about%20your%20products",
    label: "WhatsApp",
  },
];

const navLinks = [
  { name: "Home", href: "/#top" },
  { name: "About Us", href: "/about", isRoute: true },
  {
    name: "Categories",
    href: "/#categories",
    hasDropdown: true,
    subCategories: [
      { name: "Home Décor", href: "/home-decor" },
      { name: "Wall Décor", href: "/wall-decor" },
      { name: "Table Décor", href: "/table-decor" },
      { name: "Resin Art", href: "/resin-art" },
      { name: "Ethnic Furnishing", href: "/ethnic-home-furnishing" },
      { name: "Desk Accessories", href: "/desk-accessories" },
    ],
  },
  { name: "Gallery", href: "/gallery", isRoute: true },
  { name: "Reviews", href: "/#reviews" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [, startTransition] = useTransition();

  const searchRef = useRef(null);
  const location = useLocation();
  const { darkMode, toggleTheme } = useTheme();

  const isSolidPage = location.pathname !== "/" || scrolled;

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Optimized Search Filtering with Transition
  useEffect(() => {
    const trimmed = searchTerm.trim().toLowerCase();
    if (!trimmed) {
      setSearchResults([]);
      setShowSearchDropdown(false);
      return;
    }

    startTransition(() => {
      const filtered = products
        .filter((p) => {
          const name = (p.name || "").toLowerCase();
          const category = (p.category || "").toLowerCase();
          const desc = (p.description || "").toLowerCase();
          return (
            name.includes(trimmed) ||
            category.includes(trimmed) ||
            desc.includes(trimmed)
          );
        })
        .slice(0, 5);

      setSearchResults(filtered);
      setShowSearchDropdown(true);
    });
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearchDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectProduct = () => {
    setShowSearchDropdown(false);
    setSearchTerm("");
    setOpen(false);
  };

  const textColor = isSolidPage
    ? darkMode
      ? "text-[#f8ead8]"
      : "text-[#3b2416]"
    : "text-white";

  const hoverColor = isSolidPage
    ? darkMode
      ? "hover:text-[#dca34f]"
      : "hover:text-[#8f3424]"
    : "hover:text-[#f2c46d]";

  return (
    <header
      id="top"
      className={`fixed inset-x-0 top-0 z-[100] w-full transition-all duration-300 ${
        isSolidPage
          ? darkMode
            ? "border-b border-[#3b271d] bg-[#140d09]/95 shadow-xl backdrop-blur-md"
            : "border-b border-[#ded0be] bg-[#fffaf3]/95 shadow-[0_4px_25px_rgba(60,35,20,0.08)] backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[58px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="group flex shrink-0 items-center gap-2.5"
        >
          <img
            src={logoImg}
            alt="Vraj Creation Logo"
            className="h-9 w-9 rounded-full border border-[#d4a45c]/80 object-cover shadow-md transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10"
          />

          <div className="flex flex-col leading-none">
            <strong
              className={`text-lg font-extrabold tracking-wider sm:text-xl ${textColor} ${
                !isSolidPage ? "drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]" : ""
              }`}
            >
              VRAJ
            </strong>
            <span
              className={`mt-0.5 text-[7px] font-bold uppercase tracking-[0.32em] sm:text-[8px] ${
                isSolidPage
                  ? darkMode
                    ? "text-[#dca34f]"
                    : "text-[#8f3424]"
                  : "text-[#f2c46d] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
              }`}
            >
              CREATION
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
          {navLinks.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.name}
                className="relative py-4"
                onMouseEnter={() => setCategoryDropdown(true)}
                onMouseLeave={() => setCategoryDropdown(false)}
              >
                <a
                  href={item.href}
                  className={`flex items-center gap-1 text-[13px] font-semibold tracking-wider transition-colors duration-200 ${textColor} ${hoverColor} ${
                    !isSolidPage ? "drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" : ""
                  }`}
                >
                  {item.name}
                  <FiChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${
                      categoryDropdown ? "rotate-180" : ""
                    }`}
                  />
                </a>

                {/* Subcategories Dropdown */}
                {categoryDropdown && (
                  <div
                    className={`absolute left-0 top-full w-56 rounded-xl border p-2 shadow-2xl backdrop-blur-xl ${
                      darkMode
                        ? "border-[#4a3528] bg-[#1a120d]/95 text-[#f5ebd9]"
                        : "border-[#d9c7b1] bg-[#fffaf3]/95 text-[#3b2416]"
                    }`}
                  >
                    {item.subCategories.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        onClick={() => setCategoryDropdown(false)}
                        className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                          darkMode
                            ? "hover:bg-[#281c15] hover:text-[#dca34f]"
                            : "hover:bg-[#f2e6d6] hover:text-[#8f3424]"
                        }`}
                      >
                        <span>{sub.name}</span>
                        <FiArrowUpRight size={12} className="opacity-50" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : item.isRoute ? (
              <Link
                key={item.name}
                to={item.href}
                className={`text-[13px] font-semibold tracking-wider transition-colors duration-200 ${textColor} ${hoverColor} ${
                  location.pathname === item.href
                    ? "text-[#8f3424] dark:text-[#dca34f]"
                    : ""
                } ${!isSolidPage ? "drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" : ""}`}
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className={`text-[13px] font-semibold tracking-wider transition-colors duration-200 ${textColor} ${hoverColor} ${
                  !isSolidPage ? "drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" : ""
                }`}
              >
                {item.name}
              </a>
            )
          )}
        </nav>

        {/* Right Utility Bar */}
        <div className="flex items-center gap-3">
          {/* Live Search Bar */}
          <div ref={searchRef} className="relative hidden sm:block">
            <div
              className={`flex h-[34px] w-[180px] items-center gap-2 rounded-full border px-3 transition-all duration-300 lg:w-[220px] ${
                isSolidPage
                  ? darkMode
                    ? "border-[#4a3528] bg-[#1d140e] text-[#f5ebd9] focus-within:border-[#dca34f]"
                    : "border-[#d8c3ae] bg-white text-[#38271d] focus-within:border-[#8f3424]"
                  : "border-white/40 bg-black/30 text-white backdrop-blur-md focus-within:border-[#f2c46d]"
              }`}
            >
              <FiSearch size={14} className="shrink-0 opacity-70" />
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                aria-label="Search products"
                className="w-full bg-transparent text-xs outline-none placeholder:text-current placeholder:opacity-60"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="text-xs opacity-60 hover:opacity-100"
                >
                  ×
                </button>
              )}
            </div>

            {/* Live Search Results Dropdown */}
            {showSearchDropdown && (
              <div
                className={`absolute right-0 top-[42px] z-50 w-72 overflow-hidden rounded-xl border shadow-2xl backdrop-blur-xl ${
                  darkMode
                    ? "border-[#4a3528] bg-[#1a120d]/98 text-[#f5ebd9]"
                    : "border-[#d9c7b1] bg-[#fffaf3]/98 text-[#3b2416]"
                }`}
              >
                <div className="border-b border-inherit px-3.5 py-2 text-[10px] font-bold uppercase tracking-wider opacity-60">
                  {searchResults.length > 0
                    ? `Matching Products (${searchResults.length})`
                    : "No Results Found"}
                </div>

                {searchResults.length > 0 ? (
                  <div className="max-h-64 divide-y divide-inherit overflow-y-auto">
                    {searchResults.map((item) => (
                      <Link
                        key={item.id}
                        to={`/product/${item.id}`}
                        onClick={handleSelectProduct}
                        className={`flex items-center gap-3 p-2.5 transition-colors ${
                          darkMode
                            ? "hover:bg-[#281c15]"
                            : "hover:bg-[#f2e6d6]"
                        }`}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-9 w-9 shrink-0 rounded-lg object-cover"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-xs font-semibold">
                            {item.name}
                          </p>
                          <span className="text-[10px] opacity-65">
                            {item.category}
                          </span>
                        </div>
                        <FiArrowUpRight size={13} className="opacity-60" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-xs opacity-75">
                    No artifacts found matching "{searchTerm}"
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Social Icons */}
          <div className="hidden items-center gap-2 lg:flex">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`flex h-[32px] w-[32px] items-center justify-center rounded-full border transition-all duration-200 hover:-translate-y-0.5 ${
                  isSolidPage
                    ? darkMode
                      ? "border-[#4a3528] bg-[#1d140e] text-[#f5ebd9] hover:border-[#dca34f] hover:text-[#dca34f]"
                      : "border-[#ded0be] bg-white text-[#38271d] hover:border-[#8f3424] hover:text-[#8f3424]"
                    : "border-white/40 bg-black/25 text-white backdrop-blur-md hover:border-[#f2c46d] hover:text-[#f2c46d]"
                }`}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle visual theme"
            className={`flex h-[32px] w-[32px] items-center justify-center rounded-full border transition-all duration-200 hover:-translate-y-0.5 ${
              isSolidPage
                ? darkMode
                  ? "border-[#4a3528] bg-[#1d140e] text-[#f5dfc2] hover:border-[#dca34f] hover:text-[#dca34f]"
                  : "border-[#ded0be] bg-white text-[#3b2416] hover:border-[#8f3424] hover:text-[#8f3424]"
                : "border-white/40 bg-black/25 text-white backdrop-blur-md hover:border-[#f2c46d] hover:text-[#f2c46d]"
            }`}
          >
            {darkMode ? <FiSun size={14} /> : <FiMoon size={14} />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`flex h-[32px] w-[32px] items-center justify-center rounded-full border transition-all duration-200 lg:hidden ${
              isSolidPage
                ? darkMode
                  ? "border-[#4a3528] bg-[#1d140e] text-[#f5dfc2]"
                  : "border-[#ded0be] bg-white text-[#3b2416]"
                : "border-white/40 bg-black/25 text-white backdrop-blur-md"
            }`}
          >
            {open ? <FiX size={16} /> : <FiMenu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div
          className={`absolute left-0 right-0 top-[58px] max-h-[calc(100vh-60px)] overflow-y-auto border-b shadow-2xl backdrop-blur-xl lg:hidden ${
            darkMode
              ? "border-[#3e2a1e] bg-[#140d09]/98 text-[#f0dfcd]"
              : "border-[#ded0be] bg-[#fffaf3]/98 text-[#3b2416]"
          }`}
        >
          <div className="mx-auto max-w-7xl px-5 py-4">
            {/* Mobile Search Input */}
            <div
              className={`flex h-10 items-center gap-2 rounded-xl border px-3 ${
                darkMode
                  ? "border-[#4a3528] bg-[#1c120c]"
                  : "border-[#ded0be] bg-white"
              }`}
            >
              <FiSearch size={15} className="opacity-60" />
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="w-full bg-transparent text-xs font-medium outline-none placeholder:text-current placeholder:opacity-50"
              />
            </div>

            {/* Mobile Search Results */}
            {searchTerm.trim() && (
              <div className="mt-2 max-h-48 overflow-y-auto rounded-lg border border-inherit bg-black/5 p-2 dark:bg-white/5">
                {searchResults.length > 0 ? (
                  searchResults.map((item) => (
                    <Link
                      key={item.id}
                      to={`/product/${item.id}`}
                      onClick={handleSelectProduct}
                      className="flex items-center gap-2.5 py-1.5 text-xs font-semibold hover:text-[#8f3424] dark:hover:text-[#dca34f]"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-7 w-7 rounded-md object-cover"
                      />
                      <span className="truncate">{item.name}</span>
                    </Link>
                  ))
                ) : (
                  <p className="py-2 text-center text-xs opacity-70">
                    No matching products
                  </p>
                )}
              </div>
            )}

            {/* Mobile Navigation Links */}
            <nav className="mt-3 flex flex-col divide-y divide-inherit">
              {navLinks.map((item) =>
                item.hasDropdown ? (
                  <div key={item.name} className="py-2">
                    <button
                      type="button"
                      onClick={() => setMobileCategoriesOpen((prev) => !prev)}
                      className="flex w-full items-center justify-between py-2 text-xs font-bold uppercase tracking-wider text-inherit"
                    >
                      <span>{item.name}</span>
                      <FiChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          mobileCategoriesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileCategoriesOpen && (
                      <div className="ml-3 mt-1 flex flex-col space-y-1.5 border-l-2 border-[#8f3424] pl-3 dark:border-[#dca34f]">
                        {item.subCategories.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            onClick={() => setOpen(false)}
                            className="py-1 text-xs font-medium text-inherit hover:text-[#8f3424] dark:hover:text-[#dca34f]"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3 text-xs font-bold uppercase tracking-wider transition-colors hover:text-[#8f3424] dark:hover:text-[#dca34f]"
                  >
                    <span>{item.name}</span>
                    <FiArrowUpRight size={13} className="opacity-50" />
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3 text-xs font-bold uppercase tracking-wider transition-colors hover:text-[#8f3424] dark:hover:text-[#dca34f]"
                  >
                    <span>{item.name}</span>
                    <FiArrowUpRight size={13} className="opacity-50" />
                  </a>
                )
              )}
            </nav>

            {/* Mobile Social Links */}
            <div className="mt-4 flex items-center justify-center gap-4 border-t border-inherit pt-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-inherit text-sm transition-transform hover:scale-110"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}