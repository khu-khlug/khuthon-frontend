import Badge from "@khlug/components/Badge/Badge";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { MemberState, UniversityName } from "@khlug/constant";
import { ListMemberResponseMember } from "@khlug/transport/ListMemberResponseDto";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { useState } from "react";
import { useMemberListReloader } from "../MemberListContainer/MemberListContainer";

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
          학년 ({member.studentNumber})
          <br />
          {member.phone}
        </span>
      </p>
    </div>
  );
}

function ActiveMemberListItem({ member }: Props) {
  const client = useClient();
  const reload = useMemberListReloader();

  const [message, setMessage] = useState<string | null>(null);

  const checkAttend = async () => {
    try {
      await client.post(`/manager/members/${member.id}/attended`);
      reload();
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  };

  return (
    <div className="!m-4">
      {message && <div className="error">{message}</div>}
      <p className="!m-0">
        <strong className="text-2xl">{member.name}</strong>
        <span className="ml-2">{member.email}</span>
        <Badge className="ml-2">접수 완료</Badge>
        {member.attendedAt && (
          <Badge className="ml-2 !bg-green-600">참석 확인</Badge>
        )}
      </p>
      <p className="!m-0 !mt-2">
        <span className="text-gray-500">
          {UniversityName[member.university]} {member.college} {member.grade}
          학년 ({member.studentNumber})
          <br />
          {member.phone}
        </span>
      </p>
      <div className="flex justify-end !mt-2">
        <button
          className="border-none bg-gray-700 hover:bg-gray-500 transition-colors text-white text-base px-3 py-1.5 cursor-pointer"
          onClick={checkAttend}
        >
          참가 확인
        </button>
      </div>
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
