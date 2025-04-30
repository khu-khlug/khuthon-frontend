import Subtitle from "@khlug/components/Title/Subtitle";
import { UniversityName } from "@khlug/constant";
import { StatisticsResponseDto } from "@khlug/transport/StatisticsResponseDto";

type Props = {
  statistics: StatisticsResponseDto;
};

type MemberStateStatistics = StatisticsResponseDto["states"];

const states = [
  "CONFIRMED",
  "NEED_CONFIRM",
  "NEED_TEAM",
  "NEED_VERIFICATION",
] as const;
type StateType = (typeof states)[number];

const stateLabel: Record<StateType, string> = {
  CONFIRMED: "인원 확정 완료",
  NEED_CONFIRM: "인원 확정 필요",
  NEED_TEAM: "팀 필요",
  NEED_VERIFICATION: "인증 필요",
};

export default function MemberStateStatisticsList({ statistics }: Props) {
  const parseToState = (item: MemberStateStatistics[number]): StateType => {
    if (item.state === "ACTIVE" && item.confirmed) {
      return "CONFIRMED";
    } else if (item.state === "ACTIVE" && !item.confirmed) {
      return "NEED_CONFIRM";
    } else if (item.state === "NEED_TEAM") {
      return "NEED_TEAM";
    } else {
      return "NEED_VERIFICATION";
    }
  };

  const statisticsGroup = statistics.states.reduce((acc, cur) => {
    const currentState = parseToState(cur);
    const prev = acc.get(currentState) ?? [];
    return acc.set(currentState, prev.concat(cur));
  }, new Map<StateType, MemberStateStatistics>());

  return states.map((state) => (
    <div key={`MemberStateStatistics/${state}`} className="mt-8">
      <Subtitle>{stateLabel[state]}</Subtitle>
      {statisticsGroup.get(state)?.map(({ state, university, count }) => (
        <p key={`${university}/${state}`}>
          <span className="ml-4">{UniversityName[university]}</span>
          <span className="ml-4">{count}명</span>
        </p>
      ))}
    </div>
  ));
}
