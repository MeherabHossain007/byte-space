import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function CreatorCTA() {
  return (
    <section className="relative overflow-hidden bg-primary bg-grid-pattern text-primary-foreground py-16 sm:py-20 lg:py-24 text-center">
      {/* 3D Decorative Ornaments Background */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <Image
          src="/images/cta.png"
          alt=""
          fill
          priority
          className="object-cover object-center pointer-events-none select-none"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="font-heading font-semibold text-primary-foreground text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight max-w-3xl mx-auto">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        <p className="mt-5 sm:mt-6 font-satoshi text-primary-foreground text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-normal">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <div className="mt-7 sm:mt-8 flex justify-center">
          <Link href="/signup?role=creator">
            <Button variant="secondary" size="md">
              Join as Creator
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
