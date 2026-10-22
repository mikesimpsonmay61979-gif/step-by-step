export function localDate(d = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function prevDay(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() - 1);
  return localDate(dt);
}

/** Days in a row, counting today if they practiced, or yesterday if they have not opened the app yet today. */
export function currentStreak(dates: string[], today = localDate()): number {
  const set = new Set(dates);
  let cursor = today;
  if (!set.has(cursor)) {
    cursor = prevDay(cursor);
    if (!set.has(cursor)) return 0;
  }
  let count = 0;
  while (set.has(cursor)) {
    count += 1;
    cursor = prevDay(cursor);
  }
  return count;
}
