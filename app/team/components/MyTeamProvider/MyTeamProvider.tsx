"use client";

import { GetMyTeamResponseDto } from "@khlug/transport/GetMyTeamResponseDto";
import { createContext, useContext } from "react";

type Props = {
  children: React.ReactNode;
  team: GetMyTeamResponseDto;
  reload: MyTeamReloader;
};

type MyTeamReloader = () => void;

const MyTeamContext = createContext<
  [GetMyTeamResponseDto | null, MyTeamReloader]
>([null, () => {}]);

export default function MyTeamProvider({ children, team, reload }: Props) {
  return (
    <MyTeamContext.Provider value={[team, reload]}>
      {children}
    </MyTeamContext.Provider>
  );
}

export function useMyTeam(): [GetMyTeamResponseDto, MyTeamReloader] {
  const [team, reload] = useContext(MyTeamContext);
  if (!team) {
    throw new Error("No my team");
  }

  return [team, reload];
}
