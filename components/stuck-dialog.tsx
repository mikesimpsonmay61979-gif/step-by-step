"use client";

import { BigButton } from "@/components/controls";
import { SpeakButton } from "@/components/speak-button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function StuckDialog({
  open,
  hint,
  onOpenChange,
  onSkip,
}: {
  open: boolean;
  hint: string;
  onOpenChange: (open: boolean) => void;
  onSkip?: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showCloseButton={false} className="max-w-xl gap-5 p-6 text-[1.05rem] sm:max-w-xl">
        <DialogHeader className="gap-3">
          <DialogTitle className="text-[1.5rem] leading-tight font-bold">A hint</DialogTitle>
          <DialogDescription className="text-[1.05rem] leading-snug text-foreground">
            Take your time. This hint stays on the screen until you close it.
          </DialogDescription>
        </DialogHeader>
        <p className="rounded-2xl border-4 border-foreground bg-[#fff4e0] p-4 leading-snug">{hint}</p>
        <SpeakButton text={hint} label="Read the hint" />
        {onSkip ? (
          <BigButton
            variant="secondary"
            onClick={() => {
              onSkip();
              onOpenChange(false);
            }}
          >
            Skip this practice
          </BigButton>
        ) : null}
        <DialogClose render={<BigButton variant="default" />}>Back to the lesson</DialogClose>
      </DialogContent>
    </Dialog>
  );
}
