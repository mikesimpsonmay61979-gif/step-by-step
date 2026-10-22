import type { Choice, ExplainStep, PictureId, Practice, QuizStep, TryStep } from "../types";

export function explain(
  title: string,
  paragraphs: string[],
  picture: PictureId,
  hint: string,
  words?: string[],
  example?: { label: string; code: string },
): ExplainStep {
  return { type: "explain", title, paragraphs, picture, hint, words, example };
}

export function practice(title: string, lead: string, hint: string, task: Practice): TryStep {
  return { type: "try", title, lead, hint, practice: task };
}

export function quiz(prompt: string, hint: string, choices: Choice[]): QuizStep {
  return { type: "quiz", prompt, hint, choices };
}

export function yes(text: string, feedback: string): Choice {
  return { text, correct: true, feedback };
}

export function no(text: string, feedback: string): Choice {
  return { text, correct: false, feedback };
}
