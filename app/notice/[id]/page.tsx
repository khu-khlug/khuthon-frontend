import { formatDate } from "@khlug/util/formaDate";
import { getDateDiffText } from "@khlug/util/getDateDiffText";

type NoticeDetailPageProps = {
  params: {
    id: string;
  };
};

export default function NoticeDetailPage({ params }: NoticeDetailPageProps) {
  const { id } = params;

  const mockDocument = {
    id: "1",
    title: "khuthon 2023 접수가 마감되었습니다!",
    content: [
      "<p>기존 공지와 같이 참가 신청 기간이 9일 목요일 23:59까지로 연장되었으나</p>",
      "<p>참가 제한 인원인 128명에 도달하여 11월 7일 17:57:27 부로 접수가 마감되었습니다.</p>",
      "<p>38팀 128명이 참가하는 이번 대회는 D-3에 공개된 '교육의 정보화'라는 주제와 연계해 자유롭게 작품의 주제를 선정해 무박 2일간 해커톤을 벌이게 됩니다.</p>",
      "<p>khuthon 2023에 많은 관심 가져주셔서 진심으로 고맙습니다.</p>",
      "<p> </p>",
      "<p>오는 11월 10일 금요일 18시에,</p>",
      "<p>전자정보대학관 205호에서 뵙겠습니다!</p>",
    ].join(""),
    files: [{ id: "fileId", url: "fileUrl", name: "파일.pdf" }],
    createdAt: new Date(2023, 10, 7, 18, 11, 25),
    updatedAt: new Date(),
  };

  const isUpdated =
    mockDocument.createdAt.getTime() !== mockDocument.updatedAt.getTime();

  return (
    <div className="document">
      <div className="document_header">
        <h3 className="title">{mockDocument.title}</h3>
        <div className="created_at">
          {formatDate(mockDocument.createdAt)} (
          {getDateDiffText(mockDocument.createdAt, new Date())})
          {isUpdated && (
            <>
              <br />
              {formatDate(mockDocument.updatedAt)} (
              {getDateDiffText(mockDocument.updatedAt, new Date())}) 수정{" "}
            </>
          )}
        </div>
      </div>
      <div className="document_body">
        <div
          className="real_content"
          dangerouslySetInnerHTML={{ __html: mockDocument.content }}
        ></div>
        {mockDocument.files.length > 0 && (
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
        )}
      </div>

      <div className="btnArea">
        <button type="button">
          <a href="/notice">목록</a>
        </button>
      </div>
    </div>
  );
}
