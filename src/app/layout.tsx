import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PageFooter from "@/Customcomponent/PageFooter";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-black min-h-screen flex flex-col justify-between relative`}
      >
        <div className="flex-grow">{children}</div>
        <PageFooter />
      </body>
    </html>
  );
}
