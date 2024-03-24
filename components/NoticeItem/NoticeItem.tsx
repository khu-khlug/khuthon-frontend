import { formatDate } from "@khlug/util/formaDate";

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
        <span className="created_at">{formatDate(createdAt)}</span>
      </span>
    </a>
  );
}
