import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

export function formatDate(date: Date): string {
  return dayjs(date).tz("Asia/Seoul").format("YYYY.MM.DD. HH:mm:ss");
}
