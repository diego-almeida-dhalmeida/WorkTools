// Minimal stub to show where to integrate googleapis.
// Replace with real OAuth flow and token storage.

type CreateEventInput = {
  itemId: string;
  title: string;
  dueDate: Date;
  durationMin: number;
  tz: string;
};

export async function createCalendarEventStub(input: CreateEventInput) {
  console.log('[CalendarStub] Would create event:', {
    summary: `[Revisão] ${input.title}`,
    start: input.dueDate.toISOString(),
    durationMin: input.durationMin,
    tz: input.tz,
  });
  // Return fake "event id"
  return `evt_${input.itemId.slice(0,6)}_${Math.floor(Math.random()*9999)}`;
}
