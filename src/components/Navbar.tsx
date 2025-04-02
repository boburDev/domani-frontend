import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex gap-4">
      <Link href="/">Bosh sahifa</Link>
      <Link href="/projects">Loyihalar</Link>
      <Link href="/blog">Maqolalar</Link>
      <Link href="/about">Biz haqimizda</Link>
      <Link href="/social">Ijtimoiy</Link>
    </nav>
  );
}
