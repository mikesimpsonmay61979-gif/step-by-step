export type TrackId = "computer" | "asking" | "coding" | "shine";

export type TextSize = "large" | "huge" | "max";

export type PictureId =
  | "pointer"
  | "click"
  | "keyboard"
  | "folder"
  | "browser"
  | "mail"
  | "shield"
  | "key"
  | "helper"
  | "question"
  | "details"
  | "check"
  | "lock"
  | "steps"
  | "blocks"
  | "page"
  | "palette"
  | "counter"
  | "star"
  | "bug";

export type Choice = {
  text: string;
  correct: boolean;
  feedback: string;
};

export type Practice =
  | { kind: "click"; button: string; success: string }
  | {
      kind: "type";
      prompt: string;
      placeholder: string;
      button: string;
      min: number;
      success: string;
    }
  | { kind: "open"; folder: string; file: string; note: string; success: string }
  | {
      kind: "browser";
      startTitle: string;
      startText: string;
      link: string;
      pageTitle: string;
      pageText: string;
      success: string;
    }
  | { kind: "email"; success: string }
  | {
      kind: "choose";
      prompt: string;
      options: { text: string; detail?: string; correct: boolean; feedback: string }[];
      success: string;
    }
  | { kind: "passphrase"; words: string[]; success: string }
  | {
      kind: "chips";
      prompt: string;
      vague: string;
      chips: { label: string; line: string }[];
      need: number;
      success: string;
    }
  | {
      kind: "sort";
      prompt: string;
      items: { text: string; private: boolean; why: string }[];
      success: string;
    }
  | {
      kind: "rounds";
      rounds: {
        prompt: string;
        sample: string;
        choices: string[];
        answer: string;
        feedback: string;
      }[];
      success: string;
    }
  | { kind: "code"; projectId: string };

export type ExplainStep = {
  type: "explain";
  title: string;
  paragraphs: string[];
  picture: PictureId;
  hint: string;
  words?: string[];
  example?: { label: string; code: string };
};

export type TryStep = {
  type: "try";
  title: string;
  lead: string;
  hint: string;
  practice: Practice;
};

export type QuizStep = {
  type: "quiz";
  hint: string;
  prompt: string;
  choices: Choice[];
};

export type Step = ExplainStep | TryStep | QuizStep;

export type Lesson = {
  id: string;
  trackId: TrackId;
  title: string;
  summary: string;
  minutes: number;
  steps: Step[];
};

export type Track = {
  id: TrackId;
  title: string;
  summary: string;
  forYou: string;
};

export type GlossaryEntry = {
  id: string;
  word: string;
  say: string;
  example: string;
};

export type Project = {
  id: string;
  title: string;
  blurb: string;
  task: string;
  hint: string;
  success: string;
  html: string;
  css: string;
  js: string;
  check: (code: { html: string; css: string; js: string }) => boolean;
};

export type LessonRecord = {
  completed: boolean;
  quizCorrect: number;
  quizTotal: number;
  finishedAt: string;
};

export type ResumePoint = {
  trackId: string;
  lessonId: string;
  step: number;
};

export type ProgressState = {
  textSize: TextSize;
  lessons: Record<string, LessonRecord>;
  resume: ResumePoint | null;
  dates: string[];
  installDismissed: boolean;
};
