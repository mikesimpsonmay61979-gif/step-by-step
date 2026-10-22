"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type RefObject } from "react";
import { BigButton, BigLink } from "@/components/controls";
import { DoneMark, Picture } from "@/components/pictures";
import { SpeakButton } from "@/components/speak-button";
import { StuckDialog } from "@/components/stuck-dialog";
import { TryIt } from "@/components/try-it";
import { glossaryById } from "@/lib/glossary";
import { lessonKey, lessonsIn, nextLesson, quizCount } from "@/lib/lessons";
import { useProgress } from "@/lib/progress";
import type { Lesson, ProgressState, Step, Track } from "@/lib/types";

export function LessonPlayer({ lesson, track }: { lesson: Lesson; track: Track }) {
  const { ready, state } = useProgress();
  if (!ready) {
    return (
      <div className="mx-auto w-full max-w-3xl px-4 py-8">
        <p className="text-[1.4rem] leading-snug">Opening your saved place…</p>
      </div>
    );
  }
  return (
    <LessonSession
      key={`${lesson.trackId}:${lesson.id}`}
      lesson={lesson}
      track={track}
      start={startStep(state, lesson)}
    />
  );
}

function LessonSession({ lesson, track, start }: { lesson: Lesson; track: Track; start: number }) {
  const { state, touch, completeLesson } = useProgress();
  const [step, setStep] = useState(start);
  const [practiceOk, setPracticeOk] = useState<Record<number, boolean>>({});
  const [picks, setPicks] = useState<Record<number, number>>({});
  const [hintOpen, setHintOpen] = useState(false);
  const [blocked, setBlocked] = useState<string | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const total = lesson.steps.length + 1;
  const done = step >= lesson.steps.length;
  const current = lesson.steps[step];
  const record = state.lessons[lessonKey(lesson)];

  useEffect(() => {
    if (step < lesson.steps.length) {
      touch(lesson.trackId, lesson.id, step);
    }
    headingRef.current?.focus();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }, [step, lesson, touch]);

  const wide = current?.type === "try" && current.practice.kind === "code";
  const speech = done ? doneSpeech(lesson, picks) : current ? stepSpeech(lesson, current, step, picks[step]) : "";
  const hint = current?.hint ?? "You can go back one screen and read it again.";
  const following = nextLesson(lesson);
  const quizIndex = current?.type === "quiz" ? quizNumber(lesson.steps, step) : 0;
  const quizzesBeforeEnd = lesson.steps.filter((item) => item.type === "quiz").length;
  const isLastQuiz = current?.type === "quiz" && quizIndex === quizzesBeforeEnd;

  function goNext() {
    if (current?.type === "try" && !practiceOk[step]) {
      setBlocked("Finish the small practice on this screen first. If you are stuck, press I'm stuck.");
      return;
    }
    if (current?.type === "quiz" && picks[step] == null) {
      setBlocked("Choose one answer first.");
      return;
    }
    const nextIndex = step + 1;
    if (nextIndex >= lesson.steps.length) {
      const after = nextLesson(lesson);
      completeLesson(
        lesson.trackId,
        lesson.id,
        countCorrect(lesson, picks),
        quizCount(lesson),
        after ? { trackId: after.trackId, lessonId: after.id, step: 0 } : null,
      );
    }
    setHintOpen(false);
    setBlocked(null);
    setStep(nextIndex);
  }

  function goBack() {
    setHintOpen(false);
    setBlocked(null);
    setStep((value) => Math.max(0, value - 1));
  }

  function startOver() {
    setPicks({});
    setPracticeOk({});
    setHintOpen(false);
    setBlocked(null);
    setStep(0);
  }

  return (
    <div className={`mx-auto flex w-full flex-col gap-5 px-4 py-6 ${wide ? "max-w-6xl" : "max-w-3xl"}`}>
      <p>
        <Link href={`/lessons/${track.id}`} className="font-bold underline">
          All {track.title} lessons
        </Link>
      </p>
      <p className="font-bold">
        {track.title} · Lesson {lessonsIndex(track, lesson)} · Screen {Math.min(step + 1, total)} of {total}
      </p>
      {record?.completed && step === 0 ? (
        <p className="rounded-2xl border-4 border-[#14532d] bg-[#e5f6ea] p-4 leading-snug">
          You already finished this lesson. You can go through it again.
        </p>
      ) : null}

      <div className="grid gap-3 sm:grid-cols-2">
        <SpeakButton key={speech} text={speech} />
        {done ? null : (
          <BigButton variant="secondary" onClick={() => setHintOpen(true)}>
            I&apos;m stuck
          </BigButton>
        )}
      </div>

      {done ? (
        <DoneScreen lesson={lesson} picks={picks} following={following} onAgain={startOver} />
      ) : current ? (
        <StepScreen
          lesson={lesson}
          step={current}
          stepIndex={step}
          quizIndex={quizIndex}
          pick={picks[step]}
          practiceDone={Boolean(practiceOk[step])}
          headingRef={headingRef}
          onPick={(choice) => {
            setPicks((currentPicks) =>
              currentPicks[step] == null ? { ...currentPicks, [step]: choice } : currentPicks,
            );
            setBlocked(null);
          }}
          onPracticeDone={() =>
            setPracticeOk((currentDone) => (currentDone[step] ? currentDone : { ...currentDone, [step]: true }))
          }
        />
      ) : null}

      {blocked ? (
        <p className="rounded-2xl border-4 border-[#7c2d12] bg-[#fff4e0] p-4 leading-snug" role="status">
          {blocked}
        </p>
      ) : null}

      {done ? null : (
        <div className="flex flex-col gap-3">
          <BigButton onClick={goNext}>{continueLabel(current, isLastQuiz)}</BigButton>
          {step > 0 ? (
            <BigButton variant="outline" onClick={goBack}>
              Back
            </BigButton>
          ) : null}
        </div>
      )}

      <StuckDialog
        open={hintOpen}
        hint={hint}
        onOpenChange={setHintOpen}
        onSkip={
          current?.type === "try" && !practiceOk[step]
            ? () => setPracticeOk((currentDone) => ({ ...currentDone, [step]: true }))
            : undefined
        }
      />
    </div>
  );
}

function StepScreen({
  lesson,
  step,
  stepIndex,
  quizIndex,
  pick,
  practiceDone,
  headingRef,
  onPick,
  onPracticeDone,
}: {
  lesson: Lesson;
  step: Step;
  stepIndex: number;
  quizIndex: number;
  pick: number | undefined;
  practiceDone: boolean;
  headingRef: RefObject<HTMLHeadingElement | null>;
  onPick: (index: number) => void;
  onPracticeDone: () => void;
}) {
  const title = step.type === "quiz" ? `Question ${quizIndex} of 3` : step.title;
  const kicker = step.type === "explain" ? "Learning" : step.type === "try" ? "Practice" : "Quiz";

  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold">{kicker}</p>
      <h1 ref={headingRef} tabIndex={-1} className="text-[1.7rem] leading-tight font-bold outline-none">
        {title}
      </h1>
      {step.type === "explain" ? (
        <>
          <Picture id={step.picture} />
          {step.paragraphs.map((paragraph) => (
            <p key={paragraph} className="leading-snug">
              {paragraph}
            </p>
          ))}
          {step.example ? (
            <div className="rounded-2xl border-4 border-foreground bg-card p-4">
              <p className="font-bold">{step.example.label}</p>
              <pre className="mt-3 overflow-x-auto text-[1.05rem] leading-relaxed whitespace-pre-wrap">{step.example.code}</pre>
            </div>
          ) : null}
          {step.words && step.words.length > 0 ? (
            <div className="rounded-2xl border-4 border-foreground p-4">
              <p className="font-bold">Words on this page</p>
              <ul className="mt-3 flex flex-col gap-2">
                {step.words.map((word) => {
                  const entry = glossaryById(word);
                  if (!entry) return null;
                  return (
                    <li key={word}>
                      <Link href={`/words/${entry.id}`} className="font-bold underline">
                        {entry.word}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </>
      ) : null}
      {step.type === "try" ? (
        <>
          <p className="leading-snug">{step.lead}</p>
          <TryIt
            key={`${lesson.id}-${stepIndex}`}
            practice={step.practice}
            alreadyDone={practiceDone}
            onDone={onPracticeDone}
          />
        </>
      ) : null}
      {step.type === "quiz" ? (
        <div className="flex flex-col gap-3">
          <p className="leading-snug">{step.prompt}</p>
          {step.choices.map((choice, index) => {
            const chosen = pick === index;
            return (
              <BigButton
                key={choice.text}
                variant={chosen ? "default" : "outline"}
                aria-pressed={chosen}
                onClick={() => onPick(index)}
              >
                {choice.text}
              </BigButton>
            );
          })}
          {pick != null ? (
            <p
              className={`rounded-2xl border-4 p-4 leading-snug ${
                step.choices[pick]?.correct
                  ? "border-[#14532d] bg-[#e5f6ea]"
                  : "border-[#7c2d12] bg-[#fff4e0]"
              }`}
              role="status"
            >
              {step.choices[pick]?.feedback}
            </p>
          ) : (
            <p>Choose one answer.</p>
          )}
        </div>
      ) : null}
    </div>
  );
}

function DoneScreen({
  lesson,
  picks,
  following,
  onAgain,
}: {
  lesson: Lesson;
  picks: Record<number, number>;
  following: Lesson | undefined;
  onAgain: () => void;
}) {
  const correct = countCorrect(lesson, picks);
  const total = quizCount(lesson);
  return (
    <div className="flex flex-col items-start gap-4">
      <DoneMark />
      <h1 className="text-[1.7rem] leading-tight font-bold">You finished.</h1>
      <p className="text-[1.3rem] leading-snug font-bold">{lesson.title}</p>
      <p className="leading-snug">
        {correct === total
          ? `You got all ${total} questions.`
          : `You got ${correct} of ${total}. You can go through this lesson again any time.`}
      </p>
      <p className="leading-snug">Your checkmark is saved on this device.</p>
      {following ? (
        <BigLink href={`/lessons/${following.trackId}/${following.id}`}>Next: {following.title}</BigLink>
      ) : (
        <BigLink href="/progress">See your progress</BigLink>
      )}
      <BigLink href={`/lessons/${lesson.trackId}`} variant="outline">
        Back to this track
      </BigLink>
      <BigButton variant="secondary" onClick={onAgain}>
        Go through this lesson again
      </BigButton>
    </div>
  );
}

function continueLabel(step: Step | undefined, isLastQuiz: boolean): string {
  if (!step) return "Continue";
  if (step.type === "quiz") return isLastQuiz ? "Finish lesson" : "Next question";
  if (step.type === "try") return "Continue";
  return "Next";
}

function quizNumber(steps: Step[], index: number): number {
  return steps.slice(0, index + 1).filter((step) => step.type === "quiz").length;
}

function countCorrect(lesson: Lesson, picks: Record<number, number>): number {
  let correct = 0;
  lesson.steps.forEach((step, index) => {
    if (step.type !== "quiz") return;
    const pick = picks[index];
    if (pick != null && step.choices[pick]?.correct) correct += 1;
  });
  return correct;
}

function startStep(state: ProgressState, lesson: Lesson): number {
  const existing = state.lessons[lessonKey(lesson)];
  const resume = state.resume;
  if (
    resume &&
    resume.trackId === lesson.trackId &&
    resume.lessonId === lesson.id &&
    !existing?.completed &&
    resume.step > 0 &&
    resume.step <= lesson.steps.length
  ) {
    return resume.step;
  }
  return 0;
}

function lessonsIndex(track: Track, lesson: Lesson): number {
  return lessonsIn(track.id).findIndex((item) => item.id === lesson.id) + 1;
}

function stepSpeech(lesson: Lesson, step: Step, index: number, pick?: number): string {
  if (step.type === "explain") {
    const words = (step.words ?? [])
      .map((id) => glossaryById(id)?.word)
      .filter(Boolean)
      .join(", ");
    return [`Learning. ${step.title}.`, ...step.paragraphs, step.example ? step.example.code : "", words ? `Words: ${words}.` : ""]
      .filter(Boolean)
      .join(" ");
  }
  if (step.type === "try") {
    return `Practice. ${step.title}. ${step.lead}`;
  }
  const chosen = pick != null ? step.choices[pick] : undefined;
  return [
    `Question ${quizNumber(lesson.steps, index)} of 3. ${step.prompt}`,
    ...step.choices.map((choice) => choice.text),
    chosen ? chosen.feedback : "Choose one answer.",
  ].join(" ");
}

function doneSpeech(lesson: Lesson, picks: Record<number, number>): string {
  const correct = countCorrect(lesson, picks);
  const total = quizCount(lesson);
  return `You finished ${lesson.title}. You got ${correct} of ${total}. Your checkmark is saved on this device.`;
}
