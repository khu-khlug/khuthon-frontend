export type GetPrevJudgeResponseJudge = {
  teamId: string;
  creativity: number;
  practicality: number;
  skill: number;
  design: number;
  completeness: number;
};

export type GetPrevJudgeResponseDto = {
  judges: GetPrevJudgeResponseJudge[];
};
