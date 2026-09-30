"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-30 w-full pt-4 pb-2 px-4 sm:px-8 max-w-7xl mx-auto">
      <nav className="flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-[#CEFF1A] flex items-center justify-center shadow-sm transition-transform duration-200 group-hover:scale-105">
            <div className="w-3.5 h-3.5 rounded-full bg-[#1856F3]" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white flex items-center">
            byte<span className="text-[#CEFF1A]">space</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
          <Link
            href="/"
            className="hover:text-[#CEFF1A] transition-colors duration-150 relative py-1 text-[#CEFF1A] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#CEFF1A]"
          >
            Home
          </Link>
          <Link
            href="#courses"
            className="hover:text-[#CEFF1A] transition-colors duration-150 py-1"
          >
            Courses
          </Link>
          <Link
            href="#about"
            className="hover:text-[#CEFF1A] transition-colors duration-150 py-1"
          >
            About Us
          </Link>
          <Link
            href="#creators"
            className="hover:text-[#CEFF1A] transition-colors duration-150 py-1"
          >
            Teach
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-white hover:text-[#CEFF1A] px-3 py-2 transition-colors duration-150"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center gap-1.5 text-sm font-semibold bg-[#CEFF1A] text-zinc-950 px-5 py-2.5 rounded-full hover:bg-[#bded00] active:scale-95 transition-all duration-150 shadow-md hover:shadow-lime-300/20"
          >
            Sign Up
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 bg-[#0F3CB3]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl z-50 text-white animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4 text-base font-medium">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#CEFF1A] py-1"
            >
              Home
            </Link>
            <Link
              href="#courses"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#CEFF1A] py-1 transition-colors"
            >
              Courses
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#CEFF1A] py-1 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#creators"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#CEFF1A] py-1 transition-colors"
            >
              Teach
            </Link>

            <div className="h-px bg-white/10 my-2" />

            <div className="flex flex-col gap-3">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2 text-white/90 hover:text-white"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center bg-[#CEFF1A] text-zinc-950 font-semibold py-2.5 rounded-full hover:bg-[#bded00]"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
