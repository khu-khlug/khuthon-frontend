import { fetchNotice } from "@khlug/util/fetchNotice";
import { formatDate } from "@khlug/util/formaDate";
import { getDateDiffText } from "@khlug/util/getDateDiffText";

type NoticeDetailPageProps = {
  params: {
    id: string;
  };
};

export default async function NoticeDetailPage({
  params,
}: NoticeDetailPageProps) {
  const { id: noticeId } = params;
  const notice = await fetchNotice(noticeId);

  const isUpdated = notice.createdAt.getTime() !== notice.updatedAt.getTime();

  return (
    <div className="document">
      <div className="document_header">
        <h3 className="title">{notice.title}</h3>
        <div className="created_at">
          {formatDate(notice.createdAt)} (
          {getDateDiffText(notice.createdAt, new Date())})
          {isUpdated && (
            <>
              <br />
              {formatDate(notice.updatedAt)} (
              {getDateDiffText(notice.updatedAt, new Date())}) 수정{" "}
            </>
          )}
        </div>
      </div>
      <div className="document_body">
        <div
          className="real_content"
          dangerouslySetInnerHTML={{ __html: notice.content }}
        ></div>
        {/* TODO[lery]: 파일 관련 코드 추가 필요 */}
        {/* {mockDocument.files.length > 0 && (
          <div className="download">
            {mockDocument.files.map((file) => (
              <p key={file.id}>
                <a href={file.url}>
                  <i className="xi-download"></i> {file.name}
                </a>
                <br />
              </p>
            ))}
          </div>
        )} */}
      </div>

      <div className="btnArea">
        <button type="button">
          <a href="/notice">목록</a>
        </button>
      </div>
    </div>
  );
}
