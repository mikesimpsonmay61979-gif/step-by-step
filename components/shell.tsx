"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, type ReactNode } from "react";
import { BookOpen, House, Library, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/lib/progress";
import type { TextSize } from "@/lib/types";
import { cn } from "cn";

const sizes: { id: TextSize; label: string }[] = [
  { id: "large", label: "Large" },
  { id: "huge", label: "Larger" },
  { id: "max", label: "Largest" },
];

export function Shell({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-card focus:p-4 focus:text-[1.1rem] focus:font-bold"
      >
        Skip to the page
      </a>
      <header className="sticky top-0 z-30 border-b-4 border-foreground bg-background">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <Link href="/" className="text-[1.45rem] leading-tight font-bold">
            First Steps
          </Link>
          <TextSizeControl />
        </div>
      </header>
      <main id="main" className="mx-auto w-full flex-1 pb-40">
        {children}
      </main>
      <Suspense fallback={null}>
        <BottomNav />
      </Suspense>
    </>
  );
}

function TextSizeControl() {
  const { ready, state, setTextSize } = useProgress();
  return (
    <div role="group" aria-label="Text size" className="flex flex-wrap gap-2">
      {sizes.map((size) => {
        const pressed = ready && state.textSize === size.id;
        return (
          <Button
            key={size.id}
            type="button"
            variant={pressed ? "default" : "outline"}
            aria-pressed={pressed}
            className="h-auto min-h-12 w-auto rounded-2xl border-2 px-3 py-2 text-[1rem] font-bold"
            onClick={() => setTextSize(size.id)}
          >
            {size.label}
          </Button>
        );
      })}
    </div>
  );
}

function BottomNav() {
  const pathname = usePathname();
  const items = [
    { href: "/", label: "Home", icon: House, on: pathname === "/" },
    { href: "/lessons", label: "Lessons", icon: BookOpen, on: pathname.startsWith("/lessons") },
    { href: "/progress", label: "Progress", icon: Star, on: pathname.startsWith("/progress") },
    { href: "/words", label: "Words", icon: Library, on: pathname.startsWith("/words") },
  ];
  return (
    <nav
      aria-label="Pages"
      className="fixed inset-x-0 bottom-0 z-40 border-t-4 border-foreground bg-background pb-[env(safe-area-inset-bottom)]"
    >
      <ul className="mx-auto grid w-full max-w-6xl grid-cols-4">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={item.on ? "page" : undefined}
              className={cn(
                "flex min-h-20 flex-col items-center justify-center gap-1 px-1 py-2 text-center text-[0.95rem] leading-tight font-bold",
                item.on ? "bg-primary text-primary-foreground" : "text-foreground",
              )}
            >
              <item.icon className="size-7" aria-hidden="true" />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
