"use client";

import ParticipantCounterContainer from "@khlug/components/ParticipantCounterContainer/ParticipantCounterContainer";
import JudgeLoginForm from "@khlug/components/judge/JudgeLoginForm/JudgeLoginForm";
import { MemberState, University } from "@khlug/constant";
import JudgingCriteriaContainer from "@khlug/components/judge/JudgingCriteriaContainer/JudgingCriteriaContainer";
import TeamItemContainer from "@khlug/components/judge/TeamItemContainer/TeamItemContainer";
import { useState } from "react";

export default function JudgePage() {
  const mockIsLogin = true;
  const mockEvent = {
    registerStartAt: "2023년 10월 30일 월요일 00:00",
    registerEndAt: "2023년 11월 10일 금요일 23:59",
    eventStartAt: "2023년 11월 20일 월요일 00:00",
    eventEndAt: "2023년 11월 24일 금요일 23:59",
    judgeStartAt: "2023년 11월 25일 토요일 00:00",
    judgeEndAt: "2023년 11월 25일 토요일 23:59",
    judgeRange: "BETWEEN" as const,
  };
  const mockTeam = {
    id: "teamId1",
    name: "팀1",
    idea: "아이디어1",
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
      name: "파일1",
      url: "/file1",
    },
  };
  const mockJudge = {
    creativity: 0,
    practicality: 0,
    skill: 0,
    design: 0,
    completeness: 0,
  };

  return mockIsLogin ? (
    <>
      <ParticipantCounterContainer />
      <JudgingCriteriaContainer />
      <TeamItemContainer
        event={mockEvent}
        team={mockTeam}
        judge={mockJudge}
        expand={true}
      />
    </>
  ) : (
    <JudgeLoginForm />
  );
}
