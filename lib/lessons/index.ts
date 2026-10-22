import type { Lesson, Track, TrackId } from "../types";
import { askingLessons } from "./asking";
import { codingLessons } from "./coding";
import { computerLessons } from "./computer";
import { shineLessons } from "./shine";

export const tracks: Track[] = [
  {
    id: "computer",
    title: "Computer basics",
    summary: "Point, type, find files, open a website, send email, and stay safer.",
    forYou: "Start here if the computer still feels new.",
  },
  {
    id: "asking",
    title: "Asking an AI helper",
    summary: "Ask for one clear thing, check the answer, and keep secrets out.",
    forYou: "For when you want a program to help you write or plan.",
  },
  {
    id: "coding",
    title: "Make a small webpage",
    summary: "Change words, colors, and a button. See the page update as you type.",
    forYou: "For when you want to make something with your own hands.",
  },
  {
    id: "shine",
    title: "Make Your Page Shine",
    summary: "Add a picture, a link, colors, letter size, and a layout that fits a phone.",
    forYou: "Come here after the small webpage lessons.",
  },
];

export const lessons: Lesson[] = [
  ...computerLessons,
  ...askingLessons,
  ...codingLessons,
  ...shineLessons,
];

export function lessonKey(lesson: { trackId: string; id: string }): string {
  return `${lesson.trackId}:${lesson.id}`;
}

export function getTrack(id: string): Track | undefined {
  return tracks.find((track) => track.id === id);
}

export function lessonsIn(trackId: string): Lesson[] {
  return lessons.filter((lesson) => lesson.trackId === trackId);
}

export function getLesson(trackId: string, lessonId: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.trackId === trackId && lesson.id === lessonId);
}

export function nextLesson(current: Lesson): Lesson | undefined {
  const list = lessonsIn(current.trackId);
  const index = list.findIndex((lesson) => lesson.id === current.id);
  return list[index + 1];
}

export function quizCount(lesson: Lesson): number {
  return lesson.steps.filter((step) => step.type === "quiz").length;
}

export function trackIds(): Record<TrackId, string[]> {
  return {
    computer: lessonsIn("computer").map(lessonKey),
    asking: lessonsIn("asking").map(lessonKey),
    coding: lessonsIn("coding").map(lessonKey),
    shine: lessonsIn("shine").map(lessonKey),
  };
}
