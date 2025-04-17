import Badge from "@khlug/components/Badge/Badge";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { MemberState, UniversityName } from "@khlug/constant";
import { ListMemberResponseMember } from "@khlug/transport/ListMemberResponseDto";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { useState } from "react";
import { useMemberListReloader } from "../MemberListContainer/MemberListContainer";
import Button from "@khlug/components/Button";
import { UpdateMemberMajorFlagRequestDto } from "@khlug/transport/UpdateMemberMajorFlagRequestDto";

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

function NeedTeamMemberListItem({ member }: Props) {
  return (
    <div className="!m-4">
      <p className="!m-0">
        <strong className="text-2xl">{member.name}</strong>
        <span className="ml-2">{member.email}</span>
        <Badge className="ml-2 !bg-red-400">팀 필요</Badge>
      </p>
      <p className="!m-0 !mt-2">
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
      setMessage(null);
      await client.post(`/manager/members/${member.id}/attended`);
      reload();
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  };

  const updateMajorFlag = async (nextFlag: boolean) => {
    try {
      setMessage(null);
      const dto: UpdateMemberMajorFlagRequestDto = {
        isRelevantMajor: nextFlag,
      };
      await client.put(`/manager/members/${member.id}/major-flag`, dto);
      reload();
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  };

  const cancelMemberRegister = async () => {
    const really = confirm(
      "정말로 참가자의 등록을 취소하시겠습니까?\n등록 취소된 참가자는 다시 팀에 소속되면 참가할 수 있습니다."
    );
    if (!really) return;

    try {
      setMessage(null);
      await client.delete(`/manager/members/${member.id}`);
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
        {(!member.college || !member.grade) && (
          <Badge className="ml-2 !bg-orange-300">추가 정보 입력 필요</Badge>
        )}
        {member.attendedAt ? (
          <Badge className="ml-2 !bg-green-600">참석함</Badge>
        ) : (
          <Badge className="ml-2 !bg-gray-400">참가 확인 필요</Badge>
        )}
        {member.isRelevantMajor === null ? (
          <Badge className="ml-2 !bg-gray-400">전공자 확인 필요</Badge>
        ) : member.isRelevantMajor ? (
          <Badge className="ml-2 !bg-amber-400">전공자</Badge>
        ) : (
          <Badge className="ml-2 !bg-amber-400">비전공자</Badge>
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
        {!member.attendedAt && <Button onClick={checkAttend}>참가 확인</Button>}
        {member.isRelevantMajor !== false && (
          <Button className="ml-2" onClick={() => updateMajorFlag(false)}>
            비전공자로
          </Button>
        )}
        {member.isRelevantMajor !== true && (
          <Button className="ml-2" onClick={() => updateMajorFlag(true)}>
            전공자로
          </Button>
        )}
        <Button
          className="ml-2 bg-rose-700 hover:bg-rose-500"
          onClick={() => cancelMemberRegister()}
        >
          등록 취소
        </Button>
      </div>
    </div>
  );
}

export default function MemberListItem({ member }: Props) {
  return member.state === MemberState.NEED_VERIFICATION ? (
    <NeedVerificationMemberListItem member={member} />
  ) : member.state === MemberState.NEED_TEAM ? (
    <NeedTeamMemberListItem member={member} />
  ) : (
    <ActiveMemberListItem member={member} />
  );
}
