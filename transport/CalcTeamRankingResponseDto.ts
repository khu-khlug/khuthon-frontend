export type CalcTeamRankingResponseTeam = {
  id: string;
  name: string;
  idea: string;
  memberCount: number;
  relevantMajorCount: number;
  notRelevantMajorCount: number;
  averageGrade: number;
  voteCount: number;
  judge: {
    creativity: number;
    practicality: number;
    skill: number;
    design: number;
    completeness: number;
  };
};

export type CalcTeamRankingResponseDto = {
  teams: CalcTeamRankingResponseTeam[];
};
