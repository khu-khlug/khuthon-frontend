import { CalcTeamRankingResponseTeam } from "@khlug/transport/CalcTeamRankingResponseDto";

type Props = {
  team: CalcTeamRankingResponseTeam;
};

function ValueWithLabel({ label, value }: { label: string; value: number }) {
  return (
    <span className="ml-4">
      {label}
      <span className="text-green-600 font-bold ml-1.5">{value}</span>
    </span>
  );
}

export default function RankingItem({ team }: Props) {
  return (
    <div className="my-8">
      <p className="!m-0">
        <span className="text-xl font-bold">
          <strong>{team.name}</strong>
        </span>
        <span className="text-gray-500 ml-4">{team.idea}</span>
      </p>
      <p className="!m-0 !mt-2 text-gray-700">
        <ValueWithLabel label="총 팀원 수" value={team.memberCount} />
        <ValueWithLabel label="전공자 수" value={team.relevantMajorCount} />
        <ValueWithLabel
          label="비전공자 수"
          value={team.notRelevantMajorCount}
        />
        <ValueWithLabel
          label="평균 재학 학기 수"
          value={team.averageAttendedSemesters}
        />
      </p>
      <p className="!m-0 !mt-1 text-gray-700">
        <ValueWithLabel label="총 받은 투표 수" value={team.voteCount} />
      </p>
      <p className="!m-0 !mt-1 text-gray-700">
        <ValueWithLabel label="독창성" value={team.judge.creativity} />
        <ValueWithLabel label="효용성" value={team.judge.practicality} />
        <ValueWithLabel label="적절성" value={team.judge.suitability} />
        <ValueWithLabel label="디자인" value={team.judge.design} />
        <ValueWithLabel label="완성도" value={team.judge.completeness} />
        <ValueWithLabel
          label="총점"
          value={
            team.judge.creativity +
            team.judge.practicality +
            team.judge.suitability +
            team.judge.design +
            team.judge.completeness
          }
        />
      </p>
    </div>
  );
}
