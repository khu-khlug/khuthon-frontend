"use client";

import { MutableRefObject, RefObject, useEffect, useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import { useClient } from "../ClientProvider/ClientProvider";
import { ManagerUploadFileResponseDto } from "@khlug/transport/ManagerUploadFileResponseDto";

import "@toast-ui/editor/dist/toastui-editor.css";

type Props = {
  contentRef: MutableRefObject<string>;
};

export default function MarkdownEditor({ contentRef }: Props) {
  const ref = useRef<Editor>(null);
  const client = useClient();

  useEffect(() => {
    if (!ref?.current) {
      return;
    }

    const instance = ref.current.getInstance();

    instance.addHook("addImageBlobHook", async (blob: any, callback: any) => {
      try {
        const formData = new FormData();
        formData.append("file", blob);

        const response = await client.post<ManagerUploadFileResponseDto>(
          `/manager/files`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        callback(response.data.fileUrl, "");
      } catch (error) {}
    });

    instance.on("change", () => {
      contentRef.current = instance.getMarkdown();
    });
  }, [ref, client, contentRef]);

  return <Editor ref={ref} />;
}
