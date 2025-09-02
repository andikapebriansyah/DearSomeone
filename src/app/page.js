// app/page.tsx
"use client";

import { Particles } from "@/app/components/Particles";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Versi 2 - Paper Texture */}
      <section
        className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{
          backgroundColor: "#FAF3E0", // cream paper
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
        }}
      >
        {/* Particles Background */}
        <Particles
          className="absolute inset-0 z-0"
          quantity={60}   // jumlah titik
          size={1}        // besar partikel
          ease={60}       // respons gerakan
          staticity={60}  // seberapa jauh partikel bereaksi
          color="#555555" // warna partikel (abu-abu tinta halus)
        />

        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-serif text-gray-900 mb-4">
            Letters that live beyond words
          </h1>
          <p className="text-gray-700 mb-6">
            A place where your message feels like it’s written on paper.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 rounded-md bg-rose-500 text-white font-medium shadow-md hover:bg-rose-600 transition">
              Write a Message
            </button>
            <button className="px-6 py-3 rounded-md border border-gray-400 text-gray-800 hover:bg-rose-50 transition">
              Read Messages
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
