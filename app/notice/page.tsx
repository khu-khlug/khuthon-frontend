import { NoticeItem } from "@khlug/components/NoticeItem/NoticeItem";

type Document = {
  id: string;
  title: string;
  createdAt: Date;
};

export default function NoticePage() {
  const mockDocuments: Document[] = [
    {
      id: "1",
      title: "공지사항 1",
      createdAt: new Date(),
    },
    {
      id: "2",
      title: "공지사항 2",
      createdAt: new Date(),
    },
  ];

  return (
    <div className="board">
      <table>
        <tbody>
          {mockDocuments.length === 0 ? (
            <tr>
              <td className="no_document">게시물이 없습니다</td>
            </tr>
          ) : (
            mockDocuments.map((doc) => (
              <tr key={doc.id}>
                <td>
                  <NoticeItem
                    id={doc.id}
                    title={doc.title}
                    createdAt={doc.createdAt}
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
