import { MemberState, University } from "@khlug/constant";

export type StatisticsResponseDto = {
  totalMemberCount: number;
  totalActiveMemberCount: number;
  totalAttendedMemberCount: number;
  totalTeamCount: number;
  totalInvitationCount: number;
  states: {
    state: MemberState;
    university: University;
    count: number;
  }[];
};
