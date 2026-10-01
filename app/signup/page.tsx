"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthCardCluster from "@/components/ui/cards/AuthCardCluster";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

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
            <h2 className="font-heading text-[20px] font-semibold leading-[1.2] tracking-[-0.2px]">
              Sign up and come in
            </h2>
            <p className="mt-4 max-w-118.75 text-[18px] leading-[1.6] text-hero-muted/90 font-normal">
              The registration process is straightforward, uncomplicated, and
              efficient, allowing users to sign up quickly, easily, and at no
              cost
            </p>
            <div className="mt-8 lg:mt-12 w-full text-foreground max-w-125">
              <AuthCardCluster />
            </div>
          </section>

          {/* Right Column: White Sign Up Card */}
          <section
            aria-labelledby="auth-title"
            className="flex min-h-162.5 flex-col rounded-3xl bg-card px-7 pt-10 pb-10 sm:px-[10.88%] sm:pt-15.25 lg:min-h-196 shadow-2xl border border-card-border"
          >
            <div>
              <p className="text-[18px] leading-[1.6] text-primary font-medium">
                Create an Account
              </p>
              <h1
                id="auth-title"
                className="font-heading text-[clamp(32px,3.06vw,44px)] font-semibold leading-[1.2] tracking-[-0.44px] text-heading mt-1"
              >
                Welcome to <br />
                ByteSpace
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
                  htmlFor="fullName"
                  className="text-[14px] font-medium leading-[1.2] text-heading"
                >
                  Full Name
                </label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jamie Davis"
                  autoComplete="name"
                  required
                  containerClassName="h-13 w-full !rounded-xl"
                  className="text-base"
                />
              </div>

              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-[14px] font-medium leading-[1.2] text-heading"
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
                  className="text-[14px] font-medium leading-[1.2] text-heading"
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
                  autoComplete="new-password"
                  minLength={8}
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
                  {isLoading ? "Creating Account..." : "Continue"}
                </Button>
              </div>
            </form>

            <p className="mt-auto pt-16 text-center text-[16px] leading-[1.6] text-muted">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Login
              </Link>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
