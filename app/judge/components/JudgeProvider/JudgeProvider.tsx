"use client";

import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { JudgeRequestDto } from "@khlug/transport/JudgeRequestDto";
import { Judge } from "@khlug/types/Judge";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

type DoJudgeFn = (teamId: string) => Promise<void>;
type JudgeSetterFn = (teamId: string, judge: Judge) => void;

type TeamNameMap = { [teamId: string]: string };
type JudgeMap = { [teamId: string]: Judge };

type Props = {
  children: React.ReactNode;
  initial: JudgeMap;
  teamNameMap: TeamNameMap;
  onError: (message: string) => void;
};

const SaveJudgeContext = createContext<DoJudgeFn>(async () => {});
const JudgeStateContext = createContext<[JudgeMap, JudgeSetterFn]>([
  {},
  () => {},
]);

export default function JudgeProvider({
  children,
  initial,
  teamNameMap,
  onError,
}: Props) {
  const [judgeMap, setJudgeMap] = useState<JudgeMap>(initial);
  const client = useClient();

  const doJudge = async (teamId: string) => {
    try {
      const points = judgeMap[teamId];
      if (!points) {
        return;
      }

      const requestDto: JudgeRequestDto = { teamId, points };
      await client.post("/judge", requestDto);

      toast.success(`${teamNameMap[teamId]} 팀의 점수가 저장되었습니다.`);
    } catch (e) {
      onError(extractErrorMessage(e));
    }
  };

  const setTeamJudge = (teamId: string, judge: Judge) => {
    setJudgeMap((prev) => ({ ...prev, [teamId]: judge }));
  };

  return (
    <SaveJudgeContext.Provider value={doJudge}>
      <JudgeStateContext.Provider value={[judgeMap, setTeamJudge]}>
        {children}
      </JudgeStateContext.Provider>
    </SaveJudgeContext.Provider>
  );
}

export function useDoJudge(): DoJudgeFn {
  return useContext(SaveJudgeContext);
}

export function useJudge(teamId: string) {
  const emptyJudge = {
    creativity: 0,
    practicality: 0,
    skill: 0,
    design: 0,
    completeness: 0,
  } as const;

  const [judgeMap, setTeamJudge] = useContext(JudgeStateContext);
  return [judgeMap[teamId] ?? emptyJudge, setTeamJudge] as const;
}
