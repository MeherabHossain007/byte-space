"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  // Close mobile menu on ESC key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    },
    [menuOpen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Hide global navbar on standalone auth pages (login / signup)
  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  return (
    <header className="w-full absolute top-0 left-0 right-0 z-40 bg-transparent">
      <nav
        className="site-nav relative z-10 flex items-center justify-between px-6 sm:px-14 lg:px-30 2xl:px-0 h-20 lg:h-30 max-w-360 mx-auto w-full"
        aria-label="Main Navigation"
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-lg"
          aria-label="ByteSpace Home"
        >
          <Image
            src="/logo/Logo.svg"
            alt="ByteSpace Logo"
            width={171}
            height={37}
            priority
            className="h-8 md:h-12 w-auto transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* Center Desktop Navigation Links */}
        <div className="hidden md:flex gap-6 items-center">
          {NAV_LINKS.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`font-satoshi text-base inline-block transition-all duration-100 relative py-1 ${
                  isActive
                    ? "text-nav-text font-medium leading-[1.2] -translate-y-1 hover:translate-y-0"
                    : "text-nav-text hover:font-medium font-normal leading-[1.6] hover:-translate-y-1"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Right Desktop Auth Actions & User Icon */}
        <div className="hidden md:flex gap-6 items-center">
          <Link
            href="/login"
            className="font-satoshi text-nav-text hover:text-secondary text-base leading-6 transition-colors duration-150"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="text-nav-text font-satoshi hover:text-secondary px-6 h-12 rounded-full flex items-center justify-center text-base transition-colors duration-150"
          >
            Join Us
          </Link>

          <Link
            href="/login"
            className="p-1 rounded-full text-nav-text opacity-90 hover:opacity-100 hover:text-secondary transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            aria-label="User Account"
          >
            <Image
              src="/icons/bag-outline.svg"
              alt="Account"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="nav-toggle md:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          data-open={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Mobile Menu Overlay / Drawer */}
        {menuOpen && (
          <>
            {/* Backdrop click to dismiss */}
            <div
              className="fixed inset-0 bg-surface-dark/40 backdrop-blur-xs z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            <div id="mobile-menu" className="mobile-menu md:hidden">
              <div className="flex flex-col gap-3 py-1">
                {NAV_LINKS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-satoshi text-base text-nav-text hover:text-secondary py-1.5 transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="font-satoshi text-base text-nav-text hover:text-secondary py-1.5 transition-colors font-medium"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="bg-secondary hover:bg-secondary-hover text-foreground! font-satoshi font-bold px-5 py-2.5 rounded-full text-center transition-colors text-base mt-1"
                >
                  Join Us
                </Link>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
