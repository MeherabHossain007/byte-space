"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-white border-t border-zinc-200/90 pt-16 pb-12 text-zinc-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-zinc-100">
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-5 space-y-4">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-[#CEFF1A] flex items-center justify-center shadow-sm">
                <div className="w-3.5 h-3.5 rounded-full bg-[#1856F3]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-zinc-900">
                byte<span className="text-[#1856F3]">space</span>
              </span>
            </Link>

            <p className="text-sm text-zinc-500 max-w-sm">
              The modern learning platform for ambitious minds. Acquire job-ready skills,
              connect with world-class mentors, and advance your career today.
            </p>

            {/* Newsletter Input Form */}
            <form onSubmit={handleSubscribe} className="pt-2 max-w-md">
              <div className="flex items-center gap-2 bg-zinc-50 border border-zinc-200 rounded-full p-1.5 focus-within:ring-2 focus-within:ring-[#1856F3] transition-all">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-transparent px-3 py-2 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#CEFF1A] hover:bg-[#bded00] active:scale-95 text-zinc-950 font-bold px-5 py-2.5 rounded-full text-xs transition-colors shadow-sm flex-shrink-0"
                >
                  {subscribed ? (
                    <span className="flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Subscribed
                    </span>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </div>
              <p className="text-[11px] text-zinc-400 mt-2 pl-2">
                By subscribing you agree with our{" "}
                <Link href="#" className="underline hover:text-zinc-600">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </div>

          {/* Nav Links Column 1: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-[#1856F3] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-[#1856F3] transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#1856F3] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#creators" className="hover:text-[#1856F3] transition-colors">
                  Teach on ByteSpace
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-[#1856F3] transition-colors">
                  Student Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Links Column 2: Explore */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="#courses" className="hover:text-[#1856F3] transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-[#1856F3] transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-[#1856F3] transition-colors">
                  Data Science
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-[#1856F3] transition-colors">
                  Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-[#1856F3] transition-colors">
                  AI & Machine Learning
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Links Column 3: Company */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="#" className="hover:text-[#1856F3] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#1856F3] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#1856F3] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#1856F3] transition-colors">
                  Support & Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#1856F3] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} ByteSpace Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-zinc-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-zinc-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-zinc-600 transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
