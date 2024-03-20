type PointDto = Readonly<{
  creativity: number;
  practicality: number;
  skill: number;
  design: number;
  completeness: number;
}>;

export type JudgeRequestDto = Readonly<{
  teamId: string;
  points: PointDto;
}>;
