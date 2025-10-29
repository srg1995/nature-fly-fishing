import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Menu from "@/app/components/Menu";
import Footer from "@/app/components/Footer";
import UserContextProvider from "@/app/context/userContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nature Fly Fishing",
    template: "%s | Nature Fly Fishing",
  },
  description: "Shopping for fly fishing tying materials and accessories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col justify-between antialiased`}
      >
        <UserContextProvider>
          <Menu />
          <div className="flex-grow">
            <div className="mx-auto max-w-[1280px] p-4">{children}</div>
          </div>
          <Footer />
        </UserContextProvider>
      </body>
    </html>
  );
}
