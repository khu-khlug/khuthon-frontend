"use client";

import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { JudgeRequestDto } from "@khlug/transport/JudgeRequestDto";
import { Judge } from "@khlug/types/Judge";
import { getErrorMessageFromAxiosError } from "@khlug/util/getErrorMessageFromAxiosError";
import { createContext, useContext, useState } from "react";

type DoJudgeFn = (teamId: string) => void;
type JudgeSetterFn = (teamId: string, judge: Judge) => void;

type JudgeMap = { [teamId: string]: Judge };

type Props = {
  children: React.ReactNode;
  initial: JudgeMap;
  onError: (message: string) => void;
};

const SaveJudgeContext = createContext<DoJudgeFn>(() => {});
const JudgeStateContext = createContext<[JudgeMap, JudgeSetterFn]>([
  {},
  () => {},
]);

export default function JudgeProvider({ children, initial, onError }: Props) {
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
    } catch (e) {
      onError(getErrorMessageFromAxiosError(e));
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
