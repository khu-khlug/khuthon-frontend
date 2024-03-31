export type ListTeamResponseTeam = {
  id: string;
  name: string;
  idea: string | null;
  attachmentUrl: string | null;
};

export type ListTeamResponseDto = {
  teams: ListTeamResponseTeam[];
};
