"use client";

import { useState } from "react";
import { MemberState, University } from "@khlug/constant";

import ParticipantCounterContainer from "@khlug/components/ParticipantCounterContainer/ParticipantCounterContainer";
import JudgeLoginForm from "@khlug/components/judge/JudgeLoginForm/JudgeLoginForm";
import JudgingCriteriaContainer from "@khlug/components/judge/JudgingCriteriaContainer/JudgingCriteriaContainer";
import TeamItemContainer from "@khlug/components/judge/TeamItemContainer/TeamItemContainer";
import { useEvent } from "@khlug/components/EventProvider/EventProvider";
import JudgeProvider from "@khlug/components/judge/JudgeProvider/JudgeProvider";

export default function JudgePage() {
  const event = useEvent();

  const mockIsLogin = true;
  const mockTeams = Array.from({ length: 20 }, (_, idx) => ({
    id: `teamId${idx}`,
    name: `팀${idx + 1}`,
    idea: `아이디어${idx + 1}`,
    members: [
      {
        id: "memberId1",
        state: MemberState.ACTIVE,
        name: "멤버1",
        phone: "010-1234-5678",
        number: "2021105589",
        university: University.KYUNGHEE_UNIV,
        college: "소프트웨어융합대학 컴퓨터공학부 컴퓨터공학과",
        grade: 2,
      },
    ],
    file: {
      name: "file1",
      url: "/file1",
    },
  }));

  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleTeamItemClick = (teamId: string) => {
    setSelectedTeamId(teamId);
  };

  return mockIsLogin ? (
    <JudgeProvider onError={setMessage} initial={{}}>
      {message && <div className="error">{message}</div>}
      <ParticipantCounterContainer />
      <JudgingCriteriaContainer />
      {mockTeams.map((team) => (
        <TeamItemContainer
          key={team.id}
          team={team}
          selectedTeamId={selectedTeamId}
          expand={team.id === selectedTeamId}
          onClick={handleTeamItemClick}
        />
      ))}
    </JudgeProvider>
  ) : (
    <JudgeLoginForm />
  );
}
