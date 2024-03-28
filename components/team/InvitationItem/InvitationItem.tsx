import { useEvent } from "@khlug/components/EventProvider/EventProvider";
import { useMyTeam } from "../MyTeamProvider/MyTeamProvider";
import { useState } from "react";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";

type Props = {
  invitation: {
    id: string;
    studentNumber: string;
  };
  onMessage: (message: string) => void;
};

export default function InvitationItem({ invitation, onMessage }: Props) {
  const [message, setMessage] = useState<string | null>(null);

  const event = useEvent();
  const client = useClient();
  const [myTeam, reload] = useMyTeam();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const check = confirm("정말로 초대를 취소하시겠습니까?");
    if (!check) return;

    try {
      const teamId = myTeam.id;
      const invitationId = invitation.id;
      await client.delete(`/teams/${teamId}/invitations/${invitationId}`);

      reload();
    } catch (e) {
      onMessage(extractErrorMessage(e));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <table className="timetable">
        <tbody>
          <tr>
            <th>학번</th>
            <td>{invitation.studentNumber}</td>
          </tr>
        </tbody>
      </table>
      <div className="btnArea">
        <button type="submit" disabled={event.eventRange !== "BEFORE"}>
          <span>초대 취소하기</span>
        </button>
      </div>
    </form>
  );
}
