import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { useGlobalSpinner } from "@khlug/components/GlobalSpinnerProvider/GlobalSpinnerProvider";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { useMyTeam } from "../MyTeamProvider/MyTeamProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { GetVoteResponseDto } from "@khlug/transport/GetVoteResponseDto";
import { ListTeamResponseDto } from "@khlug/transport/ListTeamResponseDto";
import VoteItem from "../VoteItem/VoteItem";
import { VoteRequestDto } from "@khlug/transport/VoteRequestDto";

const SpinnerContext = "Khuthon/VoteDataLoader";

export default function VoteForm() {
  const client = useClient();
  const [myTeam] = useMyTeam();
  const [addContext, removeContext] = useGlobalSpinner();

  const [prevVote, setPrevVote] = useState<GetVoteResponseDto | null>(null);
  const [teamList, setTeamList] = useState<ListTeamResponseDto | null>(null);

  const [selectedTeamIds, setSelectedTeamIds] = useState<string[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  const loadPrevVote = useCallback(async () => {
    try {
      const teamId = myTeam.id;
      const response = await client.get<GetVoteResponseDto>(
        `/teams/${teamId}/vote`
      );
      setPrevVote(response.data);
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  }, [client, myTeam]);

  const loadTeamList = useCallback(async () => {
    try {
      const response = await client.get<ListTeamResponseDto>(`/teams`);
      setTeamList(response.data);
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  }, [client]);

  const loadVoteData = useCallback(async () => {
    addContext(SpinnerContext);
    await Promise.all([loadPrevVote(), loadTeamList()]);
    removeContext(SpinnerContext);
  }, [addContext, removeContext, loadPrevVote, loadTeamList]);

  useEffect(() => {
    loadVoteData();
  }, [loadVoteData]);

  const handleClick = (teamId: string) => {
    setSelectedTeamIds((prev) => {
      if (prev.includes(teamId)) {
        return prev.filter((id) => id !== teamId);
      } else {
        if (prev.length >= 2) {
          return prev;
        }
        return [...prev, teamId];
      }
    });
  };

  const validate = () => {
    if (selectedTeamIds.length !== 2) {
      setMessage("투표할 두 팀을 선택해주세요.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage(null);
    if (!validate()) return;

    try {
      const dto: VoteRequestDto = {
        destTeamIds: selectedTeamIds,
      };
      await client.post(`/teams/${myTeam.id}/vote`, dto);
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  };

  return (
    prevVote &&
    teamList && (
      <>
        {message && <div className="error">{message}</div>}
        {prevVote.teamIds.length > 0 && (
          <div className="error">투표가 완료되었습니다.</div>
        )}
        <form className="vote" onSubmit={handleSubmit}>
          {teamList.teams.map((team) => (
            <VoteItem
              active={selectedTeamIds.includes(team.id)}
              key={team.id}
              team={team}
              onClick={() => handleClick(team.id)}
            />
          ))}

          {prevVote.teamIds.length === 0 && (
            <div
              className="btnArea"
              style={{ margin: "15px 0 10px -3px !important" }}
            >
              <button type="submit" className="black w-full">
                <span className="p-4 text-lg">투표하기</span>
              </button>
            </div>
          )}
        </form>
      </>
    )
  );
}
