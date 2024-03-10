import dayjs from "dayjs";

export function getDateDiffText(a: Date, b: Date): string {
  const daysDiff = dayjs(b).diff(dayjs(a), "day");

  switch (daysDiff) {
    case -3:
      return "글피";
    case -2:
      return "모레";
    case -1:
      return "내일";
    case 0:
      return "오늘";
    case 1:
      return "어제";
    case 2:
      return "그제";
    case 3:
      return "그끄제";
    default:
      return daysDiff > 0 ? `${daysDiff}일 전` : `${-daysDiff}일 후`;
  }
}
