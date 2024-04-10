type PartialNotice = {
  id: string;
  title: string;
  createdAt: Date;
};

export async function fetchNoticeList(): Promise<PartialNotice[]> {
  const eventCdnPath = "https://cdn.khlug.org/notice.json";
  const response = await fetch(eventCdnPath, { cache: "no-store" });
  const notices: PartialNotice[] = await response.json();
  return notices;
}
