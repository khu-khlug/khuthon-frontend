import Container from "@khlug/components/Container/Container";
import LoginForm from "@khlug/components/LoginForm/LoginForm";
import EditTeamContainer from "@khlug/components/EditTeamContainer/EditTeamContainer";
import InvitationContainer from "@khlug/components/InvitationContainer/InvitationContainer";
import MemberListContainer from "@khlug/components/MemberListContainer/MemberListContainer";
import TeamIdeaContainer from "@khlug/components/TeamIdeaContainer/TeamIdeaContainer";
import AttachmentContainer from "@khlug/components/AttachmentContainer/AttachmentContainer";
import VoteContainer from "@khlug/components/VoteContainer/VoteContainer";

type RangeType = "BEFORE" | "BETWEEN" | "AFTER";
type MockEvent = {
  registerRange: RangeType;
  eventRange: RangeType;
  judgeRange: RangeType;
  isLimitExceed: boolean;
  eventStartAt: string;
  judgeStartAt: string;
  judgeEndAt: string;
};

export default function TeamPage() {
  const mockIsLogin = true;
  const mockTeam = {
    id: "teamId",
    name: "teamName",
    note: "teamNote",
  };
  const mockMembers = [
    {
      id: "memberId1",
      name: "memberName",
      college: "memberCollege",
      grade: 2,
      studentNumber: "2021105589",
      phone: "010-0000-0000",
      email: "some.email@email.com",
    },
    {
      id: "memberId2",
      name: "memberName",
      college: "memberCollege",
      grade: 2,
      studentNumber: "2021105589",
      phone: "010-0000-0000",
      email: "some.email@email.com",
    },
  ];
  const mockInvitations = [
    {
      id: "invitationId",
      studentNumber: "2021105589",
    },
  ];
  const mockEvent: MockEvent = {
    registerRange: "BETWEEN",
    eventRange: "BETWEEN",
    judgeRange: "BETWEEN",
    isLimitExceed: false,
    eventStartAt: "2024-03-15 00:00:00",
    judgeStartAt: "2024-03-15 23:59:59",
    judgeEndAt: "2024-03-16 23:59:59",
  };
  const myTeam = {
    id: "teamId",
    isVoted: false,
  };

  return (
    <>
      {mockIsLogin ? (
        mockEvent.judgeRange === "BETWEEN" ? (
          <>
            <TeamIdeaContainer event={mockEvent} />
            <AttachmentContainer event={mockEvent} />
            <VoteContainer event={mockEvent} myTeam={myTeam} />
          </>
        ) : (
          <>
            <EditTeamContainer team={mockTeam} event={mockEvent} />
            <MemberListContainer members={mockMembers} event={mockEvent} />
            <InvitationContainer
              invitations={mockInvitations}
              event={mockEvent}
            />
          </>
        )
      ) : (
        <Container>
          <LoginForm />
        </Container>
      )}
    </>
  );
}
