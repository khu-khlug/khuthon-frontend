import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { ListTeamResponseDto } from "@khlug/transport/ListTeamResponseDto";
import { useCallback, useEffect, useState } from "react";
import JudgeProvider, { useDoJudge } from "../JudgeProvider/JudgeProvider";
import JudgingCriteriaContainer from "../JudgingCriteriaContainer/JudgingCriteriaContainer";
import TeamItemContainer from "../TeamItemContainer/TeamItemContainer";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { useGlobalSpinner } from "@khlug/components/GlobalSpinnerProvider/GlobalSpinnerProvider";
import { GetPrevJudgeResponseDto } from "@khlug/transport/GetPrevJudgeResponseDto";
import JudgeAutosaver from "../JudgeAutosaver/JudgeAutosaver";
import AboutJudge from "../AboutJudge/AboutJudge";
import { toast } from "react-toastify";

const SpinnerContext = "Khuthon/TeamLoaderInJudge";

export default function Judge() {
  const client = useClient();
  const [addContext, removeContext] = useGlobalSpinner();

  const [teamList, setTeamList] = useState<ListTeamResponseDto | null>(null);
  const [prevJudge, setPrevJudge] = useState<GetPrevJudgeResponseDto | null>(
    null
  );

  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);

  const loadPrevJudge = useCallback(async () => {
    try {
      const response = await client.get<GetPrevJudgeResponseDto>(`/judge`);
      setPrevJudge(response.data);
    } catch (e) {
      toast.error(extractErrorMessage(e));
    }
  }, [client]);

  const loadTeamList = useCallback(async () => {
    try {
      const response = await client.get<ListTeamResponseDto>(`/teams`);
      setTeamList(response.data);
    } catch (e) {
      toast.error(extractErrorMessage(e));
    }
  }, [client]);

  const loadJudgeData = useCallback(async () => {
    addContext(SpinnerContext);
    await Promise.all([loadTeamList(), loadPrevJudge()]);
    removeContext(SpinnerContext);
  }, [addContext, removeContext, loadTeamList, loadPrevJudge]);

  useEffect(() => {
    loadJudgeData();
  }, [loadJudgeData]);

  const handleTeamItemClick = (teamId: string) => {
    setSelectedTeamId(teamId);
  };

  return (
    prevJudge &&
    teamList && (
      <JudgeProvider
        onError={toast.error}
        initial={prevJudge.judges.reduce(
          (prev, cur) => ({
            ...prev,
            [cur.teamId]: {
              creativity: cur.creativity,
              practicality: cur.practicality,
              skill: cur.skill,
              design: cur.design,
              completeness: cur.completeness,
            },
          }),
          {}
        )}
        teamNameMap={teamList.teams.reduce(
          (prev, cur) => ({ ...prev, [cur.id]: cur.name }),
          {}
        )}
      >
        <JudgeAutosaver selectedTeamId={selectedTeamId} />
        <JudgingCriteriaContainer />
        <AboutJudge />
        {teamList.teams.map((team) => (
          <TeamItemContainer
            key={team.id}
            team={team}
            selectedTeamId={selectedTeamId}
            expand={team.id === selectedTeamId}
            onClick={handleTeamItemClick}
          />
        ))}
      </JudgeProvider>
    )
  );
}
