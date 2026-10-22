"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { ProgressState, ResumePoint, TextSize } from "./types";
import { localDate } from "./streak";

const STORAGE_KEY = "first-steps-v1";

const defaultState: ProgressState = {
  textSize: "huge",
  lessons: {},
  resume: null,
  dates: [],
  installDismissed: false,
};

type ProgressApi = {
  ready: boolean;
  state: ProgressState;
  setTextSize: (size: TextSize) => void;
  touch: (trackId: string, lessonId: string, step: number) => void;
  completeLesson: (
    trackId: string,
    lessonId: string,
    quizCorrect: number,
    quizTotal: number,
    nextResume: ResumePoint | null,
  ) => void;
  dismissInstall: () => void;
};

const ProgressContext = createContext<ProgressApi | null>(null);

function load(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    const textSize =
      parsed.textSize === "large" || parsed.textSize === "huge" || parsed.textSize === "max"
        ? parsed.textSize
        : "huge";
    return {
      textSize,
      lessons: parsed.lessons && typeof parsed.lessons === "object" ? parsed.lessons : {},
      resume: parsed.resume ?? null,
      dates: Array.isArray(parsed.dates) ? parsed.dates.filter((date) => typeof date === "string") : [],
      installDismissed: Boolean(parsed.installDismissed),
    };
  } catch {
    return defaultState;
  }
}

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ProgressState>(defaultState);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const next = load();
    document.documentElement.dataset.text = next.textSize;
    queueMicrotask(() => {
      setState(next);
      setReady(true);
    });
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    document.documentElement.dataset.text = state.textSize;
  }, [state, ready]);

  const setTextSize = useCallback((textSize: TextSize) => {
    setState((current) => ({ ...current, textSize }));
  }, []);

  const touch = useCallback((trackId: string, lessonId: string, step: number) => {
    setState((current) => {
      const today = localDate();
      const dates = current.dates.includes(today) ? current.dates : [...current.dates, today];
      const sameResume =
        current.resume?.trackId === trackId &&
        current.resume.lessonId === lessonId &&
        current.resume.step === step;
      if (sameResume && dates.length === current.dates.length) return current;
      return { ...current, dates, resume: { trackId, lessonId, step } };
    });
  }, []);

  const completeLesson = useCallback(
    (
      trackId: string,
      lessonId: string,
      quizCorrect: number,
      quizTotal: number,
      nextResume: ResumePoint | null,
    ) => {
      setState((current) => {
        const key = `${trackId}:${lessonId}`;
        const prev = current.lessons[key];
        const today = localDate();
        const dates = current.dates.includes(today) ? current.dates : [...current.dates, today];
        return {
          ...current,
          dates,
          resume: nextResume,
          lessons: {
            ...current.lessons,
            [key]: {
              completed: true,
              quizCorrect: Math.max(prev?.quizCorrect ?? 0, quizCorrect),
              quizTotal,
              finishedAt: new Date().toISOString(),
            },
          },
        };
      });
    },
    [],
  );

  const dismissInstall = useCallback(() => {
    setState((current) => ({ ...current, installDismissed: true }));
  }, []);

  const api: ProgressApi = { ready, state, setTextSize, touch, completeLesson, dismissInstall };
  return <ProgressContext.Provider value={api}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressApi {
  const value = useContext(ProgressContext);
  if (!value) throw new Error("useProgress must be used inside ProgressProvider");
  return value;
}
