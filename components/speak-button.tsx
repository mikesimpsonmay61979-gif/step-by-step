"use client";

import { useEffect, useState } from "react";
import { BigButton } from "@/components/controls";
import { canSpeak, silence, speak } from "@/lib/speech";

export function SpeakButton({ text, label = "Read this aloud" }: { text: string; label?: string }) {
  const [speaking, setSpeaking] = useState(false);
  const [unsupported, setUnsupported] = useState(false);

  useEffect(() => {
    return () => silence();
  }, [text]);

  function toggle() {
    if (speaking) {
      silence();
      setSpeaking(false);
      return;
    }
    if (!canSpeak()) {
      setUnsupported(true);
      return;
    }
    const started = speak(text, () => setSpeaking(false));
    if (!started) {
      setUnsupported(true);
      return;
    }
    setUnsupported(false);
    setSpeaking(true);
  }

  return (
    <div className="flex flex-col gap-2">
      <BigButton variant={speaking ? "secondary" : "outline"} aria-pressed={speaking} onClick={toggle}>
        {speaking ? "Stop reading" : label}
      </BigButton>
      {unsupported ? (
        <p className="rounded-2xl border-4 border-[#7c2d12] bg-[#fff4e0] p-4 leading-snug">
          This browser cannot read aloud. You can still read the words on the screen.
        </p>
      ) : null}
    </div>
  );
}
