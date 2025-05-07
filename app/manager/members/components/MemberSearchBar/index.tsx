import { FormEvent, useState } from "react";

import Dropdown from "@khlug/components/Dropdown";
import TextField from "@khlug/components/TextField";

import { Group } from "@khlug/constant";
import Button from "@khlug/components/Button";

export type MemberStateForQuery =
  | "NEED_VERIFICATION"
  | "NEED_TEAM"
  | "NEED_CONFIRM"
  | "CONFIRMED";

export type SearchParams = {
  studentNumber?: string;
  name?: string;
  email?: string;
  phone?: string;
  state?: MemberStateForQuery;
  group?: Group;
};

type Props = {
  onSearch: (params: SearchParams) => void;
};

type KeywordType = "StudentNumber" | "Name" | "Email" | "PhoneNumber";
const NotSelected = "NotSelected" as const;

type GroupSearchParams = Group | typeof NotSelected;
type StateSearchParams = MemberStateForQuery | typeof NotSelected;

export default function MemberSearchBar({ onSearch }: Props) {
  const [group, setGroup] = useState<Group | null>(null);
  const [state, setState] = useState<MemberStateForQuery | null>(null);
  const [keywordType, setKeywordType] = useState<KeywordType>("StudentNumber");
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch({
      studentNumber:
        keywordType === "StudentNumber" && !!keyword.length
          ? keyword
          : undefined,
      name: keywordType === "Name" && !!keyword.length ? keyword : undefined,
      email: keywordType === "Email" && !!keyword.length ? keyword : undefined,
      phone:
        keywordType === "PhoneNumber" && !!keyword.length ? keyword : undefined,
      state: state ?? undefined,
      group: group ?? undefined,
    });
  };

  const handleChangeGroup = (group: GroupSearchParams) => {
    if (group === NotSelected) {
      setGroup(null);
    } else {
      setGroup(group as Group);
    }
  };

  const handleChangeState = (state: StateSearchParams) => {
    if (state === NotSelected) {
      setState(null);
    } else {
      setState(state as MemberStateForQuery);
    }
  };

  const handleChangeKeywordType = (keywordType: KeywordType) => {
    setKeywordType(keywordType);
    setKeyword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-2 flex-wrap">
        <Dropdown
          label="그룹"
          className="max-w-36 inline-block"
          defaultValue={NotSelected}
          onChange={(e) =>
            handleChangeGroup(e.target.value as GroupSearchParams)
          }
        >
          <option value={NotSelected}>선택 안 함</option>
          {Object.entries(Group).map(([key, value]) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
        </Dropdown>

        <Dropdown
          label="참가자 상태"
          className="max-w-48 inline-block"
          defaultValue={NotSelected}
          onChange={(e) =>
            handleChangeState(e.target.value as StateSearchParams)
          }
        >
          <option value={NotSelected}>선택 안 함</option>
          <option value="NEED_VERIFICATION">이메일 인증 필요</option>
          <option value="NEED_TEAM">팀 필요</option>
          <option value="NEED_CONFIRM">인원 확정 필요</option>
          <option value="CONFIRMED">접수 완료</option>
        </Dropdown>

        <Dropdown
          label="검색어 유형"
          className="max-w-36 inline-block"
          defaultValue={keywordType}
          onChange={(e) =>
            handleChangeKeywordType(e.target.value as KeywordType)
          }
        >
          <option value="StudentNumber">학번</option>
          <option value="Name">이름</option>
          <option value="Email">이메일</option>
          <option value="PhoneNumber">전화번호</option>
        </Dropdown>

        <TextField
          label="검색어"
          className="max-w-96 inline-block"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>

      <Button className="mt-2" formSubmit>
        검색
      </Button>
    </form>
  );
}
