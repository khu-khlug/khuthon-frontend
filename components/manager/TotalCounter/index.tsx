import { StatisticsResponseDto } from "@khlug/transport/StatisticsResponseDto";

type Props = {
  statistics: StatisticsResponseDto;
};

export default function TotalCounter({ statistics }: Props) {
  return (
    <>
      <div className="flex justify-evenly text-center">
        <div>
          <p className="text-base">총 멤버 수*</p>
          <p className="Text__Main-Color text-4xl font-bold !leading-8">
            {statistics.totalMemberCount}
          </p>
        </div>
        <div>
          <p className="text-base">총 대회 참가자 수</p>
          <p className="Text__Main-Color text-4xl font-bold !leading-8">
            {statistics.totalActiveMemberCount}
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
          <p className="text-base">총 진행 중인 초대 수</p>
          <p className="Text__Main-Color text-4xl font-bold !leading-8">
            {statistics.totalInvitationCount}
          </p>
        </div>
      </div>
      <p className="text-gray-400 text-right">
        * 총 멤버 수는 실제 참가자 수를 뜻하지 않습니다.
      </p>
    </>
  );
}
