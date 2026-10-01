"use client";

import { useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected client exceptions
    console.error("Application error captured:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-primary bg-grid-pattern text-primary-foreground flex flex-col items-center justify-center px-6 py-24 text-center">
      <div className="max-w-md w-full bg-card text-foreground rounded-3xl p-8 sm:p-10 border border-card-border shadow-2xl flex flex-col items-center gap-4">
        <span className="font-heading font-extrabold text-5xl text-error leading-none">
          Oops!
        </span>
        <h1 className="font-heading font-semibold text-2xl text-heading">
          Something went wrong
        </h1>
        <p className="font-satoshi text-muted text-sm sm:text-base leading-relaxed">
          An unexpected error occurred while loading this page. You can try again
          or return to the homepage.
        </p>

        <div className="mt-4 flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
          <Button
            variant="secondary"
            size="md"
            onClick={() => reset()}
            className="w-full sm:w-auto"
          >
            Try Again
          </Button>
          <Link href="/" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="md"
              className="w-full sm:w-auto text-heading border-border hover:bg-surface"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
