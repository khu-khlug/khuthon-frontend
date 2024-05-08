import { useCallback, useEffect, useState } from "react";

import { useEvent } from "@khlug/components/EventProvider/EventProvider";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { useMyTeam } from "@khlug/components/team/MyTeamProvider/MyTeamProvider";
import Subtitle from "@khlug/components/Title/Subtitle";
import FileUploader from "@khlug/components/FileUploader/FileUploader";

import { formatDate } from "@khlug/util/formaDate";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";

import { UploadFileResponseDto } from "@khlug/transport/UploadFileResponseDto";
import { GetAttachmentResponseDto } from "@khlug/transport/GetAttachmentResponseDto";

export default function AttachmentUploadForm() {
  const event = useEvent();
  const client = useClient();
  const [myTeam] = useMyTeam();

  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [attachment, setAttachment] = useState<GetAttachmentResponseDto | null>(
    null
  );

  const canUploadAttachment =
    event.eventRange === "BETWEEN" && event.judgeRange === "BEFORE";

  const fetchAttachment = useCallback(async () => {
    setLoading(true);
    try {
      const teamId = myTeam.id;
      const response = await client.get<GetAttachmentResponseDto>(
        `/teams/${teamId}/attachments`
      );
      setAttachment(response.data);
    } catch (e) {}
    setLoading(false);
  }, [client, myTeam.id]);

  const handleUpload = async (file: UploadFileResponseDto) => {
    try {
      const teamId = myTeam.id;
      const fileId = file.id;
      await client.post(`/teams/${teamId}/attachments`, { fileId });
      fetchAttachment();
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  };

  useEffect(() => {
    fetchAttachment();
  }, [fetchAttachment]);

  return (
    <div>
      <Subtitle>발표 자료</Subtitle>
      {message && <div className="error">{message}</div>}
      <ul className="!m-0">
        <li>
          발표 자료는 해커톤 시작({formatDate(event.eventStartAt)})부터 발표
          시작(
          {formatDate(event.judgeStartAt)}) 직전까지 업로드할 수 있습니다.
        </li>
        <li>
          발표 자료는 <strong>표지 제외 6장 이하</strong>가 되도록 만들어주세요.
        </li>
        <li>
          프로젝트 산출물을 제출할 필요는 없으며, 발표 자료만{" "}
          <strong>PDF 파일</strong>로 저장하여 1개만 제출해주세요.
        </li>
        <li>
          발표 자료는 이후 khuthon의 결과 보고에 활용되어 주최·주관·후원 단체에
          일부 가공된 형태로 제공될 수 있습니다.
        </li>
      </ul>
      {canUploadAttachment && !loading ? (
        <div className="mt-4">
          <FileUploader
            initial={attachment ?? undefined}
            onUpload={handleUpload}
            onError={setMessage}
          />
        </div>
      ) : (
        <div className="error">제출 기간이 아닙니다.</div>
      )}
    </div>
  );
}
