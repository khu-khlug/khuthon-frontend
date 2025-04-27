import Container from "@khlug/components/Container/Container";
import { useEvent } from "@khlug/components/EventProvider/EventProvider";
import { formatDate } from "@khlug/util/formaDate";
import VoteForm from "../VoteForm/VoteForm";

export default function VoteContainer() {
  const event = useEvent();

  return (
    <Container>
      <h4>투표</h4>
      <ul className="!m-0">
        <li>팀 이름을 눌러 팀을 선택합니다.</li>
        <li>
          각 팀은 자기 자신을 제외한 두 팀에게 투표할 수 있으며, 한 팀에 두 표를
          모두 줄 수는 없습니다.
        </li>
        <li>
          한 번에 두 표를 모두 행사해야하며, 먼저 투표한 팀원의 표만 인정됩니다.
        </li>
        <li>
          팀을 선택한 후 하단의{" "}
          <span className="bg-gray-700 text-white px-2 py-1">투표하기</span>{" "}
          버튼을 눌러주세요.
        </li>
        <li>이미 한 투표는 되돌릴 수 없습니다.</li>
        <li>아래 팀 목록의 순서는 발표 순서와 동일합니다.</li>
        <li>
          최종 순위는 투표 기간이 끝난 후({formatDate(event.judgeEndAt)})
          공개됩니다.
        </li>
      </ul>

      {event.judgeRange === "BETWEEN" ? (
        <VoteForm />
      ) : (
        <div className="error">투표 기간이 아닙니다.</div>
      )}
    </Container>
  );
}
