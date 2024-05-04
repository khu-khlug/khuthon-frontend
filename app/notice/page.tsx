import { NoticeItem } from "@khlug/components/NoticeItem/NoticeItem";
import { fetchNoticeList } from "@khlug/util/fetchNoticeList";

export default async function NoticePage() {
  const notices = await fetchNoticeList();

  return (
    <div className="board">
      <table>
        <tbody>
          {notices.length === 0 ? (
            <tr>
              <td className="no_document">게시물이 없습니다</td>
            </tr>
          ) : (
            notices.map((notice) => (
              <tr key={notice.id}>
                <td>
                  <NoticeItem
                    id={notice.id}
                    title={notice.title}
                    createdAt={notice.createdAt}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
