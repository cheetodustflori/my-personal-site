import Link from "next/link";
import Demo from "./components/demo";

export default function Home() {
  return (
    <div className="flex flex-row gap-4">
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/projects">Projects</Link>
      <Demo name="flori"/>
      <Demo name="not flori"/>
    </div>
  );
}
