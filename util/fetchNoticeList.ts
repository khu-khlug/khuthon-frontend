import axios from "axios";

type PartialNotice = {
  id: string;
  title: string;
  createdAt: Date;
};

export async function fetchNoticeList(): Promise<PartialNotice[]> {
  const eventCdnPath = "https://cdn.khlug.org/notice.json";
  const response = await axios.get(eventCdnPath);
  const notices: PartialNotice[] = response.data;
  return notices;
}
