import { UploadFileResponseDto } from "@khlug/transport/UploadFileResponseDto";
import { ChangeEvent, MouseEvent, useRef, useState } from "react";

import "./FileUploader.css";
import { useClient } from "../ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import Button from "../Button";

type Props = {
  initial?: {
    fileName: string;
    fileUrl: string;
  };
  disabled?: boolean;
  onUpload: (file: UploadFileResponseDto) => void;
  onError: (message: string) => void;
};

export default function FileUploader({
  initial,
  disabled,
  onUpload,
  onError,
}: Props) {
  const client = useClient();

  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (disabled) return;

    hiddenFileInput.current!.click();
  };

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    const selectedFile = e.target.files?.[0];
    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    setLoading(true);
    try {
      const response = await client.post<UploadFileResponseDto>(
        `/files`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      onUpload(response.data);
      hiddenFileInput.current!.value = "";
    } catch (e) {
      onError(extractErrorMessage(e));
    }
    setLoading(false);
  };

  return (
    <form>
      {initial && (
        <a
          href={initial.fileUrl}
          className="no-underline text-gray-400 hover:text-gray-500"
        >
          <i className="xi-download"></i> {initial.fileName}
        </a>
      )}
      <div className="mt-2 text-right">
        <Button onClick={handleClick} disabled={disabled} loading={loading}>
          새 파일 업로드
        </Button>
      </div>
      <input
        id="file-uploader"
        type="file"
        accept=".pdf"
        ref={hiddenFileInput}
        onChange={handleChange}
        className="hidden"
      />
    </form>
  );
}
