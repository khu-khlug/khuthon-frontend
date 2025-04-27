"use client";

import { useCallback, useEffect, useState } from "react";

import Container from "@khlug/components/Container/Container";
import LoginForm from "@khlug/components/LoginForm/LoginForm";
import EditTeamContainer from "@khlug/app/team/components/EditTeamContainer/EditTeamContainer";
import InvitationContainer from "@khlug/app/team/components/InvitationContainer/InvitationContainer";
import MemberListContainer from "@khlug/app/team/components/MemberListContainer/MemberListContainer";
import TeamIdeaContainer from "@khlug/app/team/components/TeamIdeaContainer/TeamIdeaContainer";
import ResultContainer from "@khlug/app/team/components/ResultContainer";
import VoteContainer from "@khlug/app/team/components/VoteContainer/VoteContainer";
import { useEvent } from "@khlug/components/EventProvider/EventProvider";
import MyTeamProvider from "@khlug/app/team/components/MyTeamProvider/MyTeamProvider";
import { GetMyTeamResponseDto } from "@khlug/transport/GetMyTeamResponseDto";
import {
  useClient,
  useToken,
} from "@khlug/components/ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { useGlobalSpinner } from "@khlug/components/GlobalSpinnerProvider/GlobalSpinnerProvider";
import DeleteTeamContainer from "@khlug/app/team/components/DeleteTeamContainer/DeleteTeamContainer";
import { toast } from "react-toastify";
import Callout from "@khlug/components/Callout/Callout";
import ConfirmTeamContainer from "@khlug/app/team/components/ConfirmTeamContainer";
import EditStudentInfoForm from "./components/EditStudentInfoForm";

const SpinnerContext = "Khuthon/TeamLoader" as const;

export default function TeamPage() {
  const [addContext, removeContext] = useGlobalSpinner();
  const [token] = useToken();
  const client = useClient();
  const event = useEvent();

  const [team, setTeam] = useState<GetMyTeamResponseDto | null>(null);
  const teamConfirmed = team?.confirmed ?? false;

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
          <EditStudentInfoForm />
          <MemberListContainer />
          {event.registerRange === "BETWEEN" && !teamConfirmed && (
            <>
              <InvitationContainer />
              <ConfirmTeamContainer />
            </>
          )}
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
