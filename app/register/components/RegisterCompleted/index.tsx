import TextLink from "@khlug/components/TextLink";

export default function RegisterCompleted() {
  return (
    <div>
      <h1 className="text-4xl">접수 완료!</h1>
      <p className="text-lg">🎉 대회 참가를 위한 모든 절차를 완료했어요. 🎉</p>
      <p className="text-lg Text__Main-Color">
        <strong>대회 당일에 뵙겠습니다!</strong>
      </p>
      <p className="text-lg">마지막으로 아래 사항을 꼭 읽고 숙지해주세요.</p>
      <ul className="list-disc text-lg">
        <li>팀 이름은 접수 마감 전까지 수정할 수 있어요.</li>
        <li>
          대회 당일 전까지 <strong>팀원 모두</strong>{" "}
          <TextLink href="/team">팀 페이지</TextLink>에서 자신의 학과와 재학
          학기 수를 입력해주세요.
        </li>
      </ul>
      <p className="text-lg">
        대회와 관련하여 궁금한 점이 있으시다면 언제나 우측 하단의 채팅 버튼을
        눌러 문의해주세요. 운영진이 빠르게 답변해드릴게요!
      </p>
    </div>
  );
}
