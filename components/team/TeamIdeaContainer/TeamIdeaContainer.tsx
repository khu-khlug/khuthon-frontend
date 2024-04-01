import { useState } from "react";
import Container from "../../Container/Container";
import { useEvent } from "../../EventProvider/EventProvider";
import { useMyTeam } from "../MyTeamProvider/MyTeamProvider";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";

export default function TeamIdeaContainer() {
  const event = useEvent();
  const client = useClient();
  const [myTeam] = useMyTeam();

  const [message, setMessage] = useState<string | null>(null);
  const [idea, setIdea] = useState<string>(myTeam.idea);

  const canEditIdea =
    event.eventRange === "BETWEEN" && event.judgeRange === "BEFORE";

  const validate = () => {
    if (idea.length < 1 || idea.length > 100) {
      setMessage("아이디어는 1자 이상, 500자 이하여야 합니다.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      await client.put(`/teams/${myTeam.id}/ideas`, { idea });
      setMessage("아이디어가 지정되었습니다.");
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  };

  return (
    <Container>
      <h4>아이디어</h4>
      {message && <div className="error">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="input_wrap">
          <input
            type="text"
            name="idea"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="아이디어를 입력해주세요."
            readOnly={!canEditIdea}
          />
        </div>
        {canEditIdea && (
          <div className="btnArea">
            <button type="submit" className="blue">
              <span>아이디어 지정</span>
            </button>
          </div>
        )}
      </form>
    </Container>
  );
}
