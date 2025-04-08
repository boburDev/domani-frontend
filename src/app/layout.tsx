
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Domani artichests",
  description: "Modern Buildings",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning className="font-poppins">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
