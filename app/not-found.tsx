import { BigLink } from "@/components/controls";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-5 px-4 py-8">
      <h1 className="text-[1.8rem] leading-tight font-bold">That page is not here.</h1>
      <p className="leading-snug">The lesson or practice may have moved. Your saved progress is still on this device.</p>
      <BigLink href="/">Go to the start</BigLink>
    </div>
  );
}
