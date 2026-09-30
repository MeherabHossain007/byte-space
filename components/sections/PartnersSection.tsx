import Image from "next/image";

const PARTNER_LOGOS = [
  {
    src: "/logo/partner-logo-01.svg",
    alt: "Partner logo 1",
    width: 167,
    height: 41,
  },
  {
    src: "/logo/partner-logo-02.svg",
    alt: "Partner logo 2",
    width: 168,
    height: 41,
  },
  {
    src: "/logo/partner-logo-03.svg",
    alt: "Partner logo 3",
    width: 170,
    height: 41,
  },
  {
    src: "/logo/partner-logo-04.svg",
    alt: "Partner logo 4",
    width: 170,
    height: 41,
  },
  {
    src: "/logo/partner-logo-05.svg",
    alt: "Partner logo 5",
    width: 169,
    height: 42,
  },
];

export default function PartnersSection() {
  return (
    <section className="partners-section bg-[#f5f5f6] py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="flex gap-8 sm:gap-12 lg:gap-18 items-center justify-center flex-wrap px-6 max-w-360 mx-auto">
        {PARTNER_LOGOS.map((logo, i) => (
          <div key={i} className="h-8 sm:h-10.25 shrink-0 flex items-center justify-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-full w-auto object-contain transition-opacity duration-200 hover:opacity-80"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
