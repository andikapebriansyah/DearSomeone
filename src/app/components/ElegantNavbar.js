"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function ElegantNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("CURAHKAN");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "CURAHKAN", href: "/" },
    { label: "ARUNGI", href: "/arungi" },
    { label: "JEJAK", href: "/jejak" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = (itemLabel) => {
    setActiveItem(itemLabel);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
        ${isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-xl border-b border-gray-100/50"
          : "bg-transparent"}
      `}
    >
      {/* Subtle gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-white/5 to-transparent transition-opacity duration-500 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Container */}
      <div className="relative max-w-screen-xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between min-h-[60px]">
          {/* Brand/Logo - Left */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="group flex items-center"
              onClick={() => setActiveItem("CURAHKAN")}
            >
              <span className="text-3xl font-serif text-[#2c2a28] group-hover:text-[#d4a373] transition-all duration-300 whitespace-nowrap">
                DearSomeone
              </span>
            </Link>
          </div>

          {/* Navigation Menu - Center */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-center space-x-2 bg-white/95 backdrop-blur-md rounded-2xl px-3 py-3 shadow-2xl border border-gray-100/50 ring-1 ring-gray-200/20">
              {menuItems.map((item) => {
                const isActive = activeItem === item.label;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => handleMenuClick(item.label)}
                    className={`
                      relative px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ease-out min-w-[110px] text-center group
                      ${
                        isActive
                          ? "bg-gradient-to-r from-[#2c2a28] to-[#3a3936] text-white shadow-lg transform scale-105 ring-2 ring-[#2c2a28]/20"
                          : "text-[#2c2a28] hover:bg-gradient-to-r hover:from-[#f8f6f0] hover:to-[#f5f0e6] hover:text-[#d4a373] hover:shadow-md hover:scale-102"
                      }
                    `}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#d4a373]/20 to-transparent rounded-xl" />
                    )}
                    {!isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#d4a373]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Support Button - Right */}
          <div className="flex-shrink-0">
            <button className="group px-6 py-3 rounded-xl text-sm font-semibold text-[#2c2a28] hover:bg-gradient-to-r hover:from-[#f8f6f0] hover:to-[#f5f0e6] hover:text-[#d4a373] transition-all duration-300 hover:shadow-md transform hover:scale-105 whitespace-nowrap">
              <span className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75 9.75 9.75 0 019.75-9.75z"
                  />
                </svg>
                <span>Support</span>
              </span>
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden flex items-center justify-between min-h-[60px]">
          {/* Brand/Logo for Mobile */}
          <div className="flex-1">
            <Link
              href="/"
              className="group flex items-center"
              onClick={() => setActiveItem("CURAHKAN")}
            >
              <span className="text-2xl font-serif text-[#2c2a28] group-hover:text-[#d4a373] transition-all duration-300">
                DearSomeone
              </span>
            </Link>
          </div>

          {/* Support Button for Mobile */}
          <div className="flex items-center space-x-4">
            <button className="group px-4 py-2 rounded-lg text-sm font-medium text-[#2c2a28] hover:text-[#d4a373] transition-all duration-300">
              <span className="flex items-center space-x-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75 9.75 9.75 0 019.75-9.75z"
                  />
                </svg>
                <span className="hidden sm:inline">Support</span>
              </span>
            </button>

            {/* Burger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="group p-2 rounded-lg hover:bg-[#f8f6f0] transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6 flex flex-col justify-center">
                <span
                  className={`block h-0.5 w-6 bg-[#2c2a28] transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-0"
                      : "-translate-y-1.5"
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-[#2c2a28] transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-[#2c2a28] transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "-rotate-45 -translate-y-0"
                      : "translate-y-1.5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 pb-2">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl px-4 py-4 shadow-2xl border border-gray-100/50 ring-1 ring-gray-200/20">
              <div className="flex flex-col space-y-2">
                {menuItems.map((item) => {
                  const isActive = activeItem === item.label;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => handleMenuClick(item.label)}
                      className={`
                        relative px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 ease-out text-center group
                        ${
                          isActive
                            ? "bg-gradient-to-r from-[#2c2a28] to-[#3a3936] text-white shadow-lg ring-2 ring-[#2c2a28]/20"
                            : "text-[#2c2a28] hover:bg-gradient-to-r hover:from-[#f8f6f0] hover:to-[#f5f0e6] hover:text-[#d4a373] hover:shadow-md"
                        }
                      `}
                    >
                      <span className="relative z-10">{item.label}</span>
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-[#d4a373]/20 to-transparent rounded-xl" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200/50 to-transparent transition-opacity duration-500 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />
    </nav>
  );
}
