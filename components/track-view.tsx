"use client";

import { BigLink } from "@/components/controls";
import { lessonKey, lessons, lessonsIn, tracks } from "@/lib/lessons";
import { useProgress } from "@/lib/progress";
import type { Track } from "@/lib/types";

export function TrackView({ track }: { track: Track }) {
  const { ready, state } = useProgress();
  const list = lessonsIn(track.id);
  const position = lessons.filter((lesson) => lesson.trackId === track.id);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-5 px-4 py-6">
      <h1 className="text-[1.8rem] leading-tight font-bold">{track.title}</h1>
      <p className="leading-snug">{track.forYou}</p>
      <p className="leading-snug">You can do these in order, or pick any one. Each lesson is short.</p>
      <ol className="flex flex-col gap-4">
        {position.map((lesson, index) => {
          const done = ready && state.lessons[lessonKey(lesson)]?.completed;
          return (
            <li key={lesson.id}>
              <BigLink href={`/lessons/${track.id}/${lesson.id}`} variant={done ? "secondary" : "outline"}>
                <span className="block">
                  {done ? "Finished. " : ""}
                  {index + 1}. {lesson.title}
                </span>
                <span className="mt-2 block font-normal">{lesson.summary}</span>
                <span className="mt-2 block font-normal">About {lesson.minutes} minutes.</span>
              </BigLink>
            </li>
          );
        })}
      </ol>
      {track.id === "coding" || track.id === "shine" ? (
        <BigLink href="/practice">Open the webpage practice on its own</BigLink>
      ) : null}
      <p className="leading-snug">{list.length} lessons in this track.</p>
    </div>
  );
}

export function LessonsHome() {
  const { ready, state } = useProgress();
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-6">
      <h1 className="text-[1.8rem] leading-tight font-bold">Lessons</h1>
      <p className="leading-snug">Pick one track. You can leave and come back. Your place is saved on this device.</p>
      {tracks.map((track) => {
        const list = lessonsIn(track.id);
        const done = ready ? list.filter((lesson) => state.lessons[lessonKey(lesson)]?.completed).length : 0;
        return (
          <BigLink key={track.id} href={`/lessons/${track.id}`} variant="outline">
            <span className="block text-[1.3rem]">{track.title}</span>
            <span className="mt-2 block font-normal">
              {list.length} lessons{ready ? `. ${done} finished.` : "."}
            </span>
          </BigLink>
        );
      })}
    </div>
  );
}
