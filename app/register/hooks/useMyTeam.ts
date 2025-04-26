import { useCallback, useEffect, useState } from "react";

import { GetMyTeamResponseDto } from "@khlug/transport/GetMyTeamResponseDto";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";

type UseMyTeamHookResult =
  | { loading: true; error: undefined; team: undefined }
  | { loading: false; error: undefined; team: GetMyTeamResponseDto }
  | { loading: false; error: Error; team: undefined };

export function useMyTeam() {
  const client = useClient();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>();
  const [team, setTeam] = useState<GetMyTeamResponseDto | null | undefined>();

  const fetchTeam = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    setTeam(undefined);

    try {
      const response = await client.get<GetMyTeamResponseDto>("/team");
      setTeam(response.data);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }, [client]);

  useEffect(() => {
    fetchTeam();
  }, [fetchTeam]);

  return { loading, error, team };
}
