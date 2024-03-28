import Container from "../../Container/Container";
import { useEvent } from "../../EventProvider/EventProvider";
import { useMyTeam } from "../MyTeamProvider/MyTeamProvider";

export default function MemberListContainer() {
  const event = useEvent();
  const myTeam = useMyTeam();

  return (
    <Container>
      <h4>팀 참가자 정보</h4>
      {myTeam.members.map((member) => (
        <form key={member.id}>
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
      ))}
    </Container>
  );
}
