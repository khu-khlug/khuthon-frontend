import {
  useClient,
  useToken,
} from "@khlug/components/ClientProvider/ClientProvider";
import Container from "@khlug/components/Container/Container";
import { useState } from "react";
import { useMyTeam } from "../MyTeamProvider/MyTeamProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";

export default function DeleteTeamContainer() {
  const [message, setMessage] = useState<string | null>(null);

  const client = useClient();
  const myTeam = useMyTeam();
  const [, setToken] = useToken();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const lastCheck = confirm("정말로 참가 신청을 철회하시겠습니까?");
    if (!lastCheck) return;

    try {
      const teamId = myTeam.id;
      await client.delete(`/teams/${teamId}`);
      setToken(null);
      window.location.href = "/";
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  };

  return (
    <Container>
      <h4>참가 신청 철회</h4>
      {message && <div className="error">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="description">
          참가 신청을 철회하면 즉시 팀이 해체되며, 복구할 수 없습니다.
          <br />
          이후 참가 시 모든 팀원이 다시 팀을 생성하거나 다른 팀에 소속되어야
          합니다.
        </div>
        <div className="btnArea">
          <button className="white">
            <span>참가 신청 철회</span>
          </button>
        </div>
      </form>
    </Container>
  );
}
