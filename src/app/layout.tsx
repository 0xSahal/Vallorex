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
  metadataBase: new URL("https://vallorex.com"),
  title: "Vallorex | Fast & Secure Software Engineeing",
  description:
    "The Engineering Firm That Turns AI & Blockchain Into Results",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Vallorex",
    description:
      "The Engineering Firm That Turns AI & Blockchain Into Results",
    url: "https://vallorex.com/",
    type: "website",
    siteName: "Vallorex",
    images: [
      {
        url: "/vallorex-logo-dark.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vallorex",
    description:
      "The Engineering Firm That Turns AI & Blockchain Into Results",
    images: ["/vallorex-logo-dark.png"],
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
