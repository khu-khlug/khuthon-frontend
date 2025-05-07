import { Group, MemberState, University } from "@khlug/constant";

type ListMemberResponseTeam = {
  id: string;
  group: Group | null;
  name: string;
  confirmed: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type ListMemberResponseMember = {
  id: string;
  email: string;
  phone: string;
  studentNumber: string;
  name: string;
  university: University;
  state: MemberState;
  team: ListMemberResponseTeam | null;
  college: string | null;
  attendedSemesters: number | null;
  isRelevantMajor: boolean | null;
  attendedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
};

export type ListMemberResponseDto = {
  members: ListMemberResponseMember[];
  count: number;
};
