"use client";

import Button from "@khlug/components/Button";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import Container from "@khlug/components/Container/Container";
import TextButton from "@khlug/components/TextButton";
import Subtitle from "@khlug/components/Title/Subtitle";
import { ManagerUploadFileResponseDto } from "@khlug/transport/ManagerUploadFileResponseDto";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { ChangeEvent, MouseEvent, useRef, useState } from "react";

export default function UploadFileContainer() {
  const client = useClient();

  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleClick = () => {
    hiddenFileInput.current!.click();
  };

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await client.post<ManagerUploadFileResponseDto>(
        `/manager/files`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setFileUrl(response.data.fileUrl);
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(fileUrl!);
  };

  return (
    <Container>
      <Subtitle>파일 업로드</Subtitle>
      <p>임의의 파일을 CDN에 등록합니다.</p>
      {message && <p className="error">{message}</p>}
      <form>
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          className="hidden"
        />
      </form>
      <Button onClick={handleClick}>새 파일 업로드</Button>
      {fileUrl && (
        <div className="bg-white mt-4 p-4 rounded-md text-gray-700">
          {fileUrl}
          <TextButton className="ml-4" onClick={handleCopy}>
            복사하기
          </TextButton>
        </div>
      )}
    </Container>
  );
}
