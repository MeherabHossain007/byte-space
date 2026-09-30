"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthCardCluster from "@/components/AuthCardCluster";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/");
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
                Sign in with ease
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-blue-100 font-normal leading-relaxed max-w-md">
                Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
              </p>
            </div>

            {/* Visual Course Cards Composition with 3D Shapes */}
            <div className="pt-4 sm:pt-6">
              <AuthCardCluster />
            </div>
          </div>

          {/* Right Column: White Sign In Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 shadow-2xl max-w-[460px] w-full">
              {/* Header */}
              <div className="mb-6">
                <p className="text-xs sm:text-sm font-semibold text-[#1856F3]">
                  Sign In
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight mt-1">
                  Welcome Back
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

                {/* Right-aligned Sign In Button */}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-[#CEFF1A] hover:bg-[#bded00] active:scale-95 text-zinc-950 font-bold px-8 py-2.5 rounded-full text-xs sm:text-sm transition-all shadow-sm disabled:opacity-50 cursor-pointer"
                  >
                    {isLoading ? "Signing In..." : "Sign In"}
                  </button>
                </div>
              </form>

              {/* Or Divider */}
              <div className="relative my-8">
                <div className="border-t border-zinc-200" />
                <span className="absolute left-1/2 -translate-x-1/2 -top-2.5 bg-white px-3 text-xs text-zinc-400 font-medium">
                  or
                </span>
              </div>

              {/* Social Login: Facebook & Google */}
              <div className="flex items-center justify-center gap-4">
                {/* Facebook Button */}
                <button
                  type="button"
                  onClick={() => alert("Facebook login simulated")}
                  className="w-13 h-13 rounded-full border border-zinc-200 bg-white flex items-center justify-center hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-xs"
                  aria-label="Sign in with Facebook"
                >
                  <svg className="w-5 h-5 fill-zinc-950" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>

                {/* Google Button */}
                <button
                  type="button"
                  onClick={() => alert("Google login simulated")}
                  className="w-13 h-13 rounded-full border border-zinc-200 bg-white flex items-center justify-center hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-xs"
                  aria-label="Sign in with Google"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                </button>
              </div>

              {/* Bottom New User Link */}
              <p className="mt-8 text-center text-xs text-zinc-500">
                New user?{" "}
                <Link
                  href="/signup"
                  className="font-semibold text-[#1856F3] hover:underline"
                >
                  Create an account
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
