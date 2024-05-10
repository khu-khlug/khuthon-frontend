import Button from "@khlug/components/Button";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { UniversityName } from "@khlug/constant";
import { ManagerListTeamResponseTeam } from "@khlug/transport/ManagerListTeamResponseDto";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { useState } from "react";
import { useTeamListReloader } from "../TeamListContainer";
import { formatDate } from "@khlug/util/formaDate";
import Badge from "@khlug/components/Badge/Badge";
import TextLink from "@khlug/components/TextLink";

type Props = {
  team: ManagerListTeamResponseTeam;
};

export default function TeamListItem({ team }: Props) {
  const client = useClient();
  const reload = useTeamListReloader();

  const [message, setMessage] = useState<string | null>(null);
  const [prize, setPrize] = useState<string>("");
  const [isUpdatingPrize, setIsUpdatingPrize] = useState<boolean>(false);

  const canPresent = team.attachment && team.idea;

  const cancelTeamRegister = async () => {
    const really = confirm(
      "정말로 팀의 참가를 취소하시겠습니까?\n팀에 소속된 모든 참가자는 다른 팀을 찾아 소속되어야 합니다."
    );
    if (!really) return;

    try {
      setMessage(null);
      await client.delete(`/manager/teams/${team.id}`);
      reload();
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  };

  const updateTeamPrize = async (prize: string | null) => {
    try {
      setMessage(null);
      await client.put(`/manager/teams/${team.id}/prizes`, {
        prize: prize || null, // 빈 문자열이면 null로 처리
      });
      reload();
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  };

  return (
    <div className="!m-4">
      {message && <div className="error">{message}</div>}
      <p className="!m-0">
        <strong className="text-2xl">{team.name}</strong>
      </p>
      <p className="!m-0 !mt-2">
        {canPresent ? (
          <Badge className="!bg-green-400">발표 가능</Badge>
        ) : (
          <Badge className="!bg-red-400">발표 불가능</Badge>
        )}
      </p>
      <p className="!m-0 !mt-2 text-gray-500">
        <span>아이디어: {team.idea || "(아이디어 없음)"}</span>
        <br />
        <span>수상 정보: {team.prize || "(수상 정보 없음)"}</span>
        <br />
        <span>등록 일시: {formatDate(team.createdAt)}</span>
        <br />
        <span>
          제품 링크:{" "}
          {team.productUrl ? (
            <TextLink href={team.productUrl}>{team.productUrl}</TextLink>
          ) : (
            "(제품 링크 없음)"
          )}
        </span>
      </p>
      <div className="!m-0 !mt-2">
        <ul className="!m-0">
          {team.members.map((member) => (
            <li key={member.id}>
              {member.name}
              <span className="text-gray-400 ml-2">
                {UniversityName[member.university]} {member.college}{" "}
                {member.grade}
                학년 ({member.studentNumber})
              </span>
              <span className="text-gray-400 ml-2">{member.email}</span>
              <span className="text-gray-400 ml-2">{member.phone}</span>
            </li>
          ))}
          {team.invitations.map((invitation) => (
            <li key={invitation.id}>
              {invitation.studentNumber}
              <span className="text-gray-400 ml-2">초대 진행 중</span>
            </li>
          ))}
        </ul>
      </div>
      {team.attachment && (
        <p>
          <a
            href={team.attachment.fileUrl}
            className="no-underline text-gray-400 hover:text-gray-500"
          >
            <i className="xi-download"></i> {team.attachment.fileName}
          </a>
        </p>
      )}
      <div className="flex justify-end !mt-2">
        {isUpdatingPrize ? (
          <>
            <input
              type="text"
              value={prize}
              onChange={(e) => setPrize(e.target.value)}
              className="border border-gray-300 rounded p-1"
            />
            <Button
              className="ml-2 bg-green-700 hover:bg-green-500"
              onClick={() => {
                updateTeamPrize(prize);
                setIsUpdatingPrize(false);
              }}
            >
              저장
            </Button>
            <Button
              className="ml-1 bg-rose-700 hover:bg-rose-500"
              onClick={() => {
                updateTeamPrize(null);
                setIsUpdatingPrize(false);
              }}
            >
              제거
            </Button>
            <Button className="ml-1" onClick={() => setIsUpdatingPrize(false)}>
              취소
            </Button>
          </>
        ) : (
          <Button
            onClick={() => {
              setIsUpdatingPrize(true);
              setPrize(team.prize || "");
            }}
          >
            수상 등록
          </Button>
        )}
        <Button
          className="ml-2 bg-rose-700 hover:bg-rose-500"
          onClick={() => cancelTeamRegister()}
        >
          등록 취소
        </Button>
      </div>
    </div>
  );
}
