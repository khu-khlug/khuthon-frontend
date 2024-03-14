import Container from "../Container/Container";

type Props = {
  event: {
    eventStartAt: string;
    judgeStartAt: string;
    eventRange: "BEFORE" | "BETWEEN" | "AFTER";
    judgeRange: "BEFORE" | "BETWEEN" | "AFTER";
  };
};

export default function AttachmentContainer({ event }: Props) {
  const canUploadAttachment =
    event.eventRange === "BETWEEN" && event.judgeRange === "BEFORE";

  return (
    <Container>
      <h4>발표 자료</h4>
      <ul>
        <li>
          발표 자료는 해커톤 시작({event.eventStartAt})부터 발표 시작(
          {event.judgeStartAt}) 직전까지 업로드하거나 삭제할 수 있습니다.
        </li>
        <li>
          프로젝트 산출물을 제출할 필요는 없으며, 발표 자료만 <u>PDF 파일</u>로
          저장하여 1개만 제출해주세요.
        </li>
        <li>
          발표 자료는 이후 khuthon의 결과 보고에 활용되어 주최·주관·후원 단체에
          일부 가공된 형태로 제공될 수 있습니다.
        </li>
      </ul>
      {canUploadAttachment ? (
        <div>TODO: 파일 업로드</div>
      ) : (
        <div className="error">제출 기간이 아닙니다.</div>
      )}
    </Container>
  );
}
