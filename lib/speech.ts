let current: SpeechSynthesisUtterance | null = null;

export function canSpeak(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

function pickVoice(): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices();
  return (
    voices.find((voice) => voice.lang === "en-US" && voice.localService) ||
    voices.find((voice) => voice.lang.startsWith("en"))
  );
}

export function silence(): void {
  if (!canSpeak()) return;
  if (current) current.onend = null;
  window.speechSynthesis.cancel();
  current = null;
}

export function speak(text: string, onend?: () => void): boolean {
  if (!canSpeak()) return false;
  const synth = window.speechSynthesis;
  synth.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 0.88;
  utter.pitch = 1;
  utter.lang = "en-US";
  const voice = pickVoice();
  if (voice) utter.voice = voice;
  utter.onend = () => {
    current = null;
    onend?.();
  };
  utter.onerror = () => {
    current = null;
    onend?.();
  };
  current = utter;
  synth.speak(utter);
  return true;
}
