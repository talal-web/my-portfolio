// app/projects/[slug]/page.tsx
import ProjectDetailClient from "./ProjectDetailClient";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

// ✅ Make the server component async
export default async function ProjectDetailPage({ params }: Props) {
  // Await params because it’s now async
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return <ProjectDetailClient project={project} />;
}
