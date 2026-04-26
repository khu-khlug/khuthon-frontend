import {
  Fragment,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import Container from "@khlug/components/Container/Container";
import Divider from "@khlug/components/Divider/Divider";
import Pager from "@khlug/components/Pager/Pager";

import { ManagerListTeamRequestDto } from "@khlug/transport/ManagerListTeamRequestDto";
import {
  ManagerListTeamResponseDto,
  ManagerListTeamResponseTeam,
} from "@khlug/transport/ManagerListTeamResponseDto";

import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { MANAGER_PRIZE_OPTIONS } from "@khlug/components/manager/TeamPrizeEditor";

import TeamListItem from "../TeamListItem";
import TeamSearchBar, { SearchParams } from "../TeamSearchBar";

type TeamListReloader = () => void;
const TeamListReloaderContext = createContext<TeamListReloader>(() => {});

function sortAwardedTeams(
  teams: ManagerListTeamResponseTeam[]
): ManagerListTeamResponseTeam[] {
  return [...teams].sort((a, b) => {
    const aIndex = MANAGER_PRIZE_OPTIONS.findIndex((prize) => prize === a.prize);
    const bIndex = MANAGER_PRIZE_OPTIONS.findIndex((prize) => prize === b.prize);

    if (aIndex === -1 && bIndex === -1) return 0;
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;

    return aIndex - bIndex;
  });
}

export function useTeamListReloader(): TeamListReloader {
  return useContext(TeamListReloaderContext);
}

export default function TeamListContainer() {
  const client = useClient();
  const limit = 10;

  const [message, setMessage] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [teamList, setTeamList] = useState<ManagerListTeamResponseDto | null>(
    null
  );

  const [searchParams, setSearchParams] = useState<SearchParams>({});

  const fetchTeamList = useCallback(async () => {
    try {
      const dto: ManagerListTeamRequestDto = {
        limit,
        offset: (page - 1) * limit,
        ...searchParams,
      };
      const response = await client.get<ManagerListTeamResponseDto>(
        "/manager/teams",
        { params: dto }
      );
      setTeamList({
        ...response.data,
        teams: searchParams.awardedOnly
          ? sortAwardedTeams(response.data.teams)
          : response.data.teams,
      });
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  }, [client, page, searchParams]);

  const handleSearch = (params: SearchParams) => {
    setSearchParams(params);
    setPage(1);
  };

  useEffect(() => {
    fetchTeamList();
  }, [fetchTeamList]);

  return (
    <TeamListReloaderContext.Provider value={fetchTeamList}>
      <Container className="!bg-white !bg-none">
        {message && <div className="error">{message}</div>}
        <TeamSearchBar onSearch={handleSearch} />
        {teamList && (
          <>
            {teamList.teams.map((team, idx) => (
              <Fragment key={team.id}>
                <TeamListItem team={team} />
                {idx < teamList.teams.length - 1 && (
                  <Divider className="!bg-black/10" />
                )}
              </Fragment>
            ))}
            <Pager
              current={page}
              maxPage={Math.ceil(teamList.count / limit)}
              onSelect={setPage}
            />
          </>
        )}
      </Container>
    </TeamListReloaderContext.Provider>
  );
}
