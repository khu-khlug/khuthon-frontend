import { MemberState, University } from "@khlug/constant";

export type GetMemberResponseDto = Readonly<{
  id: string;
  email: string;
  university: University;
  state: MemberState;
  teamId: string | null;
  studentNumber: string | null;
  name: string | null;
  college: string | null;
  grade: number | null;
  phone: string | null;
  createdAt: Date;
  updatedAt: Date;
}>;
