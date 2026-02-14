"use client";

import { useState } from "react";
import Image from "next/image";

type Project = {
  id: number;
  name: string;
  longDescription?: string;
  tech: string[];
  images: string[];
  githubUrl: string;
};

type Props = {
  project: Project;
};

export default function ProjectDetailClient({ project }: Props) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () =>
    setCurrentImage((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1,
    );
  const prevSlide = () =>
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1,
    );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{project.name}</h1>

      <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/9] mb-8 rounded-xl overflow-hidden">
        <Image
          src={project.images[currentImage]}
          alt={project.name}
          fill
          className="object-contain transition-transform duration-500"
        />
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-2 rounded-full hover:bg-black/70"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-2 rounded-full hover:bg-black/70"
        >
          →
        </button>
      </div>

      <p className="text-gray-300 mb-6">{project.longDescription}</p>

      <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>
      <ul className="list-disc ml-6 text-gray-400 mb-6">
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition-all"
      >
        View on GitHub
      </a>
    </div>
  );
}
