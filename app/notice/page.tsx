import { NoticeItem } from "@khlug/components/NoticeItem/NoticeItem";
import { fetchNoticeList } from "@khlug/util/fetchNoticeList";

export default async function NoticePage() {
  // 일단 페이지네이션 없이 구현되어 있는데, 이후 필요 시 수정되긴 해야 합니다.
  // 다만 어차피 제목 정도가 가변 길이라서 크기가 크게 늘어나진 않을 거 같긴 합니다.
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
