import { Event } from "@khlug/types/Event";
import { calcTimeRange } from "@khlug/util/calcTimeRange";
import axios from "axios";

type EventJson = {
  registerStartAt: string;
  registerEndAt: string;
  eventStartAt: string;
  eventEndAt: string;
  judgeStartAt: string;
  judgeEndAt: string;
};

export async function createEvent(): Promise<Event> {
  // const eventCdnPath = "https://cdn.khlug.org/event.json";
  // const response = await axios.get(eventCdnPath);
  // const eventJson: EventJson = response.data;

  // const registerStartAt = new Date(eventJson.registerStartAt);
  // const registerEndAt = new Date(eventJson.registerEndAt);
  // const registerRange = calcTimeRange(registerStartAt, registerEndAt);

  // const eventStartAt = new Date(eventJson.eventStartAt);
  // const eventEndAt = new Date(eventJson.eventEndAt);
  // const eventRange = calcTimeRange(eventStartAt, eventEndAt);

  // const judgeStartAt = new Date(eventJson.judgeStartAt);
  // const judgeEndAt = new Date(eventJson.judgeEndAt);
  // const judgeRange = calcTimeRange(judgeStartAt, judgeEndAt);

  const registerStartAt = new Date("2024-04-23T15:00:00.000Z");
  const registerEndAt = new Date("2024-12-31T15:00:00.000Z");
  const registerRange = calcTimeRange(registerStartAt, registerEndAt);

  const eventStartAt = new Date("2025-01-01T00:00:00.000Z");
  const eventEndAt = new Date("2025-12-31T00:00:00.000Z");
  const eventRange = calcTimeRange(eventStartAt, eventEndAt);

  const judgeStartAt = new Date("2025-01-01T00:00:00.000Z");
  const judgeEndAt = new Date("2025-12-31T00:00:00.000Z");
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
