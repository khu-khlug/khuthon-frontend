"use client";

import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { useMyTeam } from "../../hooks/useMyTeam";
import Button from "@khlug/components/Button";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { useState } from "react";
import { toast } from "react-toastify";
import TextLink from "@khlug/components/TextLink";

type Props = {
  onSuccess: () => void;
};

export default function TeamConfirmNeeded({ onSuccess }: Props) {
  const { loading, error, team } = useMyTeam();
  const client = useClient();

  const [confirmLoading, setConfirmLoading] = useState(false);

  const confirmDisabled =
    loading || !!error || !team || team.invitations.length > 0;

  const handleConfirmClick = async (teamId: string) => {
    setConfirmLoading(true);

    try {
      await client.post(`/teams/${teamId}/confirm`);
      onSuccess();
    } catch (err) {
      toast.error(extractErrorMessage(err));
    } finally {
      setConfirmLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-4xl">인원 확정</h1>
      <p className="text-lg">
        팀에 소속되는 인원을 확정하여, 대회 접수를 마무리하는 단계에요. 아래
        사항을 참고하여 인원 확정까지 완료해주세요.
      </p>
      <ul className="list-disc text-lg">
        <li>
          팀장 구분이 없기 때문에, 인원 확정은 팀원 중 한 명이 진행하면 돼요.
        </li>
        <li>팀원 모두가 3번 단계까지 진행해야 인원 확정이 가능해요.</li>
        <li>한 번 인원 확정이 되면 팀원을 변경할 수 없어요.</li>
        <li>
          인원 확정 진행 시점에 이미 최대 인원 또는 최대 팀 수를 초과했다면
          대회에 참가할 수 없어요.
        </li>
        <li className="text-red-500">
          인원 확정을 진행하지 않으면 대회 참가가 불가능해요.
        </li>
      </ul>
      <h2 className="text-3xl mt-12">팀 정보</h2>
      <p className="text-lg">
        아래 팀 정보를 확인하고, 인원을 확정해주세요. 한 번 인원 확정이 진행되면
        되돌릴 수 없으며, 이후에는 팀원 변경이 불가능하니, 팀원 모두가
        참여했는지 다시 한 번 확인하고 확정해주세요.
      </p>
      <p className="text-lg">
        팀원은{" "}
        <TextLink className="font-bold" href="/team">
          팀 페이지
        </TextLink>
        에서 초대할 수 있어요.
      </p>
      {loading ? (
        <p>로딩 중...</p>
      ) : error ? (
        <p className="text-red-500">{extractErrorMessage(error)}</p>
      ) : team ? (
        <div>
          <p className="text-lg">팀 이름: {team.name}</p>
          <ul className="list-disc text-lg">
            {team.members.map((member) => (
              <li key={member.id}>
                {member.studentNumber} {member.name} ({member.email})
              </li>
            ))}
            {team.invitations.map((invitation) => (
              <li key={invitation.id}>
                {invitation.studentNumber} (초대 진행 중)
              </li>
            ))}
          </ul>
          <Button
            className="mt-8 h-12 w-full text-lg"
            loading={confirmLoading}
            disabled={confirmDisabled}
            onClick={() => handleConfirmClick(team.id)}
          >
            인원 확정하기
          </Button>
        </div>
      ) : (
        <p className="text-lg">팀 정보가 없습니다.</p>
      )}
    </div>
  );
}
