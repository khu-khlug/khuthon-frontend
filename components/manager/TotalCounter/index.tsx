import { StatisticsResponseDto } from "@khlug/transport/StatisticsResponseDto";

type Props = {
  statistics: StatisticsResponseDto;
};

export default function TotalCounter({ statistics }: Props) {
  const totalMemberCount = statistics.states
    .map((state) => state.count)
    .reduce((acc, count) => acc + count, 0);
  const totalConfirmedMemberCount = statistics.states
    .filter((state) => state.confirmed)
    .map((state) => state.count)
    .reduce((acc, count) => acc + count, 0);

  return (
    <>
      <div className="flex justify-evenly text-center">
        <div>
          <p className="text-base">총 접수 수</p>
          <p className="Text__Main-Color text-4xl font-bold !leading-8">
            {totalMemberCount}
          </p>
        </div>
        <div>
          <p className="text-base">총 인원 확정 인원 수</p>
          <p className="Text__Main-Color text-4xl font-bold !leading-8">
            {totalConfirmedMemberCount}
          </p>
        </div>
        <div>
          <p className="text-base">총 참가 확인된 수</p>
          <p className="Text__Main-Color text-4xl font-bold !leading-8">
            {statistics.totalAttendedMemberCount}
          </p>
        </div>
        <div>
          <p className="text-base">총 팀 수</p>
          <p className="Text__Main-Color text-4xl font-bold !leading-8">
            {statistics.totalTeamCount}
          </p>
        </div>
        <div>
          <p className="text-base">총 인원 확정 팀 수</p>
          <p className="Text__Main-Color text-4xl font-bold !leading-8">
            {statistics.totalConfirmedTeamCount}
          </p>
        </div>
        <div>
          <p className="text-base">총 진행 중인 초대 수</p>
          <p className="Text__Main-Color text-4xl font-bold !leading-8">
            {statistics.totalInvitationCount}
          </p>
        </div>
      </div>
    </>
  );
}
