import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

import { Event } from "@khlug/types/Event";
import { calcTimeRange } from "@khlug/util/calcTimeRange";

dayjs.extend(utc);
dayjs.extend(timezone);

export async function createEvent(): Promise<Event> {
  const kstDate = (date: string) => dayjs.tz(date, "Asia/Seoul").toDate();

  const registerStartAt = kstDate("2026-04-24 00:00:00.000");
  const registerEndAt = kstDate("2026-05-01 23:59:59.999");
  const registerRange = calcTimeRange(registerStartAt, registerEndAt);

  const eventStartAt = kstDate("2026-05-08 18:00:00.000");
  const eventEndAt = kstDate("2026-05-09 13:00:00.000");
  const eventRange = calcTimeRange(eventStartAt, eventEndAt);

  const judgeStartAt = kstDate("2026-05-09 08:30:00.000");
  const judgeEndAt = kstDate("2026-05-09 12:10:00.000");
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
