import { UploadFileResponseDto } from "@khlug/transport/UploadFileResponseDto";
import { ChangeEvent, MouseEvent, useRef } from "react";

import "./FileUploader.css";
import { useClient } from "../ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";

type Props = {
  initial?: {
    fileName: string;
    fileUrl: string;
  };
  onUpload: (file: UploadFileResponseDto) => void;
  onError: (message: string) => void;
};

export default function FileUploader({ initial, onUpload, onError }: Props) {
  const client = useClient();

  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
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
      <div className="btnArea">
        <button className="blue" onClick={handleClick}>
          <span>새 파일 업로드</span>
        </button>
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
