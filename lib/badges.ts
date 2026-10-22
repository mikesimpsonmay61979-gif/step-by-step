import type { TrackId } from "./types";

export type Badge = {
  id: string;
  name: string;
  need: string;
  earned: boolean;
};

export function badgeList(input: {
  completedIds: string[];
  trackIds: Record<TrackId, string[]>;
  perfectQuiz: boolean;
  streak: number;
  days: number;
}): Badge[] {
  const done = new Set(input.completedIds);
  const trackDone = (track: TrackId) =>
    input.trackIds[track].length > 0 && input.trackIds[track].every((id) => done.has(id));
  const allIds = [
    ...input.trackIds.computer,
    ...input.trackIds.asking,
    ...input.trackIds.coding,
    ...input.trackIds.shine,
  ];

  return [
    {
      id: "first-step",
      name: "First step",
      need: "Finish 1 lesson.",
      earned: done.size >= 1,
    },
    {
      id: "getting-going",
      name: "Getting going",
      need: "Finish 3 lessons.",
      earned: done.size >= 3,
    },
    {
      id: "computer",
      name: "Computer basics",
      need: "Finish every Computer basics lesson.",
      earned: trackDone("computer"),
    },
    {
      id: "clear-asker",
      name: "Clear asker",
      need: "Finish every AI helper lesson.",
      earned: trackDone("asking"),
    },
    {
      id: "maker",
      name: "Webpage maker",
      need: "Finish every webpage lesson.",
      earned: trackDone("coding"),
    },
    {
      id: "shining-page",
      name: "Shining page",
      need: "Finish every Make Your Page Shine lesson.",
      earned: trackDone("shine"),
    },
    {
      id: "careful-reader",
      name: "Careful reader",
      need: "Get all 3 quiz answers right in one lesson.",
      earned: input.perfectQuiz,
    },
    {
      id: "three-days",
      name: "Three days",
      need: "Practice 3 days in a row.",
      earned: input.streak >= 3,
    },
    {
      id: "welcome-back",
      name: "Welcome back",
      need: "Come back on a second day.",
      earned: input.days >= 2,
    },
    {
      id: "whole-path",
      name: "Whole path",
      need: "Finish every lesson.",
      earned: allIds.length > 0 && allIds.every((id) => done.has(id)),
    },
  ];
}
