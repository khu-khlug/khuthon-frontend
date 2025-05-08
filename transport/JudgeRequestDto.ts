type PointDto = Readonly<{
  creativity: number;
  practicality: number;
  suitability: number;
  design: number;
  completeness: number;
}>;

export type JudgeRequestDto = Readonly<{
  teamId: string;
  points: PointDto;
}>;
