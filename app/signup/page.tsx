"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthCardCluster from "@/components/AuthCardCluster";

export default function SignupPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/login");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#1856F3] bg-grid-pattern text-zinc-900 flex flex-col justify-between p-6 sm:p-10 lg:p-12 relative overflow-hidden">
      {/* Top Left Logo */}
      <div className="relative z-20">
        <Link href="/" className="inline-flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-[#CEFF1A] flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
            <div className="w-4 h-4 rounded-full bg-[#1856F3]" />
          </div>
        </Link>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Subtitle & Course Cards Cluster */}
          <div className="lg:col-span-6 text-white space-y-6 max-w-xl">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Sign up and come in
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-blue-100 font-normal leading-relaxed max-w-md">
                The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
              </p>
            </div>

            {/* Visual Course Cards Composition with 3D Shapes */}
            <div className="pt-4 sm:pt-6">
              <AuthCardCluster />
            </div>
          </div>

          {/* Right Column: White Sign Up Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 shadow-2xl max-w-[460px] w-full">
              {/* Header */}
              <div className="mb-6">
                <p className="text-xs sm:text-sm font-semibold text-[#1856F3]">
                  Create an Account
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight leading-tight mt-1">
                  Welcome to <br />
                  ByteSpace
                </h2>
              </div>

              {errorMessage && (
                <div className="mb-4 p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-medium">
                  {errorMessage}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold text-zinc-700 mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Jamie Davis"
                    required
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#1856F3] focus:ring-1 focus:ring-[#1856F3] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-zinc-700 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="designer@example.com"
                    required
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#1856F3] focus:ring-1 focus:ring-[#1856F3] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-xs font-semibold text-zinc-700 mb-1.5"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#1856F3] focus:ring-1 focus:ring-[#1856F3] transition-all"
                  />
                </div>

                {/* Right-aligned Continue Button */}
                <div className="flex justify-end pt-3">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-[#CEFF1A] hover:bg-[#bded00] active:scale-95 text-zinc-950 font-bold px-8 py-2.5 rounded-full text-xs sm:text-sm transition-all shadow-sm disabled:opacity-50 cursor-pointer"
                  >
                    {isLoading ? "Creating Account..." : "Continue"}
                  </button>
                </div>
              </form>

              {/* Bottom Login Link */}
              <p className="mt-14 text-center text-xs text-zinc-500">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-[#1856F3] hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer spacer */}
      <div className="h-4" />
    </div>
  );
}
