"use client";

import { BigLink } from "@/components/controls";
import { Playground } from "@/components/playground";
import { projects } from "@/lib/projects";

export function PracticeList() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-5 px-4 py-6">
      <h1 className="text-[1.8rem] leading-tight font-bold">Webpage practice</h1>
      <p className="leading-snug">
        These are the same small pages as the webpage lessons. You can play here any time. Nothing is published on the internet.
      </p>
      <ul className="flex flex-col gap-4">
        {projects.map((project) => (
          <li key={project.id}>
            <BigLink href={`/practice/${project.id}`} variant="outline">
              <span className="block text-[1.25rem]">{project.title}</span>
              <span className="mt-2 block font-normal">{project.blurb}</span>
            </BigLink>
          </li>
        ))}
      </ul>
      <BigLink href="/lessons/coding" variant="secondary">
        Go to the webpage lessons
      </BigLink>
      <BigLink href="/lessons/shine" variant="outline">
        Go to Make Your Page Shine
      </BigLink>
    </div>
  );
}

export function PracticeProject({ projectId }: { projectId: string }) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return null;
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-6">
      <h1 className="text-[1.8rem] leading-tight font-bold">{project.title}</h1>
      <p className="leading-snug">{project.blurb}</p>
      <Playground key={project.id} projectId={project.id} />
      <BigLink href="/practice" variant="outline">
        All webpage practice
      </BigLink>
    </div>
  );
}
