import { useState } from "react";
import Container from "../../Container/Container";
import { useEvent } from "../../EventProvider/EventProvider";
import { useMyTeam } from "../MyTeamProvider/MyTeamProvider";

export default function TeamIdeaContainer() {
  const event = useEvent();
  const [myTeam] = useMyTeam();

  const [idea, setIdea] = useState<string>(myTeam.idea);

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
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="주제를 입력해주세요."
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
