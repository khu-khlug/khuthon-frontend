export type ListExaminerResponseExaminer = {
  id: string;
  code: string;
  name: string;
  createdAt: Date;
};

export type ListExaminerResponseDto = {
  examiners: ListExaminerResponseExaminer[];
};
