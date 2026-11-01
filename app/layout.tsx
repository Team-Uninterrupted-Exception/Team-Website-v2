import type { Metadata } from "next";
import {Geist, Geist_Mono, Inter} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin'],
  weight: "variable",
})



export const metadata: Metadata = {
  title: "Team Uninterrupted Exception",
  description: "Team Website | We dont Just build robots, we build people too.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
    <head>
      <link
          rel="icon"
          href="/logo.svg"
          type="image/svg+xml"
          sizes="<generated>"
      />
    </head>
      <body className="min-h-full flex flex-col font-inter">{children}</body>
    </html>
  );
}
