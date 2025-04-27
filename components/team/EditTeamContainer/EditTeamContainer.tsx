import { useState } from "react";
import Container from "../../Container/Container";
import { useEvent } from "../../EventProvider/EventProvider";
import { useMyTeam } from "../MyTeamProvider/MyTeamProvider";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { toast } from "react-toastify";
import Button from "@khlug/components/Button";

export default function EditTeamContainer() {
  const event = useEvent();
  const [myTeam] = useMyTeam();
  const client = useClient();

  const [name, setName] = useState<string>(myTeam.name);

  const validate = () => {
    if (name.length < 1 || name.length > 100) {
      toast.error("팀 이름은 1자 이상, 100자 이하여야 합니다.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const teamId = myTeam.id;
      await client.put(`/teams/${teamId}/name`, { name });
      toast.success("팀 이름이 수정되었습니다.");
    } catch (e) {
      toast.error(extractErrorMessage(e));
    }
  };

  return (
    <Container>
      <h4>팀 이름 수정</h4>
      <form onSubmit={handleSubmit}>
        <div className="description">
          팀 이름은 접수 마감 전까지 수정할 수 있습니다.
        </div>
        <div className="input_wrap">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            readOnly={event.eventRange !== "BEFORE"}
          />
        </div>
        <div className="text-right mt-3">
          <Button formSubmit disabled={event.eventRange !== "BEFORE"}>
            수정
          </Button>
        </div>
      </form>
    </Container>
  );
}
