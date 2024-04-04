import Badge from "@khlug/components/Badge/Badge";
import { MemberState, UniversityName } from "@khlug/constant";
import { ListMemberResponseMember } from "@khlug/transport/ListMemberResponseDto";

type Props = {
  member: ListMemberResponseMember;
};

function NeedVerificationMemberListItem({ member }: Props) {
  return (
    <div>
      <p>
        <span className="ml-2">{member.email}</span>
        <Badge className="ml-2 !bg-gray-700">이메일 인증 필요</Badge>
      </p>
    </div>
  );
}

function NeedStudentInfoMemberListItem({ member }: Props) {
  return (
    <div>
      <p>
        <span className="ml-2">{member.email}</span>
        <Badge className="ml-2 !bg-orange-400">정보 입력 필요</Badge>
      </p>
    </div>
  );
}

function NeedTeamMemberListItem({ member }: Props) {
  return (
    <div>
      <p>
        <strong className="text-2xl">{member.name}</strong>
        <span className="ml-2">{member.email}</span>
        <Badge className="ml-2 !bg-red-400">팀 필요</Badge>
      </p>
      <p>
        <span className="text-gray-500">
          {UniversityName[member.university]} {member.college} {member.grade}
          학년
          <br />
          {member.phone}
        </span>
      </p>
    </div>
  );
}

function ActiveMemberListItem({ member }: Props) {
  return (
    <div>
      <p>
        <strong className="text-2xl">{member.name}</strong>
        <span className="ml-2">{member.email}</span>
        <Badge className="ml-2">접수 완료</Badge>
      </p>
      <p>
        <span className="text-gray-500">
          {UniversityName[member.university]} {member.college} {member.grade}
          학년
          <br />
          {member.phone}
        </span>
      </p>
    </div>
  );
}

export default function MemberListItem({ member }: Props) {
  return member.state === MemberState.NEED_VERIFICATION ? (
    <NeedVerificationMemberListItem member={member} />
  ) : member.state === MemberState.NEED_STUDENT_INFO ? (
    <NeedStudentInfoMemberListItem member={member} />
  ) : member.state === MemberState.NEED_TEAM ? (
    <NeedTeamMemberListItem member={member} />
  ) : (
    <ActiveMemberListItem member={member} />
  );
}
