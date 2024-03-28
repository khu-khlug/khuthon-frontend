import { useEvent } from "@khlug/components/EventProvider/EventProvider";
import { GetMyTeamResponseMember } from "@khlug/transport/GetMyTeamResponseDto";
import { useMyTeam } from "../MyTeamProvider/MyTeamProvider";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";

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

    const check = confirm("정말로 초대를 취소하시겠습니까?");
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
    <form onSubmit={handleSubmit}>
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
      <div className="btnArea">
        <button
          type="submit"
          style={{ marginTop: "10px !important" }}
          disabled={event.eventRange !== "BEFORE"}
        >
          <span>내보내기</span>
        </button>
      </div>
    </form>
  );
}
