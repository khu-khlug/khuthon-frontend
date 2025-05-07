import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { useMyTeam } from "../MyTeamProvider/MyTeamProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { GetVoteResponseDto } from "@khlug/transport/GetVoteResponseDto";
import { ListTeamResponseDto } from "@khlug/transport/ListTeamResponseDto";
import VoteItem from "../VoteItem/VoteItem";
import { VoteRequestDto } from "@khlug/transport/VoteRequestDto";
import Button from "@khlug/components/Button";
import { toast } from "react-toastify";

export default function VoteForm() {
  const client = useClient();
  const [myTeam] = useMyTeam();

  const [prevVote, setPrevVote] = useState<GetVoteResponseDto | null>(null);
  const [teamList, setTeamList] = useState<ListTeamResponseDto | null>(null);

  const [selectedTeamIds, setSelectedTeamIds] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadPrevVote = useCallback(async () => {
    try {
      const teamId = myTeam.id;
      const response = await client.get<GetVoteResponseDto>(
        `/teams/${teamId}/vote`
      );
      setPrevVote(response.data);
      setSelectedTeamIds(response.data.teamIds);
    } catch (e) {
      toast.error(extractErrorMessage(e));
    }
  }, [client, myTeam]);

  const loadTeamList = useCallback(async () => {
    try {
      const response = await client.get<ListTeamResponseDto>(`/teams`);
      setTeamList(response.data);
    } catch (e) {
      toast.error(extractErrorMessage(e));
    }
  }, [client]);

  const loadVoteData = useCallback(async () => {
    await Promise.all([loadPrevVote(), loadTeamList()]);
  }, [loadPrevVote, loadTeamList]);

  useEffect(() => {
    loadVoteData();
  }, [loadVoteData]);

  const handleClick = (teamId: string) => {
    if (!prevVote || prevVote.teamIds.length > 0) return;

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
      toast.error("투표할 두 팀을 선택해주세요.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    if (loading) return;
    setLoading(true);

    try {
      const dto: VoteRequestDto = {
        destTeamIds: selectedTeamIds,
      };
      await client.post(`/teams/${myTeam.id}/vote`, dto);
      toast.success("투표가 완료되었습니다.");
      loadPrevVote();
    } catch (e) {
      toast.error(extractErrorMessage(e));
    }

    setLoading(false);
  };

  return (
    prevVote &&
    teamList && (
      <>
        {prevVote.teamIds.length > 0 && (
          <div className="error">투표가 완료되었습니다.</div>
        )}
        <form className="vote" onSubmit={handleSubmit}>
          {teamList.teams.length > 0 ? (
            teamList.teams.map((team) => (
              <VoteItem
                active={selectedTeamIds.includes(team.id)}
                key={team.id}
                team={team}
                onClick={() => handleClick(team.id)}
              />
            ))
          ) : (
            <div className="error">
              투표할 팀이 없습니다. 이 에러 메시지가 보인다면 운영진에게
              문의해주세요!
            </div>
          )}

          {prevVote.teamIds.length === 0 && (
            <div
              className="mt-2 text-right"
              style={{ margin: "15px 0 10px -3px !important" }}
            >
              <Button
                className="w-full py-2.5 my-4"
                formSubmit
                loading={loading}
              >
                투표하기
              </Button>
            </div>
          )}
        </form>
      </>
    )
  );
}
