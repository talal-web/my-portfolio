"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 bg-gray-900 text-white">
      {/* Text Content */}
      <div className="max-w-xl text-center md:text-left md:mr-10">
        {/* Name with Gradient */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Hi, I’m{" "}
          <span className="bg-linear-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Talal Malik
          </span>
        </h1>

        {/* Role */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-300">
          Full-Stack Web Developer
        </h2>

        {/* Description */}
        <p className="text-gray-400 mb-10 text-base sm:text-lg">
          I build modern web apps with the{" "}
          <span className="text-white font-medium">
            MERN stack (MongoDB, Express, React, Node.js) and TypeScript
          </span>
          .
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-purple-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-600 px-6 py-3 text-sm font-semibold text-gray-300 transition-all hover:border-white hover:text-white hover:scale-105"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </Link>
        </div>
      </div>

      {/* Profile Image */}
      <div className="mb-8 md:mb-0 relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-600 hover:scale-105 transition-transform">
        <Image
          src="/profile.jpg" // Replace with your image
          alt="Talal Malik"
          fill
          sizes="(max-width: 768px) 14rem, (max-width: 1024px) 16rem, 18rem"
          className="object-cover"
          priority
        />
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-3xl animate-pulse" />
      </div>
    </section>
  );
}
