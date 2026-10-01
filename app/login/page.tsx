"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthCardCluster from "@/components/ui/cards/AuthCardCluster";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

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
    <main className="relative min-h-dvh overflow-hidden bg-primary bg-grid-pattern text-foreground">
      <div className="relative mx-auto w-[calc(100%-40px)] max-w-299 pb-12 sm:w-5/6 lg:pb-30">
        {/* Header with customized Logo icon */}
        <header className="flex h-25 items-start pt-8.75 lg:h-30">
          <Image
            src="/logo/Logo-icon.svg"
            alt="Logo"
            width={100}
            height={100}
            className="w-8 h-9"
          />
        </header>

        {/* 2-column Grid */}
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,475fr)_minmax(0,579fr)] lg:gap-x-[12%]">
          {/* Left Column: Heading, Subtitle & Course Artwork Cluster */}
          <section className="relative text-nav-text">
            <h2 className="font-heading text-xl font-semibold leading-tight tracking-[-0.2px]">
              Sign in with ease
            </h2>
            <p className="mt-4 max-w-118.75 text-lg leading-tight text-hero-muted/90 font-normal">
              Experience a seamless and efficient sign-in process that grants
              you instant access to a world of knowledge.
            </p>
            <div className="mt-8 lg:mt-12 w-full text-foreground max-w-125">
              <AuthCardCluster />
            </div>
          </section>

          {/* Right Column: White Sign In Card */}
          <section
            aria-labelledby="auth-title"
            className="flex min-h-162.5 flex-col rounded-3xl bg-card px-7 pt-10 pb-10 sm:px-[10.88%] sm:pt-15.25 lg:min-h-196 shadow-2xl border border-card-border"
          >
            <div>
              <p className="text-lg leading-tight text-primary font-medium">
                Sign In
              </p>
              <h1
                id="auth-title"
                className="font-heading text-[clamp(32px,3.06vw,44px)] font-semibold leading-tight tracking-[-0.44px] text-heading mt-1"
              >
                Welcome Back
              </h1>
            </div>

            {errorMessage && (
              <div className="mt-4 p-3 rounded-xl bg-error-bg border border-error-border text-error text-xs font-medium">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-tight text-heading"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="designer@example.com"
                  autoComplete="email"
                  required
                  containerClassName="h-13 w-full !rounded-xl"
                  className="text-base"
                />
              </div>

              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium leading-tight text-heading"
                >
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                  containerClassName="h-13 w-full !rounded-xl"
                  className="text-base"
                />
              </div>

              <div className="flex justify-end pt-2">
                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  disabled={isLoading}
                  className="px-8 text-lg"
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>
              </div>
            </form>

            {/* Social Logins & Divider */}
            <div className="mt-auto pt-14">
              <div className="relative my-6">
                <div className="border-t border-card-border" />
                <span className="absolute left-1/2 -translate-x-1/2 -top-2.5 bg-card px-3 text-base text-muted font-normal">
                  or
                </span>
              </div>

              <div className="mt-8 flex justify-center gap-4">
                {/* Facebook Button */}
                <button
                  type="button"
                  aria-label="Sign in with Facebook"
                  onClick={() => alert("Facebook sign-in simulation")}
                  className="flex size-18 cursor-pointer items-center justify-center rounded-3xl border border-[#d1d1d1] transition-all hover:border-primary hover:bg-surface shadow-xs active:scale-95"
                >
                  <svg className="size-6 fill-heading" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>

                {/* Google Button */}
                <button
                  type="button"
                  aria-label="Sign in with Google"
                  onClick={() => alert("Google sign-in simulation")}
                  className="flex size-18 cursor-pointer items-center justify-center rounded-3xl border border-[#d1d1d1] transition-all hover:border-primary hover:bg-surface shadow-xs active:scale-95"
                >
                  <svg className="size-6 fill-heading" viewBox="0 0 24 24">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                  </svg>
                </button>
              </div>
            </div>

            <p className="mt-18.5 text-center text-[16px] leading-[1.6] text-muted">
              New user?{" "}
              <Link
                href="/signup"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Create an account
              </Link>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
