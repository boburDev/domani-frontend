import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Correctly linking the favicon from the public folder */}
      <link rel="icon" href="../../public/favicon.ico" type="image/x-icon"></link>
      {/* <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" /> */}
      <body>
        <Navbar />
        <main className="p-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
