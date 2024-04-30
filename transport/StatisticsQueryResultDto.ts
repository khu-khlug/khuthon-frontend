import { MemberState, University } from '@khlug/constant';

export type StatisticsQueryResultDto = {
  totalMemberCount: number;
  totalTeamCount: number;
  states: {
    state: MemberState;
    university: University;
    count: number;
  };
};
