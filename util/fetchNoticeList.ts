import * as fs from "fs/promises";

type PartialNoticeJson = {
  id: string;
  title: string;
  createdAt: string;
};

type PartialNotice = {
  id: string;
  title: string;
  createdAt: Date;
};

export async function fetchNoticeList(): Promise<PartialNotice[]> {
  const metadata = await fs.readFile("./notices/_list.json", "utf-8");
  const notices: PartialNoticeJson[] = Array.from(JSON.parse(metadata));

  return notices.map((notice) => ({
    id: notice.id,
    title: notice.title,
    createdAt: new Date(notice.createdAt),
  }));
}
