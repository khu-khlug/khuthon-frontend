import Container from "../../Container/Container";

export default function ParticipantCounterContainer() {
  const memberCount = 120;
  const teamCount = 30;

  return (
    <Container>
      <div className="flex justify-evenly text-lg">
        <p>
          <span>전체 참가자</span>
          <span className="Text__Main-Color font-semibold ml-4">
            {teamCount}
          </span>
        </p>
        <p>
          <span>참가 팀</span>
          <span className="Text__Main-Color font-semibold ml-4">
            {memberCount}
          </span>
        </p>
      </div>
    </Container>
  );
}
