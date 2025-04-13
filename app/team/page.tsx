"use client";

import { useCallback, useEffect, useState } from "react";

import Container from "@khlug/components/Container/Container";
import LoginForm from "@khlug/components/LoginForm/LoginForm";
import EditTeamContainer from "@khlug/components/team/EditTeamContainer/EditTeamContainer";
import InvitationContainer from "@khlug/components/team/InvitationContainer/InvitationContainer";
import MemberListContainer from "@khlug/components/team/MemberListContainer/MemberListContainer";
import TeamIdeaContainer from "@khlug/components/team/TeamIdeaContainer/TeamIdeaContainer";
import ResultContainer from "@khlug/components/team/ResultContainer";
import VoteContainer from "@khlug/components/team/VoteContainer/VoteContainer";
import { useEvent } from "@khlug/components/EventProvider/EventProvider";
import MyTeamProvider from "@khlug/components/team/MyTeamProvider/MyTeamProvider";
import { GetMyTeamResponseDto } from "@khlug/transport/GetMyTeamResponseDto";
import {
  useClient,
  useToken,
} from "@khlug/components/ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { useGlobalSpinner } from "@khlug/components/GlobalSpinnerProvider/GlobalSpinnerProvider";
import DeleteTeamContainer from "@khlug/components/team/DeleteTeamContainer/DeleteTeamContainer";
import { toast } from "react-toastify";
import Callout from "@khlug/components/Callout/Callout";

const SpinnerContext = "Khuthon/TeamLoader" as const;

export default function TeamPage() {
  const [addContext, removeContext] = useGlobalSpinner();
  const [token] = useToken();
  const client = useClient();
  const event = useEvent();

  const [team, setTeam] = useState<GetMyTeamResponseDto | null>(null);

  const fetchTeam = useCallback(async () => {
    if (!token) return;
    addContext(SpinnerContext);
    try {
      const response = await client.get<GetMyTeamResponseDto>("/team");
      setTeam(response.data);
    } catch (e) {
      toast.error(extractErrorMessage(e));
    }
    removeContext(SpinnerContext);
  }, [token, addContext, removeContext, client]);

  useEffect(() => {
    fetchTeam();
  }, [fetchTeam]);

  return event.eventRange === "AFTER" ? (
    <Container>
      <Callout>
        <strong>올해 대회가 종료되었습니다.</strong>
        <br />
        <span className="text-xl">내년 행사에서 만나요!</span>
      </Callout>
    </Container>
  ) : team ? (
    <MyTeamProvider team={team} reload={fetchTeam}>
      {event.eventRange === "BETWEEN" ? (
        <>
          <TeamIdeaContainer />
          <ResultContainer />
          <VoteContainer />
        </>
      ) : (
        <>
          <EditTeamContainer />
          <MemberListContainer />
          {event.registerRange === "BETWEEN" && <InvitationContainer />}
          {event.registerRange === "BETWEEN" && <DeleteTeamContainer />}
        </>
      )}
    </MyTeamProvider>
  ) : (
    <Container>
      <LoginForm />
    </Container>
  );
}
