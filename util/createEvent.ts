import { Event } from "@khlug/types/Event";
import { calcTimeRange } from "@khlug/util/calcTimeRange";
// import axios from "axios";

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

  const registerStartAt = new Date("2024-04-28T15:00:00.000Z");
  const registerEndAt = new Date("2024-05-06T15:00:00.000Z");
  const registerRange = calcTimeRange(registerStartAt, registerEndAt);

  const eventStartAt = new Date("2024-05-10T09:00:00.000Z");
  const eventEndAt = new Date("2024-05-11T03:30:00.000Z");
  const eventRange = calcTimeRange(eventStartAt, eventEndAt);

  const judgeStartAt = new Date("2024-05-10T23:30:00.000Z");
  const judgeEndAt = new Date("2024-05-11T03:00:00.000Z");
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
