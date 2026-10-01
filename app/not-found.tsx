import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-primary bg-grid-pattern text-primary-foreground flex flex-col items-center justify-center px-6 py-24 text-center">
      <div className="relative mx-auto flex max-w-360 w-full flex-col items-center justify-center">
        {/* Large 404 gradient number */}
        <p
          aria-label="Error 404"
          className="select-none bg-[linear-gradient(180deg,#d4fb20_0%,rgba(212,251,32,0.96)_25%,rgba(212,251,32,0.81)_50.5%,rgba(212,251,32,0.61)_68%,rgba(255,255,255,0)_100%)] bg-clip-text font-heading text-[clamp(160px,30vw,440px)] font-bold leading-none tracking-[-0.01em] text-transparent"
        >
          404
        </p>

        {/* Text and CTA overlapping the 404 bottom gradient */}
        <div className="relative -mt-[clamp(36px,7.5vw,110px)] flex w-full flex-col items-center gap-6 sm:gap-7 z-10">
          <h1 className="max-w-4xl font-heading text-[clamp(32px,4.5vw,64px)] font-bold leading-[1.2] tracking-tight text-white">
            The page you are looking for doesn’t exist
          </h1>
          <p className="max-w-xl font-satoshi text-base sm:text-lg text-white/80 font-normal leading-relaxed">
            Try to use a correct url or go back to homepage to start again
          </p>
          <div className="mt-2">
            <Link href="/">
              <Button variant="secondary" size="lg">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
