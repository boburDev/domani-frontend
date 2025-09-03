/* eslint-disable @next/next/no-img-element */
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Zoom } from "react-toastify";
import type { Metadata } from "next";
import PageLoaderWrapper from "@/components/PageLoaderWrapper";

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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1317248436578551');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <noscript>
            <img
              alt="img"
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=1317248436578551&ev=PageView&noscript=1"
            />
          </noscript>
        </noscript>
      </head>
      <body>
        <LanguageProvider>
          <PageLoaderWrapper>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <ToastContainer position="top-center" transition={Zoom} />
          </PageLoaderWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
