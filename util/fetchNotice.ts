type Notice = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};

export async function fetchNotice(noticeId: string): Promise<Notice> {
  const eventCdnPath = `https://cdn.khlug.org/notices/${noticeId}.json`;
  const response = await fetch(eventCdnPath, { cache: "no-store" });
  const notice: Notice = await response.json();

  return {
    ...notice,
    createdAt: new Date(notice.createdAt),
    updatedAt: new Date(notice.updatedAt),
  };
}
