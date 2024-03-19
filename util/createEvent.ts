import { Event } from "@khlug/types/Event";
import { calcTimeRange } from "@khlug/util/calcTimeRange";

type EventJson = {
  registerStartAt: string;
  registerEndAt: string;
  eventStartAt: string;
  eventEndAt: string;
  judgeStartAt: string;
  judgeEndAt: string;
};

export async function createEvent(): Promise<Event> {
  const eventCdnPath = "https://cdn.khlug.org/event.json";
  const eventJson: EventJson = await fetch(eventCdnPath).then((res) =>
    res.json()
  );

  const registerStartAt = new Date(eventJson.registerStartAt);
  const registerEndAt = new Date(eventJson.registerEndAt);
  const registerRange = calcTimeRange(registerStartAt, registerEndAt);

  const eventStartAt = new Date(eventJson.eventStartAt);
  const eventEndAt = new Date(eventJson.eventEndAt);
  const eventRange = calcTimeRange(eventStartAt, eventEndAt);

  const judgeStartAt = new Date(eventJson.judgeStartAt);
  const judgeEndAt = new Date(eventJson.judgeEndAt);
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
