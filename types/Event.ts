import { TimeRange } from "@khlug/constant";

export type Event = {
  registerStartAt: Date;
  registerEndAt: Date;
  registerRange: TimeRange;
  eventStartAt: Date;
  eventEndAt: Date;
  eventRange: TimeRange;
  judgeStartAt: Date;
  judgeEndAt: Date;
  judgeRange: TimeRange;
};
