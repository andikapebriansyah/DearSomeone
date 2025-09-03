"use client";

import Link from "next/link";
import { useState } from "react";

export default function PillNav({
  items = [],
  activeHref = "/",
  className = "",
  ease = "power2.easeOut",
  baseColor = "#2c2a28",
  pillColor = "#f5f0e6",
  hoveredPillTextColor = "#d4a373",
  pillTextColor = "#2c2a28",
}) {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <nav className={`w-full px-6 py-4 bg-[#FAF3E0] border-b border-gray-200 ${className}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Brand - Kiri */}
        <Link 
          href="/" 
          className="text-2xl font-serif font-bold text-[#2c2a28] hover:text-[#d4a373] transition-colors duration-200"
        >
          DearSomeone
        </Link>

        {/* Navigation Menu - Tengah */}
        <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-gray-200">
          {items.map((item, index) => {
            const isActive = activeHref === item.href;
            const isHovered = hoveredItem === index;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out
                  ${isActive 
                    ? 'bg-[#2c2a28] text-white shadow-md' 
                    : isHovered 
                      ? 'bg-[#f5f0e6] text-[#d4a373]' 
                      : 'text-[#2c2a28] hover:text-[#d4a373]'
                  }
                `}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Right Side - bisa digunakan untuk profile/settings */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full text-[#2c2a28] hover:bg-[#f5f0e6] transition-colors duration-200">
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
