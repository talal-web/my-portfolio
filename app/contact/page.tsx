"use client";

import { MessageCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
      <div className="max-w-xl w-full text-center bg-gray-800 p-10 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold mb-4">
          Your Vision, My Code – Let’s Create! 💻
        </h1>

        <p className="text-gray-400 mb-8">
          Let’s discuss how I can help grow your business with a modern web
          solution.
        </p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/923479107491?text=Hi%20Talal,%20I%20want%20to%20discuss%20a%20website%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
        >
          <MessageCircle className="w-5 h-5" />
          Chat on WhatsApp
        </a>

        {/* Back Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
