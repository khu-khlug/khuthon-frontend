"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import Container from "@khlug/components/Container/Container";
import LoginForm from "@khlug/components/LoginForm/LoginForm";
import { useEvent } from "@khlug/components/EventProvider/EventProvider";
import {
  useClient,
  useToken,
} from "@khlug/components/ClientProvider/ClientProvider";
import { useGlobalSpinner } from "@khlug/components/GlobalSpinnerProvider/GlobalSpinnerProvider";
import Callout from "@khlug/components/Callout/Callout";

import EditTeamContainer from "./components/EditTeamContainer/EditTeamContainer";
import InvitationContainer from "./components/InvitationContainer/InvitationContainer";
import MemberListContainer from "./components/MemberListContainer/MemberListContainer";
import TeamIdeaContainer from "./components/TeamIdeaContainer/TeamIdeaContainer";
import VoteContainer from "./components/VoteContainer/VoteContainer";
import MyTeamProvider from "./components/MyTeamProvider/MyTeamProvider";
import DeleteTeamContainer from "./components/DeleteTeamContainer/DeleteTeamContainer";
import ConfirmTeamContainer from "./components/ConfirmTeamContainer";
import EditStudentInfoForm from "./components/EditStudentInfoForm";
import AttachmentUploadContainer from "./components/AttachmentUploadContainer";
import ProductUrlContainer from "./components/ProductUrlContainer";
import { useMemberConfigs } from "./components/MemberConfigProvider";

import { GetMyTeamResponseDto } from "@khlug/transport/GetMyTeamResponseDto";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";

const SpinnerContext = "Khuthon/TeamLoader" as const;

export default function TeamPage() {
  const [addContext, removeContext] = useGlobalSpinner();
  const [token] = useToken();
  const client = useClient();
  const event = useEvent();
  const configs = useMemberConfigs();

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
      {configs?.ideaEditEnabled && <TeamIdeaContainer />}
      {configs?.attachmentEditEnabled && <AttachmentUploadContainer />}
      {configs?.productUrlEditEnabled && <ProductUrlContainer />}
      {configs?.voteEnabled && <VoteContainer />}
      {event.eventRange !== "BETWEEN" && (
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
