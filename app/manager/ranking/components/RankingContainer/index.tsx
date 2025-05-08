import { useRef, useState } from "react";

import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import Container from "@khlug/components/Container/Container";
import Subtitle from "@khlug/components/Title/Subtitle";
import Callout from "@khlug/components/Callout/Callout";

import RankingAlignSelector, {
  JudgeCriteria,
  QueryMethod,
} from "../RankingAlignSelector";
import RankingItem from "../RankingItem";

import { CalcTeamRankingResponseDto } from "@khlug/transport/CalcTeamRankingResponseDto";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { Group } from "@khlug/constant";

export default function RankingContainer() {
  const client = useClient();

  const [message, setMessage] = useState<string | null>(null);
  const loading = useRef<boolean>(false);
  const [ranking, setRanking] = useState<CalcTeamRankingResponseDto | null>(
    null
  );

  const handleSearch = async (
    queryMethod: QueryMethod,
    judgeCriteriaObj: JudgeCriteria | null,
    group: Group | null
  ) => {
    if (loading.current) return;

    setMessage(null);
    loading.current = true;
    try {
      const judgeCriteria = judgeCriteriaObj
        ? Object.entries(judgeCriteriaObj)
            .filter(([, enabled]) => enabled)
            .map(([key]) => key)
            .join(",")
        : undefined;
      const response = await client.get("/manager/teams/ranking", {
        params: { queryMethod, judgeCriteria, group: group ?? undefined },
      });
      setRanking(response.data);
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
    loading.current = false;
  };

  return (
    <Container className="!bg-white !bg-none">
      <Subtitle>팀 랭킹</Subtitle>
      <p className="text-amber-600">
        랭킹 조회는 상당히 무거운 쿼리식을 갖고 있습니다.
        <br />
        많이 사용하는 경우 참여자 및 심사위원의 사이트 이용에도 영향을 끼칠 수
        있으므로 조심해서 사용해주세요.
        <br />
        랭킹 조회는 <strong>인원 확정이 완료된 팀만</strong> 나타납니다.
      </p>
      {message && <div className="error">{message}</div>}
      <RankingAlignSelector onSearch={handleSearch} />
      {ranking &&
        (ranking.teams.length > 0 ? (
          ranking.teams.map((team) => <RankingItem key={team.id} team={team} />)
        ) : (
          <Callout>조회할 팀이 없습니다.</Callout>
        ))}
    </Container>
  );
}
