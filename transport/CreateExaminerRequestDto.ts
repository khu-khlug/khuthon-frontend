import { Group } from "@khlug/constant";

export type CreateExaminerRequestDto = {
  code: string;
  name: string;
  group: Group;
};
