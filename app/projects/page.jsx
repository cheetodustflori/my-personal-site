import React from 'react';
import NavBar from '../components/navbar';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div className="flex flex-col bg-[#F8E0D8] min-h-screen">
      {/* <Hero /> */}
      <NavBar/>
      <section className="flex flex-col items-center mt-15 mb-20 gap-10">
        <h1 className="font-bold text-4xl text-[#BB868E]">PROJECTS</h1>
        <div className="flex flex-wrap justify-center gap-5">
          <Link href="/projects/spring-2026">
            <div className="cursor-pointer rounded-2xl w-fit p-6 bg-[#B0C4B2] border-2 border-[#4B5659] hover:scale-105 transition-all shadow-md mt-5">
              <h2 className="font-bold text-2xl text-[#4B5659]">Spring 2026</h2>
              <p className="mt-2 text-sm text-[#4B5659]">View cohort projects &rarr;</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
