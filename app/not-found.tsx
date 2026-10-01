import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-primary bg-grid-pattern text-primary-foreground flex flex-col items-center justify-center px-6 py-24 text-center">
      <div className="max-w-md w-full flex flex-col items-center gap-6">
        <Link href="/" className="inline-flex items-center gap-2 mb-2">
          <Image
            src="/logo/Logo-icon.svg"
            alt="ByteSpace Logo"
            width={48}
            height={48}
            className="w-10 h-10"
          />
          <span className="font-heading font-bold text-2xl tracking-tight text-primary-foreground">
            ByteSpace
          </span>
        </Link>

        <div className="bg-card text-foreground rounded-3xl p-8 sm:p-10 border border-card-border shadow-2xl w-full flex flex-col items-center gap-4">
          <span className="font-heading font-extrabold text-6xl text-primary leading-none">
            404
          </span>
          <h1 className="font-heading font-semibold text-2xl sm:text-3xl text-heading">
            Page Not Found
          </h1>
          <p className="font-satoshi text-muted text-sm sm:text-base leading-relaxed">
            The page you are looking for doesn&apos;t exist, was removed, or is
            temporarily unavailable.
          </p>

          <div className="mt-4 w-full flex justify-center">
            <Link href="/" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Back to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
