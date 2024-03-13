import Container from "@khlug/components/Container/Container";
import LoginForm from "@khlug/components/LoginForm/LoginForm";

type RangeType = "BEFORE" | "BETWEEN" | "AFTER";
type MockEvent = {
  registerRange: RangeType;
  eventRange: RangeType;
  isLimitExceed: boolean;
};

export default function TeamPage() {
  const mockIsLogin = true;
  const mockTeam = {
    id: "teamId",
    name: "teamName",
    note: "teamNote",
  };
  const mockMembers = [
    {
      id: "memberId1",
      name: "memberName",
      college: "memberCollege",
      grade: 2,
      studentNumber: "2021105589",
      phone: "010-0000-0000",
      email: "some.email@email.com",
    },
    {
      id: "memberId2",
      name: "memberName",
      college: "memberCollege",
      grade: 2,
      studentNumber: "2021105589",
      phone: "010-0000-0000",
      email: "some.email@email.com",
    },
  ];
  const mockInvitations = [
    {
      id: "invitationId",
      studentNumber: "2021105589",
    },
  ];
  const mockEvent: MockEvent = {
    registerRange: "BETWEEN",
    eventRange: "BEFORE",
    isLimitExceed: false,
  };

  return (
    <>
      {mockIsLogin ? (
        <>
          <Container>
            <h4>팀 이름</h4>
            <table className="timetable">
              <tbody>
                <tr>
                  <th>{mockTeam.name}</th>
                </tr>
              </tbody>
            </table>

            <h4>팀 참가자 정보</h4>
            {mockMembers.map((member) => (
              <table className="timetable" key={member.id}>
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
            ))}
            <h4>진행 중인 초대 정보</h4>
            {mockInvitations.map((invitation) => (
              <table className="timetable" key={invitation.id}>
                <tbody>
                  <tr>
                    <th>학번</th>
                    <td>{invitation.studentNumber}</td>
                  </tr>
                </tbody>
              </table>
            ))}

            {mockEvent.registerRange === "BETWEEN" && (
              <>
                <h4>팀 정보</h4>
                <form method="post" action="{{url('/team/edit')}}">
                  <div className="description">
                    팀 이름, 참가자는 접수 마감 전까지 수정할 수 있습니다.
                  </div>
                  <label>팀 이름</label>
                  <div className="input_wrap">
                    <input
                      type="text"
                      name="name"
                      value={mockTeam.name}
                      required
                    />
                  </div>
                  <label>메모</label>
                  <div className="input_wrap">
                    <input type="text" name="notetext" value={mockTeam.note} />
                  </div>
                  <div className="btnArea">
                    <button type="submit">
                      <span>수정</span>
                    </button>
                  </div>
                </form>

                <h4>팀원 초대</h4>
                <form>
                  <label>참가자의 학번</label>
                  <div className="description">
                    팀에 재학생이 반드시 1명 이상 포함되어야 하며 팀원은 1명부터
                    4명까지 가능합니다.
                    <br />각 팀원은 참가 확인을 해야합니다. 접수가 마감될 때까지
                    팀원 중 한 명이라도 신원 확인이 되지 않으면 참가 등록이
                    취소됩니다.
                  </div>

                  <div className="input_wrap">
                    <input type="number" name="number[]" value="" />
                  </div>

                  <div
                    className="btnArea"
                    style={{ marginTop: "10px !important" }}
                  >
                    <button type="button" className="white">
                      <span>참가 신청 철회</span>
                    </button>
                    <button type="submit">
                      <span>초대</span>
                    </button>
                  </div>
                </form>
              </>
            )}
          </Container>
        </>
      ) : (
        <Container>
          <LoginForm />
        </Container>
      )}
    </>
  );
}
