import Container from "../Container/Container";

type Props = {
  team: {
    name: string;
    note: string;
  };
  event: {
    eventRange: "BEFORE" | "BETWEEN" | "AFTER";
  };
};

export default function EditTeamContainer({ team, event }: Props) {
  return (
    <Container>
      <h4>팀 정보 수정</h4>
      <form method="post" action="{{url('/team/edit')}}">
        <div className="description">
          팀 이름, 참가자는 접수 마감 전까지 수정할 수 있습니다.
        </div>
        <label>팀 이름</label>
        <div className="input_wrap">
          <input
            type="text"
            name="name"
            value={team.name}
            required
            readOnly={event.eventRange !== "BEFORE"}
          />
        </div>
        <label>메모</label>
        <div className="input_wrap">
          <input
            type="text"
            name="notetext"
            value={team.note}
            readOnly={event.eventRange !== "BEFORE"}
          />
        </div>
        <div className="btnArea" style={{ marginTop: "10px !important" }}>
          <button type="submit" disabled={event.eventRange !== "BEFORE"}>
            <span>수정</span>
          </button>
        </div>
      </form>
    </Container>
  );
}
