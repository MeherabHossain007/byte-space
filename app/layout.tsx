import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace - Get Access to Hundreds of Courses Available",
  description: "Find your dream course and build your skills with the best instructors online. Explore diverse learning paths at ByteSpace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-zinc-900 selection:bg-lime-300 selection:text-black min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}

