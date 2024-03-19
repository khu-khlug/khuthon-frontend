type PointDto = {
  creativity: number;
  practicality: number;
  skill: number;
  design: number;
  completeness: number;
};

export type JudgeRequestDto = {
  teamId: string;
  points: PointDto;
};
