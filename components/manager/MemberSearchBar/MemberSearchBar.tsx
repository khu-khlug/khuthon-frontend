import { MemberState } from "@khlug/constant";
import { FormEvent, useState } from "react";

export type SearchParams = {
  studentNumber?: string;
  name?: string;
  email?: string;
  phone?: string;
  state?: MemberState;
};

type Props = {
  onSearch: (params: SearchParams) => void;
};

type KeywordType = "StudentNumber" | "Name" | "Email" | "PhoneNumber";
const notSelected = "NotSelected" as const;

export function MemberSearchBar({ onSearch }: Props) {
  const [state, setState] = useState<MemberState | null>(null);
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
    });
  };

  const handleChangeState = (state: string) => {
    if (state === notSelected) {
      setState(null);
    } else {
      setState(state as MemberState);
    }
  };

  const handleChangeKeywordType = (keywordType: KeywordType) => {
    setKeywordType(keywordType);
    setKeyword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        defaultValue={"NotSelected"}
        onChange={(e) => handleChangeState(e.target.value)}
      >
        <option value="NotSelected">선택 안 함</option>
        <option value="NEED_VERIFICATION">이메일 인증 필요</option>
        <option value="NEED_STUDENT_INFO">정보 입력 필요</option>
        <option value="NEED_TEAM">팀 필요</option>
        <option value="ACTIVE">접수 완료</option>
      </select>

      <select
        defaultValue={keywordType}
        onChange={(e) => handleChangeKeywordType(e.target.value as KeywordType)}
      >
        <option value="StudentNumber">학번</option>
        <option value="Name">이름</option>
        <option value="Email">이메일</option>
        <option value="PhoneNumber">전화번호</option>
      </select>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />

      <button type="submit">검색</button>
    </form>
  );
}
