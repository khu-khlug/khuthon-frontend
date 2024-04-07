"use client";

import dynamic from "next/dynamic";
import Container from "@khlug/components/Container/Container";
import { forwardRef, useRef, useState } from "react";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";

const MarkdownEditor = dynamic(
  () => import("@khlug/components/MarkdownEditor/MarkdownEditor"),
  {
    ssr: false,
    loading: () => <div>로딩 중...</div>,
  }
);

export default function NoticeWriterContainer() {
  const client = useClient();

  const [message, setMessage] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");
  const contentRef = useRef<string>("");

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 100) return;
    setTitle(e.target.value);
  };

  const handleRegister = async () => {
    const content = contentRef.current;

    try {
      await client.post("/manager/notices", { title, content });
      location.reload();
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  };

  return (
    <Container className="!bg-white !bg-none">
      {message && <div className="error">{message}</div>}
      <input
        className="w-full box-border"
        value={title}
        onChange={handleChangeTitle}
      />
      <div className="mt-2">
        <MarkdownEditor contentRef={contentRef} />
      </div>
      <div className="flex justify-end mt-4">
        <button
          className="border-none bg-gray-700 hover:bg-gray-500 transition-colors text-white text-base px-3 py-1.5 cursor-pointer"
          onClick={handleRegister}
        >
          등록
        </button>
      </div>
    </Container>
  );
}
