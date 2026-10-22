import Link from "next/link";
import type { ComponentProps } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

export const bigControl =
  "h-auto min-h-16 w-full whitespace-normal rounded-2xl border-2 px-5 py-4 text-left text-[1.15rem] leading-snug font-bold";

export const fieldClass =
  "w-full min-h-16 rounded-2xl border-4 border-foreground bg-card px-4 py-3 text-[1.15rem] leading-snug text-foreground placeholder:text-[#3d3226]";

export function BigButton({
  className,
  variant = "default",
  type = "button",
  ...props
}: ComponentProps<typeof Button>) {
  return (
    <Button
      type={type}
      variant={variant}
      className={cn(
        bigControl,
        variant === "default" && "hover:bg-[#163a5f]",
        variant !== "default" && "hover:bg-secondary",
        className,
      )}
      {...props}
    />
  );
}

export function BigLink({
  href,
  className,
  variant = "default",
  children,
}: {
  href: string;
  className?: string;
  variant?: "default" | "outline" | "secondary";
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant }),
        bigControl,
        variant === "default" && "hover:bg-[#163a5f]",
        variant !== "default" && "hover:bg-secondary",
        className,
      )}
    >
      {children}
    </Link>
  );
}
