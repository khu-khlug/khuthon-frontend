import Subtitle from "@khlug/components/Title/Subtitle";
import { MemberState, MemberStateLabel, UniversityName } from "@khlug/constant";
import { StatisticsResponseDto } from "@khlug/transport/StatisticsResponseDto";
import { Fragment } from "react";

type Props = {
  statistics: StatisticsResponseDto;
};

type MemberStateStatistics = StatisticsResponseDto["states"];

export default function MemberStateStatisticsList({ statistics }: Props) {
  const states = [
    MemberState.ACTIVE,
    MemberState.NEED_TEAM,
    MemberState.NEED_STUDENT_INFO,
    MemberState.NEED_VERIFICATION,
  ];
  const statisticsGroup: Record<MemberState, MemberStateStatistics> =
    statistics.states.reduce(
      (acc, cur) => {
        const prev = acc[cur.state] ?? [];
        acc[cur.state] = prev.concat(cur);
        return acc;
      },
      {
        [MemberState.ACTIVE]: [],
        [MemberState.NEED_TEAM]: [],
        [MemberState.NEED_STUDENT_INFO]: [],
        [MemberState.NEED_VERIFICATION]: [],
      } as Record<MemberState, MemberStateStatistics>
    );

  return states.map((state) => (
    <div key={`MemberStateStatistics/${state}`} className="mt-8">
      <Subtitle>{MemberStateLabel[state]}</Subtitle>
      {statisticsGroup[state].map(({ state, university, count }) => (
        <p key={`${university}/${state}`}>
          <span className="ml-4">{UniversityName[university]}</span>
          <span className="ml-4">{count}명</span>
        </p>
      ))}
    </div>
  ));
}
