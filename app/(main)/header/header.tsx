"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-[#12002b] text-white shadow-md">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-10 lg:px-12 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wider text-purple-300">
          Σ
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12 text-sm font-medium">
          <Link href="/" className="hover:text-purple-400 transition-colors">
            Home
          </Link>
          <Link href="/" className="hover:text-purple-400 transition-colors">
            Project
          </Link>
          <Link href="/" className="hover:text-purple-400 transition-colors">
            Lab
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#0b0217] border-t border-purple-900/30 px-6 py-5 space-y-4 animate-fadeIn">
          <Link
            href="/"
            className="block hover:text-purple-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/"
            className="block hover:text-purple-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Project
          </Link>
          <Link
            href="/"
            className="block hover:text-purple-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Lab
          </Link>
        </div>
      )}
    </header>
  )
}
