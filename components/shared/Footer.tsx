"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { FOOTER_COLUMNS, LEGAL_LINKS } from "@/lib/constants";
import { isValidEmail } from "@/lib/utils/validation";

export default function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <footer className="bg-background text-footer-text font-satoshi pt-16 sm:pt-20 pb-12 w-full">
      <div className="max-w-360 mx-auto px-6 sm:px-12 lg:px-30 2xl:px-0">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-6 space-y-4">
            {/* Logo */}
            <Link
              href="/"
              className="inline-block group"
              aria-label="ByteSpace Home"
            >
              <Image
                src="/logo/Logo-dark.svg"
                alt="ByteSpace Logo"
                width={171}
                height={37}
                priority
                className="h-8 sm:h-9 w-auto transition-transform duration-200 group-hover:scale-105"
              />
            </Link>

            {/* Subtitle */}
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Newsletter Subscription Form */}
            <form onSubmit={handleSubmit} className="pt-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  containerClassName="w-full"
                />
                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  className="px-8 text-sm"
                >
                  {submitted ? "Subscribed" : "Search"}
                </Button>
              </div>
              {error && (
                <p className="text-xs text-error mt-1.5 font-medium">{error}</p>
              )}

              {/* Legal Notice */}
              <p className="text-xs text-muted mt-3 leading-relaxed max-w-md">
                By subscribing, you agree to our{" "}
                <Link
                  href="#"
                  className="underline hover:text-heading transition-colors"
                >
                  Privacy Policy
                </Link>{" "}
                and consent to receive updates from our company.
              </p>
            </form>
          </div>

          {/* Right Column: 3 Link Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-2">
            {FOOTER_COLUMNS.map((col, colIdx) => (
              <ul key={colIdx} className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-body hover:text-primary transition-colors block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-muted-foreground">
          <p>@ {new Date().getFullYear()} ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6 sm:gap-8">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
