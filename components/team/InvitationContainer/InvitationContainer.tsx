import { useState } from "react";
import Container from "../../Container/Container";
import { useEvent } from "../../EventProvider/EventProvider";
import { useMyTeam } from "../MyTeamProvider/MyTeamProvider";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import InvitationItem from "../InvitationItem/InvitationItem";
import Button from "@khlug/components/Button";

export default function InvitationContainer() {
  const [invitationNumber, setInvitationNumber] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);

  const event = useEvent();
  const client = useClient();
  const [myTeam, reload] = useMyTeam();

  const validate = () => {
    if (invitationNumber.length < 8 || invitationNumber.length > 10) {
      setMessage("학번을 정확하게 입력해주세요.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const teamId = myTeam.id;
      await client.post(`/teams/${teamId}/invitations`, {
        studentNumber: invitationNumber,
      });
      setMessage("초대가 완료되었습니다.");
      setInvitationNumber("");
      reload();
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  };

  return (
    <Container>
      {message && <div className="error">{message}</div>}
      <h4>진행 중인 초대 정보</h4>
      {myTeam.invitations.map((invitation) => (
        <InvitationItem
          key={invitation.id}
          invitation={invitation}
          onMessage={setMessage}
        />
      ))}

      {event.registerRange === "BETWEEN" && (
        <>
          <h4>팀원 초대</h4>
          <form onSubmit={handleSubmit}>
            <label>참가자의 학번</label>
            <div className="description">
              팀원은 모두 재학생이어야 하며, 팀원은 1명부터 4명까지 같은 학교
              학생만 가능합니다.
              <br />각 팀원은 참가 확인을 해야합니다. 접수가 마감될 때까지 팀원
              중 한 명이라도 신원 확인이 되지 않으면 참가 등록이 취소됩니다.
            </div>

            <div className="input_wrap">
              <input
                type="text"
                value={invitationNumber}
                onChange={(e) => setInvitationNumber(e.target.value)}
                placeholder="학번"
                pattern="[0-9]+"
                required
              />
            </div>

            <div className="text-right mt-3">
              <Button formSubmit disabled={event.eventRange !== "BEFORE"}>
                초대
              </Button>
            </div>
          </form>
        </>
      )}
    </Container>
  );
}
