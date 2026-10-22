import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { LessonPlayer } from "@/components/lesson-player";
import { getLesson, getTrack, lessons } from "@/lib/lessons";

export function generateStaticParams() {
  return lessons.map((lesson) => ({ track: lesson.trackId, lesson: lesson.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ track: string; lesson: string }>;
}): Promise<Metadata> {
  const { track, lesson } = await params;
  const found = getLesson(track, lesson);
  return { title: found?.title ?? "Lesson" };
}

export default function Page({
  params,
}: {
  params: Promise<{ track: string; lesson: string }>;
}) {
  return (
    <Suspense
      fallback={
        <p className="mx-auto w-full max-w-3xl px-4 py-8 text-[1.4rem]">Opening this lesson…</p>
      }
    >
      <LessonRoute params={params} />
    </Suspense>
  );
}

async function LessonRoute({
  params,
}: {
  params: Promise<{ track: string; lesson: string }>;
}) {
  const { track, lesson } = await params;
  const foundTrack = getTrack(track);
  const foundLesson = getLesson(track, lesson);
  if (!foundTrack || !foundLesson) notFound();
  return <LessonPlayer lesson={foundLesson} track={foundTrack} />;
}
