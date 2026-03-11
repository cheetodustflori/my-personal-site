import Link from "next/link";
import Quote from "./components/sections/quote";
import Hero from "./components/sections/hero"
import About from "./components/sections/about"
import Footer from "./components/sections/footer"
import Pictures from "./components/sections/pictures"
import Cohorts from "./components/sections/cohorts"

export default function Home() {
  return (
    <div className="flex flex-col bg-[#F8E0D8]">
      <Hero/>
      <About/>
      <Quote/>
      <Pictures/>
      <Cohorts/>
      <Footer/>
      
    </div>
  );
}
