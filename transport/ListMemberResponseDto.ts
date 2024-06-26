import { MemberState, University } from "@khlug/constant";

export type ListMemberResponseMember = {
  id: string;
  email: string;
  university: University;
  state: MemberState;
  studentNumber: string | null;
  name: string | null;
  college: string | null;
  grade: number | null;
  phone: string | null;
  isRelevantMajor: boolean | null;
  attendedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
};

export type ListMemberResponseDto = {
  members: ListMemberResponseMember[];
  count: number;
};
