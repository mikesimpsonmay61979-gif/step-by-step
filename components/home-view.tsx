"use client";

import { useSyncExternalStore } from "react";
import { BigButton, BigLink } from "@/components/controls";
import { lessonKey, lessonsIn, tracks } from "@/lib/lessons";
import { nextUp } from "@/lib/next-up";
import { useProgress } from "@/lib/progress";

function subscribeOnline(onChange: () => void) {
  window.addEventListener("online", onChange);
  window.addEventListener("offline", onChange);
  return () => {
    window.removeEventListener("online", onChange);
    window.removeEventListener("offline", onChange);
  };
}

function getOffline() {
  return !navigator.onLine;
}

function getOnlineServer() {
  return false;
}

export function HomeView() {
  const { ready, state, dismissInstall } = useProgress();
  const offline = useSyncExternalStore(subscribeOnline, getOffline, getOnlineServer);

  const up = ready ? nextUp(state) : null;
  const finishedCount = ready
    ? Object.values(state.lessons).filter((lesson) => lesson.completed).length
    : 0;

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-6">
      <h1 className="text-[2rem] leading-tight font-bold">Hello.</h1>
      <p className="leading-snug">
        This is First Steps. It is a calm place to learn the computer, one small step at a time.
      </p>
      <p className="leading-snug">
        You can stop whenever you want. This device remembers your place. You do not need an account.
      </p>
      {offline ? (
        <p className="rounded-2xl border-4 border-[#7c2d12] bg-[#fff4e0] p-4 leading-snug">
          You seem to be offline. Your saved progress is still on this device. Pages you have opened before may still open.
        </p>
      ) : null}
      {!ready ? <p className="text-[1.3rem]">Opening your saved place…</p> : null}
      {up ? (
        <BigLink href={`/lessons/${up.lesson.trackId}/${up.lesson.id}`}>
          <span className="block">{up.verb}: {up.lesson.title}</span>
          <span className="mt-1 block font-normal">
            {up.verb === "Continue" ? "Pick up where you stopped." : "This is a good next lesson."}
          </span>
        </BigLink>
      ) : ready ? (
        <BigLink href="/progress">You finished every lesson. See your progress.</BigLink>
      ) : null}
      <h2 className="text-[1.5rem] leading-tight font-bold">What do you want to learn?</h2>
      <div className="flex flex-col gap-4">
        {tracks.map((track) => {
          const list = lessonsIn(track.id);
          const done = ready
            ? list.filter((lesson) => state.lessons[lessonKey(lesson)]?.completed).length
            : 0;
          return (
            <BigLink key={track.id} href={`/lessons/${track.id}`} variant="outline">
              <span className="block text-[1.3rem]">{track.title}</span>
              <span className="mt-2 block font-normal">{track.summary}</span>
              <span className="mt-2 block font-normal">
                {list.length} short lessons{ready ? `. ${done} finished.` : "."}
              </span>
            </BigLink>
          );
        })}
      </div>
      <BigLink href="/practice" variant="secondary">
        Try the webpage practice
      </BigLink>
      <BigLink href="/words" variant="outline">
        Word list
      </BigLink>
      {ready ? (
        <p className="leading-snug">
          {finishedCount === 0
            ? "No lessons finished yet. That is a fine place to start."
            : `${finishedCount} finished. Saved on this device.`}
        </p>
      ) : null}
      {ready && !state.installDismissed ? (
        <section className="flex flex-col gap-3 rounded-2xl border-4 border-foreground p-4">
          <h2 className="text-[1.35rem] font-bold">Keep this on your home screen</h2>
          <p className="leading-snug">On a phone, open the browser menu and look for Add to Home Screen.</p>
          <p className="leading-snug">On a computer, look in the address bar for an install icon.</p>
          <BigButton variant="outline" onClick={dismissInstall}>
            Hide this note
          </BigButton>
        </section>
      ) : null}
      <p className="leading-snug">
        Michael started First Steps because he is a beginner too. The words stay plain on purpose.
      </p>
    </div>
  );
}
