import { useState } from "react";

import Button from "@khlug/components/Button";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";

export const MANAGER_PRIZE_OPTIONS = [
  "대상",
  "최우수상",
  "우수상",
  "인기상",
  "격려상",
] as const;

type Props = {
  teamId: string;
  prize: string | null;
  onUpdated: () => void;
};

export default function TeamPrizeEditor({ teamId, prize, onUpdated }: Props) {
  const client = useClient();

  const [message, setMessage] = useState<string | null>(null);
  const [selectedPrize, setSelectedPrize] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const updateTeamPrize = async (nextPrize: string | null) => {
    try {
      setMessage(null);
      setIsSaving(true);
      await client.put(`/manager/teams/${teamId}/prizes`, {
        prize: nextPrize || null,
      });
      setIsEditing(false);
      onUpdated();
    } catch (e) {
      setMessage(extractErrorMessage(e));
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex flex-col items-end gap-1">
      {message && <div className="error">{message}</div>}
      {isEditing ? (
        <div className="flex justify-end gap-1">
          <select
            value={selectedPrize}
            onChange={(e) => setSelectedPrize(e.target.value)}
            className="border border-gray-300 rounded p-1"
          >
            <option value="">수상 선택</option>
            {MANAGER_PRIZE_OPTIONS.map((prizeOption) => (
              <option key={prizeOption} value={prizeOption}>
                {prizeOption}
              </option>
            ))}
          </select>
          <Button
            className="bg-green-700 hover:bg-green-500"
            loading={isSaving}
            disabled={!selectedPrize}
            onClick={() => updateTeamPrize(selectedPrize)}
          >
            저장
          </Button>
          <Button
            className="bg-rose-700 hover:bg-rose-500"
            loading={isSaving}
            onClick={() => updateTeamPrize(null)}
          >
            제거
          </Button>
          <Button disabled={isSaving} onClick={() => setIsEditing(false)}>
            취소
          </Button>
        </div>
      ) : (
        <Button
          onClick={() => {
            setSelectedPrize(
              MANAGER_PRIZE_OPTIONS.includes(
                prize as (typeof MANAGER_PRIZE_OPTIONS)[number]
              )
                ? prize ?? ""
                : ""
            );
            setIsEditing(true);
          }}
        >
          수상 등록
        </Button>
      )}
    </div>
  );
}
