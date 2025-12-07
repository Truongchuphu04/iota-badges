"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "🏠 Home", icon: "🏠" },
    { href: "/profile", label: "👤 Profile", icon: "👤" },
    { href: "/admin", label: "🛡️ Admin", icon: "🛡️" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-xl border-b border-slate-700/50 z-40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-lg sm:text-xl font-bold text-white group-hover:shadow-lg group-hover:shadow-violet-500/50 transition-all">
              🎁
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-bold text-sm sm:text-lg">IOTA Badges</p>
              <p className="text-slate-400 text-xs">Community Contributions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  isActive(item.href)
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-500/50"
                    : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-700/50 text-slate-300 hover:text-white transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-slate-700/50 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-semibold transition-all ${
                  isActive(item.href)
                    ? "bg-violet-600 text-white"
                    : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
