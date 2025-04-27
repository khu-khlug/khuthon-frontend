import { useEvent } from "@khlug/components/EventProvider/EventProvider";
import { GetMyTeamResponseMember } from "@khlug/transport/GetMyTeamResponseDto";
import { useMyTeam } from "../MyTeamProvider/MyTeamProvider";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { toast } from "react-toastify";
import Button from "@khlug/components/Button";

type Props = {
  member: GetMyTeamResponseMember;
  onMessage: (message: string) => void;
};

export default function MemberItem({ member, onMessage }: Props) {
  const event = useEvent();
  const client = useClient();
  const [myTeam, reload] = useMyTeam();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (myTeam.confirmed) {
      toast.error("인원이 확정되어 팀원을 수정할 수 없습니다.");
      return;
    }

    const check = confirm("정말로 팀원을 내보내시겠습니까?");
    if (!check) return;

    try {
      const teamId = myTeam.id;
      const memberId = member.id;
      await client.delete(`/teams/${teamId}/members/${memberId}`);

      reload();
    } catch (e) {
      onMessage(extractErrorMessage(e));
    }
  };

  return (
    <form className="mt-6" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <th>이름</th>
            <td>{member.name}</td>
          </tr>
          <tr>
            <th>학적</th>
            <td>
              {member.college} {member.grade}학년
            </td>
          </tr>
          <tr>
            <th>학번</th>
            <td>{member.studentNumber}</td>
          </tr>
          <tr>
            <th>연락처</th>
            <td>
              {member.phone}, {member.email}
            </td>
          </tr>
        </tbody>
      </table>
      {!myTeam.confirmed && (
        <div className="text-right mt-3">
          <Button formSubmit disabled={event.eventRange !== "BEFORE"}>
            내보내기
          </Button>
        </div>
      )}
    </form>
  );
}
