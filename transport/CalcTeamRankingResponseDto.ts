export type CalcTeamRankingResponseTeam = {
  id: string;
  name: string;
  idea: string;
  memberCount: number;
  relevantMajorCount: number;
  notRelevantMajorCount: number;
  averageAttendedSemesters: number;
  voteCount: number;
  judge: {
    creativity: number;
    practicality: number;
    suitability: number;
    design: number;
    completeness: number;
  };
};

export type CalcTeamRankingResponseDto = {
  teams: CalcTeamRankingResponseTeam[];
};
