import "@/styles/globals.css";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Header from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageProvider";

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
    <html 
    suppressHydrationWarning={true}
    lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className="font-poppins">
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
