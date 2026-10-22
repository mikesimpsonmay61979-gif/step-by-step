"use client";

import { BigButton, BigLink } from "@/components/controls";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-5 px-4 py-8">
      <h1 className="text-[1.8rem] leading-tight font-bold">Something went wrong on this page.</h1>
      <p className="leading-snug">You can try again, or go home. Your saved progress is still on this device.</p>
      <BigButton onClick={reset}>Try this page again</BigButton>
      <BigLink href="/" variant="outline">
        Go to the start
      </BigLink>
    </div>
  );
}
