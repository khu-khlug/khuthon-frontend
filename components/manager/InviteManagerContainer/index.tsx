import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import Container from "@khlug/components/Container/Container";
import Subtitle from "@khlug/components/Title/Subtitle";
import { ListManagerInvitationResponseDto } from "@khlug/transport/ListManagerInvitationResponseDto";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { useState, useCallback, useEffect } from "react";
import ManagerInvitationItem from "../ManagerInvitationItem";
import InviteManagerForm from "../InviteManagerForm";
import { InviteManagerRequestDto } from "@khlug/transport/InviteManagerRequestDto";

export default function InviteManagerContainer() {
  const client = useClient();

  const [invitationList, setInvitationList] =
    useState<ListManagerInvitationResponseDto | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const fetchInvitationList = useCallback(async () => {
    try {
      const response = await client.get<ListManagerInvitationResponseDto>(
        "/manager/invitations"
      );
      setInvitationList(response.data);
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  }, [client]);

  const handleCancel = useCallback(
    async (invitationId: string) => {
      setMessage(null);
      try {
        await client.delete(`/manager/invitations/${invitationId}`);
        fetchInvitationList();
      } catch (e) {
        setMessage(extractErrorMessage(e));
      }
    },
    [client, fetchInvitationList]
  );

  const handleInvite = useCallback(
    async (email: string) => {
      setMessage(null);
      try {
        const dto: InviteManagerRequestDto = { email };
        await client.post("/manager/invitations", dto);
        fetchInvitationList();
      } catch (e) {
        setMessage(extractErrorMessage(e));
      }
    },
    [client, fetchInvitationList]
  );

  useEffect(() => {
    fetchInvitationList();
  }, [fetchInvitationList]);

  return (
    <Container>
      <Subtitle>진행 중인 초대</Subtitle>
      {message && <div className="error">{message}</div>}
      {invitationList &&
        (invitationList.invitations.length === 0 ? (
          <div className="error">진행중인 초대가 없습니다.</div>
        ) : (
          invitationList.invitations.map((invitation) => (
            <ManagerInvitationItem
              key={invitation.id}
              invitation={invitation}
              onCancel={() => handleCancel(invitation.id)}
            />
          ))
        ))}
      <Subtitle>운영진 초대하기</Subtitle>
      <InviteManagerForm onInvite={handleInvite} />
    </Container>
  );
}
