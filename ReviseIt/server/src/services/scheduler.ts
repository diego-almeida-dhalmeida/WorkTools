import { PrismaClient } from '@prisma/client';
import { sm2Next } from './sm2.js';

export async function scheduleNextFromReview(prisma: PrismaClient, itemId: string, grade: number) {
  const item = await prisma.item.findUnique({ where: { id: itemId } });
  if (!item) throw new Error('item not found');

  const state = {
    ef: item.ef ?? 2.5,
    reps: item.reps ?? 0,
    interval: item.intervalDays ?? 0
  };

  const next = sm2Next(state, grade);
  const due = new Date();
  due.setDate(due.getDate() + next.interval);

  const updated = await prisma.item.update({
    where: { id: itemId },
    data: { ef: next.ef, reps: next.reps, intervalDays: next.interval, dueDate: due }
  });

  return updated;
}
