import "@/styles/globals.css";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Header from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Zoom } from "react-toastify";
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
    <html suppressHydrationWarning={true} lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
          <ToastContainer position="top-center" transition={Zoom} />
        </LanguageProvider>
      </body>
    </html>
  );
}
