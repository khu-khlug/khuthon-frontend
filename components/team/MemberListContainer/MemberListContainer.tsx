import { useState } from "react";
import Container from "../../Container/Container";
import MemberItem from "../MemberItem/MemberItem";
import { useMyTeam } from "../MyTeamProvider/MyTeamProvider";

export default function MemberListContainer() {
  const [message, setMessage] = useState<string | null>(null);

  const [myTeam] = useMyTeam();

  return (
    <Container>
      <h4>팀 참가자 정보</h4>
      {message && <div className="error">{message}</div>}
      {myTeam.members.map((member) => (
        <MemberItem key={member.id} member={member} onMessage={setMessage} />
      ))}
    </Container>
  );
}
