import { MemberState, University } from "@khlug/constant";

export type StatisticsResponseDto = {
  totalAttendedMemberCount: number;
  totalTeamCount: number;
  totalConfirmedTeamCount: number;
  totalInvitationCount: number;
  states: {
    state: MemberState;
    confirmed: boolean;
    university: University;
    count: number;
  }[];
};
