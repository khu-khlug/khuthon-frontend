import { MemberState } from "@khlug/constant";

export type ListMemberRequestDto = {
  studentNumber?: string;
  name?: string;
  state?: MemberState;
  limit: number;
  offset: number;
};
