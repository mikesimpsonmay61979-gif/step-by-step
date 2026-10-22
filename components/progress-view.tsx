"use client";

import { BigLink } from "@/components/controls";
import { badgeList } from "@/lib/badges";
import { lessonKey, lessons, lessonsIn, trackIds } from "@/lib/lessons";
import { nextUp } from "@/lib/next-up";
import { useProgress } from "@/lib/progress";
import { currentStreak, localDate } from "@/lib/streak";
import type { TrackId } from "@/lib/types";

const trackOrder: TrackId[] = ["computer", "asking", "coding", "shine"];
const trackName: Record<TrackId, string> = {
  computer: "Computer basics",
  asking: "Asking an AI helper",
  coding: "Make a small webpage",
  shine: "Make Your Page Shine",
};

export function ProgressView() {
  const { ready, state } = useProgress();

  if (!ready) {
    return (
      <div className="mx-auto w-full max-w-3xl px-4 py-8">
        <p className="text-[1.4rem]">Opening your saved place…</p>
      </div>
    );
  }

  const completed = lessons.filter((lesson) => state.lessons[lessonKey(lesson)]?.completed);
  const streak = currentStreak(state.dates, localDate());
  const perfect = Object.values(state.lessons).some(
    (record) => record.completed && record.quizTotal > 0 && record.quizCorrect === record.quizTotal,
  );
  const badges = badgeList({
    completedIds: completed.map(lessonKey),
    trackIds: trackIds(),
    perfectQuiz: perfect,
    streak,
    days: state.dates.length,
  });
  const up = nextUp(state);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-6">
      <h1 className="text-[1.8rem] leading-tight font-bold">Your progress</h1>
      <p className="leading-snug">This stays on this device. Nothing is sent to an account.</p>
      {up ? (
        <BigLink href={`/lessons/${up.lesson.trackId}/${up.lesson.id}`}>
          {up.verb}: {up.lesson.title}
        </BigLink>
      ) : (
        <p className="rounded-2xl border-4 border-[#14532d] bg-[#e5f6ea] p-4 leading-snug">
          You finished every lesson.
        </p>
      )}
      <div className="grid gap-3 sm:grid-cols-2">
        <Stat
          value={String(streak)}
          label={streak === 1 ? "day in a row" : "days in a row"}
          detail={
            streak === 0
              ? "Your streak starts when you practice today."
              : streak === 1
                ? "Come back tomorrow and it becomes 2."
                : "You have been coming back."
          }
        />
        <Stat
          value={String(completed.length)}
          label={`of ${lessons.length} lessons finished`}
          detail={completed.length === 0 ? "Finish one lesson and the count starts." : "Each checkmark is one lesson."}
        />
      </div>
      <section className="flex flex-col gap-3">
        <h2 className="text-[1.4rem] font-bold">By track</h2>
        {trackOrder.map((id) => {
          const list = lessonsIn(id);
          const done = list.filter((lesson) => state.lessons[lessonKey(lesson)]?.completed).length;
          return (
            <div key={id} className="rounded-2xl border-4 border-foreground p-4">
              <p className="font-bold">
                {trackName[id]}: {done} of {list.length}
              </p>
              <p className="mt-3 flex flex-wrap gap-2" aria-hidden="true">
                {list.map((lesson) => {
                  const finished = Boolean(state.lessons[lessonKey(lesson)]?.completed);
                  return (
                    <span
                      key={lesson.id}
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border-4 border-foreground text-[1rem] font-bold ${
                        finished ? "bg-[#14532d] text-white" : "bg-card"
                      }`}
                    >
                      {finished ? "✓" : ""}
                    </span>
                  );
                })}
              </p>
            </div>
          );
        })}
      </section>
      <section className="flex flex-col gap-3">
        <h2 className="text-[1.4rem] font-bold">Badges</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {badges.map((badge) => (
            <li
              key={badge.id}
              className={`rounded-2xl border-4 p-4 ${
                badge.earned ? "border-foreground bg-[#e5f6ea]" : "border-dashed border-foreground bg-card"
              }`}
            >
              <p className="text-[1.2rem] font-bold">{badge.earned ? `Earned: ${badge.name}` : badge.name}</p>
              <p className="mt-2 leading-snug">{badge.earned ? "You earned this." : badge.need}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function Stat({ value, label, detail }: { value: string; label: string; detail: string }) {
  return (
    <div className="rounded-2xl border-4 border-foreground bg-card p-4">
      <p className="text-[2.4rem] leading-none font-bold">{value}</p>
      <p className="mt-2 font-bold">{label}</p>
      <p className="mt-2 leading-snug">{detail}</p>
    </div>
  );
}
