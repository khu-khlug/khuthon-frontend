import { Group } from "@khlug/constant";

export type ListExaminerResponseExaminer = {
  id: string;
  group: Group;
  code: string;
  name: string;
  createdAt: Date;
};

export type ListExaminerResponseDto = {
  examiners: ListExaminerResponseExaminer[];
};
