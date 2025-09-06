export type SM2State = {
  ef: number;     // Easiness Factor
  reps: number;   // Repetition count
  interval: number; // in days
};

export function sm2Next(state: SM2State, grade: number): SM2State {
  let { ef, reps, interval } = state;

  if (grade < 3) {
    return { ef, reps: 0, interval: 1 };
  }

  reps += 1;
  if (reps == 1) interval = 1;
  else if (reps == 2) interval = 6;
  else interval = Math.round(interval * ef);

  ef = Math.max(1.3, ef + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02)));
  return { ef, reps, interval };
}

// Simple fixed-intervals fallback
export function fixedNext(currentIndex: number, grade: number): number {
  const ladder = [1, 3, 7, 14, 30, 60, 120];
  if (grade <= 2) return ladder[Math.max(0, currentIndex - 1)];
  return ladder[Math.min(ladder.length - 1, currentIndex + 1)];
}
