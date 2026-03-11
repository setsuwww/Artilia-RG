import Image from "next/image";

import { HugeiconsIcon } from "@hugeicons/react";
import { Sparkles } from "@hugeicons/core-free-icons";
import Navbar from "@/_components/common/Navbar";

export default function Hero() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen w-full">

        <Image src="/image/hero-background.jpg" alt="Hero background" fill priority className="object-cover" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/30" />

        <main className="relative z-10 flex min-h-screen items-center px-10 lg:px-24">
          <div className="max-w-2xl text-left text-white">

            <h1 className="text-7xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-teal-400 to-sky-300">
              Artilia Generator.
            </h1>

            <h1 className="text-5xl font-bold leading-tight mb-6 text-gray-400">
              Build Your Profesional Personal profile with a simple Prompt
            </h1>

            <p className="text-lg text-gray-200">
              Generate professional resumes, job application letters, and
              personal portfolios instantly using AI. Create polished documents
              tailored for recruiters and ATS systems in seconds.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="rounded-lg glass glass-surface outline outline-offset-4 outline-transparent hover:outline-white/20 ring ring-transparent hover:ring hover:ring-white/40 px-6 transition flex items-center space-x-2">
                <HugeiconsIcon icon={Sparkles} size={20} className="mr-2" /> Generate Now
              </button>

              <button className="rounded-lg border border-white px-6 py-3 font-medium bg-white text-yellow-600 hover:bg-gradient-to-r hover:from-yellow-300/50 transition">
                Learn More
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
