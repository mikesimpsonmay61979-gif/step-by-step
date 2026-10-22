import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { PracticeProject } from "@/components/practice-view";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ project: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ project: string }>;
}): Promise<Metadata> {
  const { project } = await params;
  const found = getProject(project);
  return { title: found?.title ?? "Practice" };
}

export default function Page({ params }: { params: Promise<{ project: string }> }) {
  return (
    <Suspense fallback={<p className="mx-auto max-w-3xl px-4 py-8 text-[1.4rem]">Opening practice…</p>}>
      <PracticeRoute params={params} />
    </Suspense>
  );
}

async function PracticeRoute({ params }: { params: Promise<{ project: string }> }) {
  const { project } = await params;
  const found = getProject(project);
  if (!found) notFound();
  return <PracticeProject projectId={found.id} />;
}
