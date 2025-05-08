export type GetPrevJudgeResponseJudge = {
  teamId: string;
  creativity: number;
  practicality: number;
  suitability: number;
  design: number;
  completeness: number;
};

export type GetPrevJudgeResponseDto = {
  judges: GetPrevJudgeResponseJudge[];
};
