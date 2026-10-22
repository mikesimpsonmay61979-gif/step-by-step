import type { ReactNode } from "react";
import type { PictureId } from "@/lib/types";

const frame = "h-36 w-full max-w-xs";

export function Picture({ id }: { id: PictureId }) {
  return (
    <svg viewBox="0 0 200 140" className={frame} aria-hidden="true">
      <rect width="200" height="140" rx="18" fill="#fffdf8" stroke="#1c140c" strokeWidth="4" />
      {scenes[id]}
    </svg>
  );
}

export function DoneMark() {
  return (
    <svg viewBox="0 0 80 80" className="h-28 w-28" role="img" aria-label="Finished">
      <circle cx="40" cy="40" r="34" fill="#e5f6ea" stroke="#14532d" strokeWidth="6" />
      <path
        d="M24 42 l10 10 l22-24"
        fill="none"
        stroke="#14532d"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Stroke({ d }: { d: string }) {
  return <path d={d} fill="none" stroke="#0e2a47" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />;
}

const scenes: Record<PictureId, ReactNode> = {
  pointer: (
    <>
      <Stroke d="M46 36 h70" />
      <path d="M128 28 l28 18 l-28 18 z" fill="#0e2a47" />
      <circle cx="58" cy="92" r="18" fill="#efe6d6" stroke="#1c140c" strokeWidth="4" />
      <path d="M58 80 v24 M46 92 h24" stroke="#1c140c" strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  click: (
    <>
      <rect x="40" y="48" width="120" height="48" rx="14" fill="#14532d" />
      <path d="M78 72 h44" stroke="#fffdf8" strokeWidth="6" strokeLinecap="round" />
    </>
  ),
  keyboard: (
    <>
      <rect x="28" y="40" width="144" height="68" rx="10" fill="#efe6d6" stroke="#1c140c" strokeWidth="4" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={40 + i * 20} y="52" width="14" height="14" rx="2" fill="#fffdf8" stroke="#1c140c" strokeWidth="3" />
      ))}
      <rect x="56" y="82" width="88" height="12" rx="3" fill="#0e2a47" />
    </>
  ),
  folder: (
    <>
      <path d="M36 52 h40 l10 12 h78 v48 h-128 z" fill="#fde68a" stroke="#1c140c" strokeWidth="4" />
      <rect x="52" y="78" width="64" height="18" rx="3" fill="#fffdf8" stroke="#1c140c" strokeWidth="3" />
    </>
  ),
  browser: (
    <>
      <rect x="28" y="32" width="144" height="80" rx="8" fill="#fffdf8" stroke="#1c140c" strokeWidth="4" />
      <rect x="28" y="32" width="144" height="18" rx="8" fill="#0e2a47" />
      <rect x="40" y="62" width="90" height="10" rx="5" fill="#efe6d6" stroke="#1c140c" strokeWidth="3" />
      <path d="M44 92 h70" stroke="#0e2a47" strokeWidth="4" />
    </>
  ),
  mail: (
    <>
      <rect x="32" y="40" width="136" height="72" rx="8" fill="#fffdf8" stroke="#1c140c" strokeWidth="4" />
      <path d="M36 46 l64 40 l64-40" fill="none" stroke="#0e2a47" strokeWidth="4" />
    </>
  ),
  shield: (
    <>
      <path d="M100 24 l52 16 v34 c0 28-22 42-52 50 c-30-8-52-22-52-50 v-34 z" fill="#e5f6ea" stroke="#14532d" strokeWidth="4" />
      <path d="M78 74 l14 14 l30-32" fill="none" stroke="#14532d" strokeWidth="6" strokeLinecap="round" />
    </>
  ),
  key: (
    <>
      <circle cx="72" cy="70" r="24" fill="none" stroke="#0e2a47" strokeWidth="6" />
      <path d="M92 70 h62 M132 70 v16 M150 70 v12" fill="none" stroke="#0e2a47" strokeWidth="6" strokeLinecap="round" />
    </>
  ),
  helper: (
    <>
      <rect x="48" y="36" width="104" height="72" rx="16" fill="#efe6d6" stroke="#1c140c" strokeWidth="4" />
      <circle cx="84" cy="68" r="6" fill="#0e2a47" />
      <circle cx="116" cy="68" r="6" fill="#0e2a47" />
      <path d="M82 88 h36" stroke="#0e2a47" strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  question: (
    <>
      <circle cx="100" cy="70" r="36" fill="#fff4e0" stroke="#7c2d12" strokeWidth="4" />
      <path d="M88 62 c0-12 24-14 24 0 c0 10-12 10-12 20" fill="none" stroke="#7c2d12" strokeWidth="5" strokeLinecap="round" />
      <circle cx="100" cy="94" r="3" fill="#7c2d12" />
    </>
  ),
  details: (
    <>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="40" y={36 + i * 28} width="22" height="18" rx="4" fill={i < 2 ? "#14532d" : "#fffdf8"} stroke="#1c140c" strokeWidth="3" />
          <path d={`M74 ${46 + i * 28} h80`} stroke="#1c140c" strokeWidth="4" strokeLinecap="round" />
        </g>
      ))}
    </>
  ),
  check: (
    <>
      <circle cx="100" cy="70" r="36" fill="#e5f6ea" stroke="#14532d" strokeWidth="4" />
      <path d="M78 72 l14 14 l32-34" fill="none" stroke="#14532d" strokeWidth="6" strokeLinecap="round" />
    </>
  ),
  lock: (
    <>
      <rect x="62" y="64" width="76" height="48" rx="8" fill="#fffdf8" stroke="#1c140c" strokeWidth="4" />
      <path d="M78 64 v-12 a22 22 0 0 1 44 0 v12" fill="none" stroke="#0e2a47" strokeWidth="6" />
      <circle cx="100" cy="88" r="5" fill="#0e2a47" />
    </>
  ),
  steps: (
    <>
      <rect x="36" y="86" width="36" height="22" rx="4" fill="#0e2a47" />
      <rect x="82" y="62" width="36" height="46" rx="4" fill="#163a5f" />
      <rect x="128" y="38" width="36" height="70" rx="4" fill="#14532d" />
    </>
  ),
  blocks: (
    <>
      <rect x="30" y="46" width="40" height="48" rx="6" fill="#fde68a" stroke="#1c140c" strokeWidth="3" />
      <rect x="80" y="46" width="40" height="48" rx="6" fill="#bfdbfe" stroke="#1c140c" strokeWidth="3" />
      <rect x="130" y="46" width="40" height="48" rx="6" fill="#bbf7d0" stroke="#1c140c" strokeWidth="3" />
    </>
  ),
  page: (
    <>
      <rect x="58" y="24" width="84" height="96" rx="6" fill="#fffdf8" stroke="#1c140c" strokeWidth="4" />
      <path d="M72 48 h56 M72 66 h40 M72 82 h48" stroke="#0e2a47" strokeWidth="5" strokeLinecap="round" />
    </>
  ),
  palette: (
    <>
      <circle cx="70" cy="70" r="18" fill="#9a3412" />
      <circle cx="110" cy="52" r="18" fill="#0e2a47" />
      <circle cx="132" cy="88" r="18" fill="#14532d" />
    </>
  ),
  counter: (
    <>
      <rect x="36" y="40" width="128" height="36" rx="10" fill="#0e2a47" />
      <path d="M70 92 h16 M100 92 h30" stroke="#1c140c" strokeWidth="6" strokeLinecap="round" />
    </>
  ),
  star: (
    <path
      d="M100 28 l12 28 h30 l-24 18 l9 30 l-27-18 l-27 18 l9-30 l-24-18 h30 z"
      fill="#fde68a"
      stroke="#1c140c"
      strokeWidth="4"
      strokeLinejoin="round"
    />
  ),
  bug: (
    <>
      <circle cx="100" cy="74" r="26" fill="#fff4e0" stroke="#7c2d12" strokeWidth="4" />
      <path d="M74 60 l-16-16 M126 60 l16-16 M74 90 l-16 16 M126 90 l16 16" stroke="#7c2d12" strokeWidth="4" strokeLinecap="round" />
      <path d="M90 74 h20" stroke="#7c2d12" strokeWidth="4" strokeLinecap="round" />
    </>
  ),
};
