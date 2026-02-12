import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header, Footer } from "@/components";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Know the Blocks Maven",
  description: "Empowering the next generation of developers through cutting-edge training, hands-on experience, and practical exposure to real-life projects",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "KBM", "DAOit", "blocks", "Know the blocks maven", "Secondary schools", "tech career training", "emerging technologies course", "learn Web3", "blockchain education", "AI training program", "KBM tech bootcamp", "coding bootcamp Africa", "beginner software development", "career switch to tech", "practical tech training", "hands-on coding experience", "AI and Web3 education", "tech mentorship program", "real-world tech projects", "developer job placement", "inclusive tech education", "tech skills for beginners", "live coding workshops", "developer career launch", "industry-ready tech talent", "tech literacy", "Web3", "learn blocks", "blockchain basics site", "understand crypto for beginners", "know blocks", "knowtheblock", "know blocks.org"

  ],
  authors: [{name: "Know the blocks"}, {name: "DAOit"}, {name: "KBM"}, {name: "Ayodeji"}]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-between items-center min-h-screen h-full relative`}
      >
        <header className="sticky z-[99] flex -mt-40  top-3 w-full px-5 lg:px-14">
          <Header />
        </header>
        <main className="w-full margin-auto flex">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
