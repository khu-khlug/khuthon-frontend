import { MemberState, University } from "@khlug/constant";

export type GetMyTeamResponseMember = {
  id: string;
  email: string;
  university: University;
  state: MemberState;
  studentNumber: string;
  name: string;
  college: string | null;
  attendedSemesters: number | null;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
};

export type GetMyTeamResponseInvitation = {
  id: string;
  studentNumber: string;
  university: University;
  createdAt: Date;
};

export type GetMyTeamResponseDto = {
  id: string;
  name: string;
  idea: string;
  note: string;
  members: GetMyTeamResponseMember[];
  invitations: GetMyTeamResponseInvitation[];
  productUrl: string | null;
  confirmed: boolean;
  createdAt: Date;
  updatedAt: Date;
};
