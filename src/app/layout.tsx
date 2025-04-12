import "@/styles/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Zoom } from "react-toastify";
import type { Metadata } from "next";
import PageLoaderWrapper from "@/components/PageLoaderWrapper"; // 👈 loader wrapper

export const metadata: Metadata = {
  title: "Domani Architects",
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
      <body className="flex flex-col min-h-screen">
        <LanguageProvider>
          <PageLoaderWrapper>
            <Header />
            {children}
            <Footer />
            <ToastContainer position="top-center" transition={Zoom} />
          </PageLoaderWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
