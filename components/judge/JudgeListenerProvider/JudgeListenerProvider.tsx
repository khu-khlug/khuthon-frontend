import { Judge } from "@khlug/types/Judge";
import { createContext, useContext } from "react";

type JudgeListenerFn = (teamId: string, judge: Judge) => void;

type Props = {
  children: React.ReactNode;
  onJudge: JudgeListenerFn;
};

const SaveJudgeContext = createContext<JudgeListenerFn>(() => {});

export default function JudgeListenerProvider({ children, onJudge }: Props) {
  return (
    <SaveJudgeContext.Provider value={onJudge}>
      {children}
    </SaveJudgeContext.Provider>
  );
}

export function useJudgeListener(): JudgeListenerFn {
  return useContext(SaveJudgeContext);
}
