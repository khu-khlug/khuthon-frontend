import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import Container from "@khlug/components/Container/Container";
import Divider from "@khlug/components/Divider/Divider";
import Pager from "@khlug/components/Pager/Pager";
import { ManagerListTeamRequestDto } from "@khlug/transport/ManagerListTeamRequestDto";
import { ManagerListTeamResponseDto } from "@khlug/transport/ManagerListTeamResponseDto";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { Fragment, useCallback, useEffect, useState } from "react";
import TeamListItem from "../TeamListItem/TeamListItem";

export default function TeamListContainer() {
  const client = useClient();
  const limit = 10;

  const [message, setMessage] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [teamList, setTeamList] = useState<ManagerListTeamResponseDto | null>(
    null
  );

  const fetchTeamList = useCallback(async () => {
    try {
      const dto: ManagerListTeamRequestDto = {
        limit,
        offset: (page - 1) * limit,
      };
      const response = await client.get<ManagerListTeamResponseDto>(
        "/manager/teams",
        { params: dto }
      );
      setTeamList(response.data);
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  }, [client, page]);

  useEffect(() => {
    fetchTeamList();
  }, [fetchTeamList]);

  return (
    <Container className="!bg-white !bg-none">
      {message && <div className="error">{message}</div>}
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
  );
}
