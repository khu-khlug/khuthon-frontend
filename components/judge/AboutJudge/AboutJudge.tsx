import Container from "@khlug/components/Container/Container";

export default function AboutJudge() {
  return (
    <Container>
      <h4>심사 시 참고하실 점</h4>
      <ul className="!m-0">
        <li>
          각 팀 별로 5개의 점수를 모두 입력해야 해당 팀의 점수가 반영됩니다.
        </li>
        <li>최종 순위는 심사/투표 기간이 끝난 후 공개됩니다.</li>
        <li>각 팀의 정보를 확인하거나 심사를 진행하려면 팀을 클릭하세요.</li>
        <li>선택한 팀의 심사 정보는 30초마다 자동 저장됩니다.</li>
        <li>
          다른 팀을 선택하면 이전에 선택되어있던 팀의 심사 정보가 자동
          저장됩니다.
        </li>
      </ul>
    </Container>
  );
}
