import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import { scheduleNextFromReview } from './services/scheduler.js';
import { createCalendarEventStub } from './services/calendar.js';

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ ok: true }));

// Create deck
app.post('/decks', async (req, res) => {
  const schema = z.object({
    userEmail: z.string().email(),
    name: z.string().min(1),
    goalMins: z.number().int().min(10).max(180).optional(),
  });

  const data = schema.parse(req.body);

  let user = await prisma.user.findUnique({ where: { email: data.userEmail } });
  if (!user) {
    user = await prisma.user.create({
      data: { email: data.userEmail, tz: process.env.DEFAULT_TZ || 'America/Sao_Paulo' },
    });
  }

  const deck = await prisma.deck.create({
    data: { userId: user.id, name: data.name, goalMins: data.goalMins ?? 25 },
  });
  res.json(deck);
});

// Create item
app.post('/items', async (req, res) => {
  const schema = z.object({
    deckId: z.string().min(1),
    title: z.string().min(1),
    url: z.string().url().optional(),
    notes: z.string().optional(),
  });
  const data = schema.parse(req.body);

  const item = await prisma.item.create({ data });
  res.json(item);
});

// Register review + schedule next
app.post('/reviews', async (req, res) => {
  const schema = z.object({
    userEmail: z.string().email(),
    itemId: z.string().min(1),
    grade: z.number().int().min(0).max(5),
    durationMin: z.number().int().min(5).max(180).optional(),
    pushCalendar: z.boolean().optional(),
  });
  const data = schema.parse(req.body);

  const user = await prisma.user.findUnique({ where: { email: data.userEmail } });
  if (!user) return res.status(404).json({ error: 'user not found' });

  const review = await prisma.review.create({
    data: {
      userId: user.id,
      itemId: data.itemId,
      grade: data.grade,
      durationMin: data.durationMin ?? 25,
    },
  });

  const updatedItem = await scheduleNextFromReview(prisma, data.itemId, data.grade);

  // Calendar stub
  if (data.pushCalendar) {
    await createCalendarEventStub({
      itemId: updatedItem.id,
      title: updatedItem.title,
      dueDate: updatedItem.dueDate!,
      durationMin: data.durationMin ?? 25,
      tz: user.tz,
    });
  }

  res.json({
    review,
    next: { dueDate: updatedItem.dueDate, intervalDays: updatedItem.intervalDays },
  });
});

// List items due today
app.get('/due', async (req, res) => {
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const todayEnd = new Date();
  todayEnd.setHours(23, 59, 59, 999);
  const items = await prisma.item.findMany({
    where: { dueDate: { gte: todayStart, lte: todayEnd } },
    orderBy: { dueDate: 'asc' },
  });
  res.json(items);
});

// Calendar endpoints (placeholders)
app.post('/calendar/connect', (_req, res) => {
  res.json({ message: 'Implement OAuth redirect here.' });
});

app.post('/calendar/schedule', (_req, res) => {
  res.json({ message: 'Schedule single event stub. See services/calendar.ts' });
});

app.listen(PORT, () => {
  console.log(`Revise.it API on http://localhost:${PORT}`);
});
