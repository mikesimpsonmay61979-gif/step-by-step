import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { TrackView } from "@/components/track-view";
import { getTrack, tracks } from "@/lib/lessons";

export function generateStaticParams() {
  return tracks.map((track) => ({ track: track.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ track: string }>;
}): Promise<Metadata> {
  const { track } = await params;
  const found = getTrack(track);
  return { title: found?.title ?? "Lessons" };
}

export default function Page({ params }: { params: Promise<{ track: string }> }) {
  return (
    <Suspense fallback={<p className="mx-auto max-w-3xl px-4 py-8 text-[1.4rem]">Opening lessons…</p>}>
      <TrackRoute params={params} />
    </Suspense>
  );
}

async function TrackRoute({ params }: { params: Promise<{ track: string }> }) {
  const { track } = await params;
  const found = getTrack(track);
  if (!found) notFound();
  return <TrackView track={found} />;
}
