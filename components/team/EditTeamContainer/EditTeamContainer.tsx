import { useState } from "react";
import Container from "../../Container/Container";
import { useEvent } from "../../EventProvider/EventProvider";
import { useMyTeam } from "../MyTeamProvider/MyTeamProvider";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";

export default function EditTeamContainer() {
  const event = useEvent();
  const myTeam = useMyTeam();
  const client = useClient();

  const [name, setName] = useState<string>(myTeam.name);
  const [note, setNote] = useState<string>(myTeam.note);
  const [message, setMessage] = useState<string | null>(null);

  const validate = () => {
    if (name.length < 1 || name.length > 100) {
      setMessage("팀 이름은 1자 이상, 100자 이하여야 합니다.");
      return false;
    }

    if (note.length > 1000) {
      setMessage("메모는 1000자 이하여야 합니다.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const teamId = myTeam.id;
      await client.patch(`/teams/${teamId}`, { name, note });
      setMessage("팀 정보가 수정되었습니다.");
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  };

  return (
    <Container>
      <h4>팀 정보 수정</h4>
      {message && <div className="error">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="description">
          팀 이름, 참가자는 접수 마감 전까지 수정할 수 있습니다.
        </div>
        <label>팀 이름</label>
        <div className="input_wrap">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            readOnly={event.eventRange !== "BEFORE"}
          />
        </div>
        <label>메모</label>
        <div className="input_wrap">
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
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
