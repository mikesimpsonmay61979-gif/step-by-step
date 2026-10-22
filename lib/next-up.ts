import { getLesson, lessonKey, lessons } from "./lessons";
import type { Lesson, ProgressState } from "./types";

export function nextUp(
  state: ProgressState,
): { lesson: Lesson; step: number; verb: "Continue" | "Start" } | null {
  if (state.resume) {
    const lesson = getLesson(state.resume.trackId, state.resume.lessonId);
    if (lesson && !state.lessons[lessonKey(lesson)]?.completed) {
      return {
        lesson,
        step: state.resume.step,
        verb: state.resume.step > 0 ? "Continue" : "Start",
      };
    }
  }
  const first = lessons.find((lesson) => !state.lessons[lessonKey(lesson)]?.completed);
  if (!first) return null;
  return { lesson: first, step: 0, verb: "Start" };
}
