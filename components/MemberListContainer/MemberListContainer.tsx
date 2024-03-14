import Container from "../Container/Container";

type Props = {
  members: {
    id: string;
    name: string;
    college: string;
    grade: number;
    studentNumber: string;
    phone: string;
    email: string;
  }[];
  event: {
    eventRange: "BEFORE" | "BETWEEN" | "AFTER";
  };
};

export default function MemberListContainer({ members, event }: Props) {
  return (
    <Container>
      <h4>팀 참가자 정보</h4>
      {members.map((member) => (
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
