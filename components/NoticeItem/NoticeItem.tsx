import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(timezone);
dayjs.extend(utc);

type NoticeItemProps = {
  id: string;
  title: string;
  createdAt: Date;
};

export function NoticeItem({ id, title, createdAt }: NoticeItemProps) {
  return (
    <a href={`/notice/${id}`}>
      <span className="title">{title}</span>
      <span className="meta">
        <span className="created_at">
          {dayjs.tz(createdAt, "Asia/Seoul").format("YYYY.MM.DD.")}
        </span>
      </span>
    </a>
  );
}
