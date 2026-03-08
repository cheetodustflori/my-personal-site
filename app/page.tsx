import Link from "next/link";
import StyleDemo from "./components/styledemo";
import Header from "./components/header"
import Welcome from "./components/welcome"

export default function Home() {
  return (
    <div className="flex h-screen w-full bg-linear-to-t align-middle from-[#F4919B] to-[#F8E0D8]">
      <Header/>
      <Welcome/>
    </div>
  );
}
