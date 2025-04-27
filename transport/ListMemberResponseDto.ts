import { MemberState, University } from "@khlug/constant";

export type ListMemberResponseMember = {
  id: string;
  email: string;
  phone: string;
  university: University;
  state: MemberState;
  studentNumber: string;
  name: string;
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
