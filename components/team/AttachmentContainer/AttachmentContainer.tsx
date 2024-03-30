import { formatDate } from "@khlug/util/formaDate";
import Container from "../../Container/Container";
import { useEvent } from "../../EventProvider/EventProvider";
import FileUploader from "@khlug/components/FileUploader/FileUploader";
import { useCallback, useEffect, useState } from "react";
import { UploadFileResponseDto } from "@khlug/transport/UploadFileResponseDto";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { useMyTeam } from "../MyTeamProvider/MyTeamProvider";
import { GetAttachmentResponseDto } from "@khlug/transport/GetAttachmentResponseDto";

export default function AttachmentContainer() {
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
    <Container>
      <h4>발표 자료</h4>
      {message && <div className="error">{message}</div>}
      <ul>
        <li>
          발표 자료는 해커톤 시작({formatDate(event.eventStartAt)})부터 발표
          시작(
          {formatDate(event.judgeStartAt)}) 직전까지 업로드할 수 있습니다.
        </li>
        <li>
          프로젝트 산출물을 제출할 필요는 없으며, 발표 자료만 <u>PDF 파일</u>로
          저장하여 1개만 제출해주세요.
        </li>
        <li>
          발표 자료는 이후 khuthon의 결과 보고에 활용되어 주최·주관·후원 단체에
          일부 가공된 형태로 제공될 수 있습니다.
        </li>
      </ul>
      {canUploadAttachment && !loading ? (
        <FileUploader
          initial={attachment ?? undefined}
          onUpload={handleUpload}
          onError={setMessage}
        />
      ) : (
        <div className="error">제출 기간이 아닙니다.</div>
      )}
    </Container>
  );
}
