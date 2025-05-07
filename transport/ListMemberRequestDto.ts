import { MemberStateForQuery } from "@khlug/app/manager/members/components/MemberSearchBar";
import { Group } from "@khlug/constant";

export type ListMemberRequestDto = {
  studentNumber?: string;
  name?: string;
  email?: string;
  phone?: string;
  state?: MemberStateForQuery;
  group?: Group;
  limit: number;
  offset: number;
};
