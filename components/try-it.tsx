"use client";

import { useState } from "react";
import { BigButton, fieldClass } from "@/components/controls";
import { Playground } from "@/components/playground";
import type { Practice } from "@/lib/types";

export function TryIt({
  practice,
  onDone,
  alreadyDone,
}: {
  practice: Practice;
  onDone: () => void;
  alreadyDone: boolean;
}) {
  return (
    <div className="flex flex-col gap-4">
      {alreadyDone ? (
        <p className="rounded-2xl border-4 border-[#14532d] bg-[#e5f6ea] p-4 leading-snug">
          You already finished this practice. You can do it again, or press Continue.
        </p>
      ) : null}
      <PracticeBody practice={practice} onDone={onDone} />
    </div>
  );
}

function PracticeBody({ practice, onDone }: { practice: Practice; onDone: () => void }) {
  switch (practice.kind) {
    case "click":
      return <ClickPractice practice={practice} onDone={onDone} />;
    case "type":
      return <TypePractice practice={practice} onDone={onDone} />;
    case "open":
      return <OpenPractice practice={practice} onDone={onDone} />;
    case "browser":
      return <BrowserPractice practice={practice} onDone={onDone} />;
    case "email":
      return <EmailPractice practice={practice} onDone={onDone} />;
    case "choose":
      return <ChoosePractice practice={practice} onDone={onDone} />;
    case "passphrase":
      return <PassphrasePractice practice={practice} onDone={onDone} />;
    case "chips":
      return <ChipsPractice practice={practice} onDone={onDone} />;
    case "sort":
      return <SortPractice practice={practice} onDone={onDone} />;
    case "rounds":
      return <RoundsPractice practice={practice} onDone={onDone} />;
    case "code":
      return <CodePractice projectId={practice.projectId} onDone={onDone} />;
  }
}

function Success({ children }: { children: string }) {
  return (
    <p className="rounded-2xl border-4 border-[#14532d] bg-[#e5f6ea] p-4 leading-snug" role="status">
      {children}
    </p>
  );
}

function Note({ children }: { children: string }) {
  return <p className="rounded-2xl border-4 border-[#7c2d12] bg-[#fff4e0] p-4 leading-snug">{children}</p>;
}

function ClickPractice({
  practice,
  onDone,
}: {
  practice: Extract<Practice, { kind: "click" }>;
  onDone: () => void;
}) {
  const [done, setDone] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <BigButton
        className="bg-[#14532d] text-white hover:bg-[#14532d]"
        onClick={() => {
          setDone(true);
          onDone();
        }}
      >
        {practice.button}
      </BigButton>
      {done ? <Success>{practice.success}</Success> : null}
    </div>
  );
}

function TypePractice({
  practice,
  onDone,
}: {
  practice: Extract<Practice, { kind: "type" }>;
  onDone: () => void;
}) {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  function submit() {
    if (value.trim().length < practice.min) {
      setMessage(`Type at least ${practice.min} letters.`);
      return;
    }
    setMessage(null);
    setDone(true);
    onDone();
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        submit();
      }}
    >
      <label className="font-bold" htmlFor="type-practice">
        {practice.prompt}
      </label>
      <input
        id="type-practice"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={practice.placeholder}
        autoComplete="off"
        className={fieldClass}
      />
      <BigButton type="submit">{practice.button}</BigButton>
      {message ? <Note>{message}</Note> : null}
      {done ? <Success>{practice.success}</Success> : null}
    </form>
  );
}

function OpenPractice({
  practice,
  onDone,
}: {
  practice: Extract<Practice, { kind: "open" }>;
  onDone: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      {!open ? (
        <BigButton
          onClick={() => setOpen(true)}
          className="bg-[#fde68a] text-foreground hover:bg-[#fde68a]"
        >
          Folder: {practice.folder}
        </BigButton>
      ) : (
        <>
          <p className="font-bold">The {practice.folder} folder is open.</p>
          <BigButton
            variant="secondary"
            onClick={() => {
              setFile(true);
              onDone();
            }}
          >
            File: {practice.file}
          </BigButton>
        </>
      )}
      {file ? (
        <>
          <p className="rounded-2xl border-4 border-foreground bg-card p-4 leading-snug">{practice.note}</p>
          <Success>{practice.success}</Success>
        </>
      ) : null}
    </div>
  );
}

function BrowserPractice({
  practice,
  onDone,
}: {
  practice: Extract<Practice, { kind: "browser" }>;
  onDone: () => void;
}) {
  const [opened, setOpened] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border-4 border-foreground bg-card">
      <div className="bg-[#0e2a47] px-4 py-3 text-white">
        <p className="font-bold">Address</p>
        <p>{opened ? "weather.test" : "home.test"}</p>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <h3 className="text-[1.35rem] font-bold">{opened ? practice.pageTitle : practice.startTitle}</h3>
        <p className="leading-snug">{opened ? practice.pageText : practice.startText}</p>
        {opened ? (
          <Success>{practice.success}</Success>
        ) : (
          <BigButton
            variant="outline"
            className="underline"
            onClick={() => {
              setOpened(true);
              onDone();
            }}
          >
            {practice.link}
          </BigButton>
        )}
      </div>
    </div>
  );
}

function EmailPractice({
  practice,
  onDone,
}: {
  practice: Extract<Practice, { kind: "email" }>;
  onDone: () => void;
}) {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [problem, setProblem] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  function submit() {
    if (!to.includes("@")) {
      setProblem("The address needs an @ sign. Example: sam@email.com");
      return;
    }
    if (!to.includes(".")) {
      setProblem("The address needs a dot, like .com");
      return;
    }
    if (subject.trim().length < 2) {
      setProblem("Type a subject. A few words about the message is enough.");
      return;
    }
    if (message.trim().length < 2) {
      setProblem("Type a short message too.");
      return;
    }
    setProblem(null);
    setDone(true);
    onDone();
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        submit();
      }}
    >
      <p>This practice does not send a real email.</p>
      <label className="font-bold" htmlFor="email-to">
        To
      </label>
      <input id="email-to" value={to} onChange={(event) => setTo(event.target.value)} placeholder="sam@email.com" autoComplete="off" className={fieldClass} />
      <label className="font-bold" htmlFor="email-subject">
        Subject
      </label>
      <input id="email-subject" value={subject} onChange={(event) => setSubject(event.target.value)} placeholder="Hello" autoComplete="off" className={fieldClass} />
      <label className="font-bold" htmlFor="email-message">
        Message
      </label>
      <textarea id="email-message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Write a short note" className={`${fieldClass} min-h-32`} />
      <BigButton type="submit">Send</BigButton>
      {problem ? <Note>{problem}</Note> : null}
      {done ? <Success>{practice.success}</Success> : null}
    </form>
  );
}

function ChoosePractice({
  practice,
  onDone,
}: {
  practice: Extract<Practice, { kind: "choose" }>;
  onDone: () => void;
}) {
  const [note, setNote] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold">{practice.prompt}</p>
      {practice.options.map((option) => (
        <BigButton
          key={option.text}
          variant="outline"
          onClick={() => {
            setNote(option.feedback);
            if (option.correct) {
              setDone(true);
              onDone();
            }
          }}
        >
          <span className="block">{option.text}</span>
          {option.detail ? <span className="mt-1 block font-normal">{option.detail}</span> : null}
        </BigButton>
      ))}
      {note ? <Note>{note}</Note> : null}
      {done ? <Success>{practice.success}</Success> : null}
    </div>
  );
}

function PassphrasePractice({
  practice,
  onDone,
}: {
  practice: Extract<Practice, { kind: "passphrase" }>;
  onDone: () => void;
}) {
  const [picked, setPicked] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const [needMore, setNeedMore] = useState(false);

  function toggle(word: string) {
    setPicked((current) => {
      if (current.includes(word)) return current.filter((item) => item !== word);
      if (current.length >= 3) return current;
      return [...current, word];
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="rounded-2xl border-4 border-foreground bg-card p-4 leading-snug">
        <span className="font-bold">Your password: </span>
        {picked.length ? picked.join(" ") : "Pick three words."}
      </p>
      <div className="grid gap-3">
        {practice.words.map((word) => {
          const on = picked.includes(word);
          return (
            <BigButton key={word} variant={on ? "default" : "outline"} aria-pressed={on} onClick={() => toggle(word)}>
              {word}
            </BigButton>
          );
        })}
      </div>
      <BigButton
        onClick={() => {
          if (picked.length < 3) {
            setNeedMore(true);
            return;
          }
          setNeedMore(false);
          setDone(true);
          onDone();
        }}
      >
        Use this password
      </BigButton>
      {picked.length < 3 ? <p>Choose {3 - picked.length} more.</p> : null}
      {needMore && picked.length < 3 ? <Note>Pick three words first.</Note> : null}
      {done ? <Success>{practice.success}</Success> : null}
    </div>
  );
}

function ChipsPractice({
  practice,
  onDone,
}: {
  practice: Extract<Practice, { kind: "chips" }>;
  onDone: () => void;
}) {
  const [picked, setPicked] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const [needMore, setNeedMore] = useState(false);
  const lines = picked.map((index) => practice.chips[index]?.line).filter(Boolean);

  function toggle(index: number) {
    setPicked((current) => (current.includes(index) ? current.filter((item) => item !== index) : [...current, index]));
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold">{practice.prompt}</p>
      <div className="rounded-2xl border-4 border-foreground bg-card p-4 leading-snug">
        <p className="font-bold">Your ask</p>
        <p className="mt-2">{practice.vague}</p>
        {lines.map((line) => (
          <p key={line} className="mt-2">
            {line}
          </p>
        ))}
      </div>
      {practice.chips.map((chip, index) => {
        const on = picked.includes(index);
        return (
          <BigButton key={chip.label} variant={on ? "default" : "outline"} aria-pressed={on} onClick={() => toggle(index)}>
            {on ? `Added: ${chip.label}` : chip.label}
          </BigButton>
        );
      })}
      <BigButton
        onClick={() => {
          if (picked.length < practice.need) {
            setNeedMore(true);
            return;
          }
          setNeedMore(false);
          setDone(true);
          onDone();
        }}
      >
        Use this ask
      </BigButton>
      {picked.length < practice.need ? <p>Add {practice.need - picked.length} more.</p> : null}
      {needMore && picked.length < practice.need ? <Note>Add a few details first.</Note> : null}
      {done ? <Success>{practice.success}</Success> : null}
    </div>
  );
}

function SortPractice({
  practice,
  onDone,
}: {
  practice: Extract<Practice, { kind: "sort" }>;
  onDone: () => void;
}) {
  const [choices, setChoices] = useState<Record<number, "ok" | "private">>({});
  const [done, setDone] = useState(false);

  function choose(index: number, value: "ok" | "private") {
    const next = { ...choices, [index]: value };
    setChoices(next);
    const ready = practice.items.every((item, itemIndex) => {
      const pick = next[itemIndex];
      if (!pick) return false;
      return item.private ? pick === "private" : pick === "ok";
    });
    if (ready) {
      setDone(true);
      onDone();
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold">{practice.prompt}</p>
      {practice.items.map((item, index) => {
        const pick = choices[index];
        const correct = pick ? (item.private ? pick === "private" : pick === "ok") : false;
        return (
          <div key={item.text} className="flex flex-col gap-3 rounded-2xl border-4 border-foreground p-4">
            <p className="leading-snug">{item.text}</p>
            <BigButton variant={pick === "ok" ? "default" : "outline"} onClick={() => choose(index, "ok")}>
              OK to type
            </BigButton>
            <BigButton variant={pick === "private" ? "default" : "outline"} onClick={() => choose(index, "private")}>
              Keep private
            </BigButton>
            {pick && !correct ? <Note>{item.why}</Note> : null}
            {pick && correct ? <p className="font-bold">Yes. That choice fits.</p> : null}
          </div>
        );
      })}
      {done ? <Success>{practice.success}</Success> : null}
    </div>
  );
}

function RoundsPractice({
  practice,
  onDone,
}: {
  practice: Extract<Practice, { kind: "rounds" }>;
  onDone: () => void;
}) {
  const [round, setRound] = useState(0);
  const [note, setNote] = useState<string | null>(null);
  const [readyNext, setReadyNext] = useState(false);
  const [done, setDone] = useState(false);
  const current = practice.rounds[round];

  if (!current || done) {
    return <Success>{practice.success}</Success>;
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold">
        Card {round + 1} of {practice.rounds.length}
      </p>
      <p>{current.prompt}</p>
      <p className="rounded-2xl border-4 border-foreground bg-card p-4 leading-snug">{current.sample}</p>
      {current.choices.map((choice) => (
        <BigButton
          key={choice}
          variant="outline"
          onClick={() => {
            if (choice === current.answer) {
              setNote(current.feedback);
              if (round + 1 >= practice.rounds.length) {
                setDone(true);
                onDone();
              } else {
                setReadyNext(true);
              }
            } else {
              setNote("Not quite. Look at the card and pick a different part.");
              setReadyNext(false);
            }
          }}
        >
          {choice}
        </BigButton>
      ))}
      {note && !readyNext ? <Note>{note}</Note> : null}
      {note && readyNext ? <Success>{note}</Success> : null}
      {readyNext ? (
        <BigButton
          onClick={() => {
            setRound((value) => value + 1);
            setNote(null);
            setReadyNext(false);
          }}
        >
          Next card
        </BigButton>
      ) : null}
    </div>
  );
}

function CodePractice({ projectId, onDone }: { projectId: string; onDone: () => void }) {
  return <Playground projectId={projectId} onDone={onDone} />;
}
