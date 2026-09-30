import Link from "next/link";
import {
  LimeSpring,
  LimeCylinder,
  WhiteTorus,
  WhitePrism,
  WhiteZigzag,
  LimeZigzag,
} from "./DecorativeShapes";
import { ArrowRight } from "lucide-react";

export default function CreatorCTA() {
  return (
    <section className="relative overflow-hidden bg-[#1856F3] bg-grid-pattern text-white py-20 sm:py-28 text-center">
      {/* Decorative 3D Floating Shapes */}
      <div className="absolute top-10 left-6 sm:left-16 w-16 sm:w-20 opacity-80 animate-float-slow">
        <WhitePrism />
      </div>
      <div className="absolute top-8 right-6 sm:right-20 w-16 sm:w-20 opacity-80 animate-float-gentle">
        <LimeCylinder />
      </div>
      <div className="absolute bottom-8 left-8 sm:left-24 w-20 sm:w-28 opacity-90 animate-float-gentle">
        <WhiteTorus />
      </div>
      <div className="absolute bottom-6 right-8 sm:right-24 w-20 sm:w-24 opacity-90 animate-float-slow">
        <LimeSpring />
      </div>
      <div className="absolute top-1/2 left-10 sm:left-32 w-12 sm:w-16 opacity-75">
        <WhiteZigzag />
      </div>
      <div className="absolute top-1/2 right-10 sm:right-32 w-12 sm:w-16 opacity-75">
        <LimeZigzag />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl mx-auto">
          Unlock Your Potential as a <br />
          Creator with ByteSpace
        </h2>

        <p className="mt-5 text-sm sm:text-base md:text-lg text-blue-100 font-normal max-w-2xl mx-auto leading-relaxed">
          Join thousands of instructors around the world who are empowering
          students, sharing their passions, and generating sustainable income
          on ByteSpace.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/signup?role=creator"
            className="inline-flex items-center gap-2 bg-[#CEFF1A] hover:bg-[#bded00] active:scale-95 text-zinc-950 font-extrabold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-sm sm:text-base transition-all duration-150 shadow-xl shadow-blue-950/30 group"
          >
            Join as Creator
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
