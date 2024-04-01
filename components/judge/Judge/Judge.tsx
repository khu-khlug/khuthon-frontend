import {
  useClient,
  useToken,
} from "@khlug/components/ClientProvider/ClientProvider";
import { useEvent } from "@khlug/components/EventProvider/EventProvider";
import { MemberState, University } from "@khlug/constant";
import { ListTeamResponseDto } from "@khlug/transport/ListTeamResponseDto";
import { useCallback, useEffect, useState } from "react";
import JudgeProvider from "../JudgeProvider/JudgeProvider";
import JudgingCriteriaContainer from "../JudgingCriteriaContainer/JudgingCriteriaContainer";
import ParticipantCounterContainer from "../ParticipantCounterContainer/ParticipantCounterContainer";
import TeamItemContainer from "../TeamItemContainer/TeamItemContainer";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { useGlobalSpinner } from "@khlug/components/GlobalSpinnerProvider/GlobalSpinnerProvider";

const SpinnerContext = "Khuthon/TeamLoaderInJudge";

export default function Judge() {
  const event = useEvent();
  const client = useClient();
  const [addContext, removeContext] = useGlobalSpinner();

  const [teamList, setTeamList] = useState<ListTeamResponseDto | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);

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
    await loadTeamList();
    removeContext(SpinnerContext);
  }, [addContext, removeContext, loadTeamList]);

  useEffect(() => {
    loadVoteData();
  }, [loadVoteData]);

  const handleTeamItemClick = (teamId: string) => {
    setSelectedTeamId(teamId);
  };

  return (
    <JudgeProvider onError={setMessage} initial={{}}>
      {message && <div className="error">{message}</div>}
      <ParticipantCounterContainer />
      <JudgingCriteriaContainer />
      {teamList &&
        teamList.teams.map((team) => (
          <TeamItemContainer
            key={team.id}
            team={team}
            selectedTeamId={selectedTeamId}
            expand={team.id === selectedTeamId}
            onClick={handleTeamItemClick}
          />
        ))}
    </JudgeProvider>
  );
}
