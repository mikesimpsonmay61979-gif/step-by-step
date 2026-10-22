import type { Metadata } from "next";
import { LessonsHome } from "@/components/track-view";

export const metadata: Metadata = {
  title: "Lessons",
};

export default function Page() {
  return <LessonsHome />;
}
