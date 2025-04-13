import { Event } from "@khlug/types/Event";
import { calcTimeRange } from "@khlug/util/calcTimeRange";

export async function createEvent(): Promise<Event> {
  const registerStartAt = new Date("2025-04-27T15:00:00.000Z");
  const registerEndAt = new Date("2025-05-05T14:59:59.999Z");
  const registerRange = calcTimeRange(registerStartAt, registerEndAt);

  const eventStartAt = new Date("2025-05-09T09:00:00.000Z");
  const eventEndAt = new Date("2025-05-10T03:30:00.000Z");
  const eventRange = calcTimeRange(eventStartAt, eventEndAt);

  const judgeStartAt = new Date("2025-05-09T23:30:00.000Z");
  const judgeEndAt = new Date("2025-05-10T03:10:00.000Z");
  const judgeRange = calcTimeRange(judgeStartAt, judgeEndAt);

  return {
    registerStartAt,
    registerEndAt,
    registerRange,
    eventStartAt,
    eventEndAt,
    eventRange,
    judgeStartAt,
    judgeEndAt,
    judgeRange,
  };
}
