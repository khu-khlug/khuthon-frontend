"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import Button from "@khlug/components/Button";
import FancyInput from "../FancyInput";

import { toast } from "react-toastify";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import TextLink from "@khlug/components/TextLink";

interface CreateTeamFormProps {
  onSuccess: () => void;
}

export default function CreateTeamForm({ onSuccess }: CreateTeamFormProps) {
  const client = useClient();

  const [teamName, setTeamName] = useState("");
  const [teamNameError, setTeamNameError] = useState<string | undefined>();

  const [loading, setLoading] = useState(false);

  const handleChangeTeamName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.target.value);
    setTeamNameError(undefined);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!teamName.trim()) {
      setTeamNameError("팀 이름을 입력해주세요");
      return;
    }

    setLoading(true);

    try {
      await client.post("/teams", { teamName });
      onSuccess();
    } catch (err) {
      toast.error(extractErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  const joinTeam = useCallback(async () => {
    try {
      await client.post("/teams/join");
      onSuccess();
    } catch (e) {}
  }, [client]);

  useEffect(() => {
    joinTeam();
  }, [joinTeam]);

  return (
    <div>
      <h1 className="text-4xl">학교 이메일 인증</h1>

      <p className="text-lg">팀에 참가하는 방법은 두 가지가 있어요.</p>
      <ol className="list-decimal text-lg">
        <li>
          팀 생성하기: 팀을 생성한 후,{" "}
          <TextLink href="/team">팀 페이지</TextLink>
          에서 팀원들의 <strong>학번</strong>을 입력하여 팀원들을 초대할 수
          있어요.
        </li>
        <li>
          초대 기다리기: 이 단계에서 팀을 생성하지 않고, 팀원이 초대해줄 때까지
          기다려요.
        </li>
      </ol>
      <p className="text-lg">
        1인 팀으로 참가하시는 것이라면, 팀 생성 후 바로 4번 단계로 넘어가면
        돼요.
      </p>

      <p className="text-lg text-red-500">
        팀을 생성하면 초대가 불가능해요. 팀을 생성하는 역할이 아니라면 이
        단계에서 더 이상 진행하지 않고 초대를 기다려주세요.
      </p>

      <form onSubmit={handleSubmit}>
        <FancyInput
          label="팀 이름"
          placeholder="팀 이름을 입력하세요"
          error={teamNameError}
          value={teamName}
          onChange={handleChangeTeamName}
        />

        <Button
          className="mt-8 h-12 w-full text-lg"
          loading={loading}
          formSubmit
        >
          팀 생성하기
        </Button>
      </form>
    </div>
  );
}
