import Container from "../Container/Container";

type Props = {
  invitations: {
    id: string;
    studentNumber: string;
  }[];
  event: {
    registerRange: string;
    eventRange: string;
  };
};

export default function InvitationContainer({ invitations, event }: Props) {
  return (
    <Container>
      <h4>진행 중인 초대 정보</h4>
      {invitations.map((invitation) => (
        <form key={invitation.id}>
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
      ))}

      {event.registerRange === "BETWEEN" && (
        <>
          <h4>팀원 초대</h4>
          <form>
            <label>참가자의 학번</label>
            <div className="description">
              팀에 재학생이 반드시 1명 이상 포함되어야 하며 팀원은 1명부터
              4명까지 가능합니다.
              <br />각 팀원은 참가 확인을 해야합니다. 접수가 마감될 때까지 팀원
              중 한 명이라도 신원 확인이 되지 않으면 참가 등록이 취소됩니다.
            </div>

            <div className="input_wrap">
              <input type="number" name="number[]" />
            </div>

            <div className="btnArea" style={{ marginTop: "10px !important" }}>
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
  );
}
