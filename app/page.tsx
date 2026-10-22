import type { Metadata } from "next";
import { HomeView } from "@/components/home-view";

export const metadata: Metadata = {
  title: "First Steps",
};

export default function Page() {
  return <HomeView />;
}
