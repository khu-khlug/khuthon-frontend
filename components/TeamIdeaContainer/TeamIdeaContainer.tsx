import Container from "../Container/Container";

type Props = {
  event: {
    eventRange: "BEFORE" | "BETWEEN" | "AFTER";
    judgeRange: "BEFORE" | "BETWEEN" | "AFTER";
  };
};

export default function TeamIdeaContainer({ event }: Props) {
  const canEditIdea =
    event.eventRange === "BETWEEN" && event.judgeRange === "BEFORE";

  return (
    <Container>
      <h4>주제</h4>
      <form method="post" action="/page/idea">
        <div className="input_wrap">
          <input
            type="text"
            name="idea"
            value="주제를 입력해주세요."
            readOnly={!canEditIdea}
          />
        </div>
        {canEditIdea && (
          <div className="btnArea">
            <button type="submit" className="blue">
              <span>주제 지정</span>
            </button>
          </div>
        )}
      </form>
    </Container>
  );
}
