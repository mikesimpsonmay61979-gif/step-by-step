import type { Metadata } from "next";
import { PracticeList } from "@/components/practice-view";

export const metadata: Metadata = {
  title: "Webpage practice",
};

export default function Page() {
  return <PracticeList />;
}
