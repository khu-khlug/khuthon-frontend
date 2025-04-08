import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import classNames from "classnames";
import Link from "next/link";

import { fetchNotice } from "@khlug/util/fetchNotice";
import { formatDate } from "@khlug/util/formaDate";
import { getDateDiffText } from "@khlug/util/getDateDiffText";
import { fetchNoticeList } from "@khlug/util/fetchNoticeList";

type NoticeDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  const notices = await fetchNoticeList();
  return notices.map((notice) => ({
    id: notice.id,
  }));
}

export default async function NoticeDetailPage(props0: NoticeDetailPageProps) {
  const params = await props0.params;
  const { id: noticeId } = params;
  const notice = await fetchNotice(noticeId);

  return (
    <div className="document">
      <div className="bg-white px-4 py-6">
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
              <p className="leading-7 text-base" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="list-disc list-inside pl-4 text-sm" {...props} />
            ),
            li: ({ node, ...props }) => <li className="m-1" {...props} />,
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
          <Link href="/notice">목록</Link>
        </button>
      </div>
    </div>
  );
}
