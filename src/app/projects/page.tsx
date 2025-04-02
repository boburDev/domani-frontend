import Link from "next/link";

export default function Projects() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Loyihalar</h1>
      <ul className="mt-4">
        <li>
          <Link href="/projects/multi">Ko‘p qavatli</Link>
        </li>
        <li>
          <Link href="/projects/single">Bir qavatli</Link>
        </li>
        <li>
          <Link href="/projects/commercial">Noturar</Link>
        </li>
      </ul>
    </div>
  );
}
