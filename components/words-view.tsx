"use client";

import { useMemo, useState } from "react";
import { BigLink, fieldClass } from "@/components/controls";
import { SpeakButton } from "@/components/speak-button";
import { glossary } from "@/lib/glossary";
import type { GlossaryEntry } from "@/lib/types";

export function WordsView() {
  const [query, setQuery] = useState("");

  const shown = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const sorted = [...glossary].sort((a, b) => a.word.localeCompare(b.word));
    if (!needle) return sorted;
    return sorted.filter(
      (entry) => entry.word.toLowerCase().includes(needle) || entry.say.toLowerCase().includes(needle),
    );
  }, [query]);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-5 px-4 py-6">
      <h1 className="text-[1.8rem] leading-tight font-bold">Word list</h1>
      <p className="leading-snug">Plain meanings for words these lessons use. Tap a word to open it.</p>
      <label htmlFor="word-search" className="font-bold">
        Find a word
      </label>
      <input
        id="word-search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Type a word, like email"
        className={fieldClass}
      />
      {shown.length === 0 ? (
        <p className="rounded-2xl border-4 border-[#7c2d12] bg-[#fff4e0] p-4 leading-snug">
          No word matches that. Try a shorter word.
        </p>
      ) : (
        <ul className="flex flex-col gap-3">
          {shown.map((entry) => (
            <li key={entry.id}>
              <BigLink href={`/words/${entry.id}`} variant="outline">
                {entry.word}
              </BigLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function WordView({ entry }: { entry: GlossaryEntry }) {
  const speech = `${entry.word}. ${entry.say} Example. ${entry.example}`;
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-5 px-4 py-6">
      <h1 className="text-[2rem] leading-tight font-bold">{entry.word}</h1>
      <p className="leading-snug">{entry.say}</p>
      <p className="leading-snug">Example: {entry.example}</p>
      <SpeakButton text={speech} label="Read this word" />
      <BigLink href="/words" variant="outline">
        All words
      </BigLink>
    </div>
  );
}
