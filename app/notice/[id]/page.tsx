import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import classNames from "classnames";

import { fetchNotice } from "@khlug/util/fetchNotice";
import { formatDate } from "@khlug/util/formaDate";
import { getDateDiffText } from "@khlug/util/getDateDiffText";
import { fetchNoticeList } from "@khlug/util/fetchNoticeList";

type NoticeDetailPageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const notices = await fetchNoticeList();
  return notices.map((notice) => ({
    id: notice.id,
  }));
}

export default async function NoticeDetailPage({
  params,
}: NoticeDetailPageProps) {
  const { id: noticeId } = params;
  const notice = await fetchNotice(noticeId);

  return (
    <div className="document">
      <div className="bg-white p-4">
        <h3 className="font-bold text-2xl m-0">{notice.title}</h3>
        <div className="mt-2">
          {formatDate(notice.createdAt)} (
          {getDateDiffText(notice.createdAt, new Date())})
        </div>
      </div>
      <div className="document_body p-4">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            // Use a fancy hr
            img: ({ node, ...props }) => (
              // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
              <img
                className={classNames(
                  props.className,
                  "object-contain w-full h-full"
                )}
                {...props}
              />
            ),
            p: ({ node, ...props }) => (
              <p className="leading-6 text-sm" {...props} />
            ),
          }}
        >
          {notice.content}
        </ReactMarkdown>
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
