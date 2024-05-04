import * as fs from "fs/promises";

type NoticeMetadata = {
  id: string;
  title: string;
  createdAt: Date;
};

type Notice = NoticeMetadata & {
  content: string;
};

export async function fetchNotice(noticeId: string): Promise<Notice> {
  const metadata = await fs.readFile(
    `./notices/${noticeId}/metadata.json`,
    "utf8"
  );
  const metadataJson: NoticeMetadata = JSON.parse(metadata);

  const content = await fs.readFile(`./notices/${noticeId}/content.md`, "utf8");

  return {
    ...metadataJson,
    content,
  };
}
