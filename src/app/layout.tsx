import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";

export const dynamic = "force-static";
export const revalidate = false;

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Vallorex | Fast & Secure Software Engineeing",
  description: "The premier engineering partner for AI and Blockchain ventures. Institutional quality from day one.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-midnight min-h-screen flex flex-col`}>
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1 flex flex-col relative w-full overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
