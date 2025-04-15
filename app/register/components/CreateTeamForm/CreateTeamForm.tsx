"use client";

import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { useCallback, useEffect, useState } from "react";
import { useRegister } from "../MemberRegisterInfoProvider/MemberRegisterInfoProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import Button from "@khlug/components/Button";

export default function CreateTeamForm() {
  const client = useClient();
  const [, load] = useRegister();

  const [message, setMessage] = useState<string | null>(null);
  const [teamName, setTeamName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const joinTeam = useCallback(async () => {
    try {
      await client.post("/teams/join");
      load();
    } catch (e) {}
  }, [client, load]);

  const validate = () => {
    if (teamName.length < 1 || teamName.length > 100) {
      setMessage("팀 이름은 1자 이상, 100자 이하여야 합니다.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    if (loading) return;
    setLoading(true);

    try {
      await client.post("/teams", { teamName });
      load();
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
    setLoading(false);
  };

  useEffect(() => {
    joinTeam();
  }, [joinTeam]);

  return (
    <form onSubmit={handleSubmit}>
      {message && <div className="error">{message}</div>}

      <label>팀 생성</label>
      <div className="description">
        지금은 초대 받은 팀이 없습니다. 만약 다른 참가자가 만든 팀에 소속될
        예정이라면, <strong>팀을 생성하지 않고 초대를 기다려주세요</strong>.
        <br />
        <br />
        만약 다른 팀에 소속되지 않고 자신의 팀을 만들고 싶다면, 생성할 팀의
        이름을 입력해주세요.
        <br />팀 이름은 이후에도 변경할 수 있습니다.
      </div>

      <label>팀 이름</label>
      <div className="description">
        팀 이름은 1자 이상, 100자 이하여야 합니다.
      </div>
      <div className="input_wrap">
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          placeholder="팀 이름"
          required
        />
      </div>
      <Button className="w-full py-2.5 my-4" formSubmit loading={loading}>
        팀 만들기
      </Button>
    </form>
  );
}
