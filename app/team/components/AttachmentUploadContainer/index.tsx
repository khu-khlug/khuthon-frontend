import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { useMyTeam } from "@khlug/app/team/components/MyTeamProvider/MyTeamProvider";
import Subtitle from "@khlug/components/Title/Subtitle";
import FileUploader from "@khlug/components/FileUploader/FileUploader";
import Container from "@khlug/components/Container/Container";

import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { UploadFileResponseDto } from "@khlug/transport/UploadFileResponseDto";
import { GetAttachmentResponseDto } from "@khlug/transport/GetAttachmentResponseDto";
import { useMemberConfigs } from "../MemberConfigProvider";

export default function AttachmentUploadContainer() {
  const client = useClient();
  const configs = useMemberConfigs();
  const [myTeam] = useMyTeam();

  const [loading, setLoading] = useState<boolean>(false);
  const [attachment, setAttachment] = useState<GetAttachmentResponseDto | null>(
    null
  );

  const canEdit = configs?.attachmentEditEnabled ?? false;

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
      toast.success("발표 자료가 등록되었습니다.");
      fetchAttachment();
    } catch (e) {
      toast.error(extractErrorMessage(e));
    }
  };

  useEffect(() => {
    fetchAttachment();
  }, [fetchAttachment]);

  return (
    <Container>
      <Subtitle>발표 자료</Subtitle>
      <ul className="!m-0">
        <li>
          발표 자료는 <strong>표지 제외 10장 이하</strong>가 되도록
          만들어주세요.
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
      {!loading && (
        <div className="mt-4">
          <FileUploader
            initial={attachment ?? undefined}
            onUpload={handleUpload}
            onError={toast.error}
            disabled={!canEdit}
          />
        </div>
      )}
    </Container>
  );
}
