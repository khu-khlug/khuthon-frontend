import { TimeRange } from "@khlug/constant";

export function calcTimeRange(startAt: Date, endAt: Date): TimeRange {
  const now = new Date();
  if (now < startAt) {
    return "BEFORE";
  } else if (now > endAt) {
    return "AFTER";
  } else {
    return "BETWEEN";
  }
}
