import { MemberState, University } from "@khlug/constant";

interface ManagerListTeamResponseAttachmentFile {
  id: string;
  fileName: string;
  fileKey: string;
  fileUrl: string;
  createdAt: Date;
}

interface ManagerListTeamResponseMember {
  id: string;
  email: string;
  university: University;
  state: MemberState;
  studentNumber: string;
  name: string;
  college: string;
  grade: number;
  phone: string | null;
  attendedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

interface ManagerListTeamResponseInvitation {
  id: string;
  studentNumber: string;
}

export interface ManagerListTeamResponseTeam {
  id: string;
  name: string;
  idea: string;
  prize: string | null;
  createdAt: Date;
  updatedAt: Date;
  attachment: ManagerListTeamResponseAttachmentFile | null;
  members: ManagerListTeamResponseMember[];
  invitations: ManagerListTeamResponseInvitation[];
}

export interface ManagerListTeamResponseDto {
  teams: ManagerListTeamResponseTeam[];
  count: number;
}
