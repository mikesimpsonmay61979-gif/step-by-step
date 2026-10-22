import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { WordView } from "@/components/words-view";
import { glossary, glossaryById } from "@/lib/glossary";

export function generateStaticParams() {
  return glossary.map((entry) => ({ word: entry.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ word: string }>;
}): Promise<Metadata> {
  const { word } = await params;
  const entry = glossaryById(word);
  return { title: entry?.word ?? "Word" };
}

export default function Page({ params }: { params: Promise<{ word: string }> }) {
  return (
    <Suspense fallback={<p className="mx-auto max-w-3xl px-4 py-8 text-[1.4rem]">Opening this word…</p>}>
      <WordRoute params={params} />
    </Suspense>
  );
}

async function WordRoute({ params }: { params: Promise<{ word: string }> }) {
  const { word } = await params;
  const entry = glossaryById(word);
  if (!entry) notFound();
  return <WordView entry={entry} />;
}