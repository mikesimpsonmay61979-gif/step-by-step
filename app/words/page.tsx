import type { Metadata } from "next";
import { WordsView } from "@/components/words-view";

export const metadata: Metadata = {
  title: "Word list",
};

export default function Page() {
  return <WordsView />;
}
