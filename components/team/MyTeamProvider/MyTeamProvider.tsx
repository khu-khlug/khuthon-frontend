"use client";

import { GetMyTeamResponseDto } from "@khlug/transport/GetMyTeamResponseDto";
import { createContext, useContext } from "react";

type Props = {
  children: React.ReactNode;
  team: GetMyTeamResponseDto;
};

const MyTeamContext = createContext<GetMyTeamResponseDto | null>(null);

export default function MyTeamProvider({ children, team }: Props) {
  return (
    <MyTeamContext.Provider value={team}>{children}</MyTeamContext.Provider>
  );
}

export function useMyTeam(): GetMyTeamResponseDto {
  const team = useContext(MyTeamContext);
  if (!team) {
    throw new Error("No my team");
  }

  return team;
}
