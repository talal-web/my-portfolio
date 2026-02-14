"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={project.thumbnail}
                alt={project.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>

              <p className="text-gray-300 mb-3 flex-1">{project.description}</p>

              <p className="text-gray-400 text-sm mb-5">
                <span className="font-medium">Tech:</span> {project.tech}
              </p>

              {/* Actions */}
              <div className="flex gap-4 mt-auto flex-wrap">
                {/* ✅ INTERNAL LINK */}
                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`View details of ${project.name}`}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-xl hover:bg-purple-700 transition-colors"
                >
                  View Details <ArrowRight className="w-4 h-4" />
                </Link>

                {/* ✅ EXTERNAL LINK */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub repository of ${project.name}`}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-500 rounded-xl hover:border-white transition-colors"
                >
                  GitHub <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
