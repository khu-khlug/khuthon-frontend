import Container from "@khlug/components/Container/Container";

export default function JudgingCriteriaContainer() {
  return (
    <Container>
      <h4>심사 기준</h4>
      <ul className="!m-0">
        <li>
          <strong>아이디어의 독창성</strong>: 참신하게 문제를 해결했는가
        </li>
        <li>
          <strong>아이디어의 효용성</strong>: 현실에 적용 가능성이 있는가
        </li>
        <li>
          <strong>방법의 적절성</strong>: 직접 정의한 문제를 최적의 방법으로
          해결했는가
        </li>
        <li>
          <strong>산출물의 디자인</strong>: 사용하기 편하고 아름다운가
        </li>
        <li>
          <strong>산출물의 완성도</strong>: 마무리가 되었는가
          <ul className="!m-0">
            <li>
              산출물을 <strong>시연하지 않은 경우</strong>에는 완성도 점수를
              0점으로 부여합니다.
            </li>
            <li>
              데이터 분석에서는 분석 결과를 제시해야 하는 등, 설계가 아닌{" "}
              <strong>구체적인 결과</strong>가 보여져야 합니다.
            </li>
            <li>
              미완성 시연은 완성도 점수가 낮아질 수는 있더라도 시연한 것으로
              판단합니다.
            </li>
          </ul>
        </li>
        <li>
          <strong>주제와의 적합성</strong>: (주제에 부합하는 산출물이 아닌 경우
          모두 0점 부여)
        </li>
      </ul>
    </Container>
  );
}
