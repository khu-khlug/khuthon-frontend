import Container from "../../Container/Container";

export default function JudgingCriteriaContainer() {
  return (
    <Container>
      <h4>심사 기준</h4>
      <ul className="!m-0">
        <li>
          <strong>아이디어의 독창성</strong>: 얼마나 참신하게 문제를 해결했는가
        </li>
        <li>
          <strong>아이디어의 실용도</strong>: 얼마나 쓸모가 있는가
        </li>
        <li>
          <strong>산출물의 기술력</strong>: 얼마나 최신/고급 기술을 사용했는가
        </li>
        <li>
          <strong>산출물의 디자인</strong>: 얼마나 아름다운가
        </li>
        <li>
          <strong>산출물의 완성도</strong>: 얼마나 결과물의 완전한가
        </li>
        <li>
          <strong>주제와의 적합성</strong>: (주제에 부합하는 산출물이 아닌 경우
          모두 0점 부여)
        </li>
      </ul>
    </Container>
  );
}
