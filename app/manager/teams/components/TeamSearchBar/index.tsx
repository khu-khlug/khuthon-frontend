import Button from "@khlug/components/Button";
import Dropdown from "@khlug/components/Dropdown";
import TextField from "@khlug/components/TextField";
import { Group } from "@khlug/constant";
import { FormEvent, useEffect, useState } from "react";

export type SearchParams = {
  name?: string;
  group?: Group;
  confirmed?: boolean;
};

type Props = {
  onSearch: (params: SearchParams) => void;
};

const ALL = "ALL";
type GroupSearchParams = Group | typeof ALL;
type ConfirmedSearchParams = "CONFIRMED" | "NOT_CONFIRMED" | typeof ALL;

export default function TeamSearchBar({ onSearch }: Props) {
  const [keyword, setKeyword] = useState("");
  const [group, setGroup] = useState<GroupSearchParams>(ALL);
  const [confirmed, setConfirmed] = useState<ConfirmedSearchParams>(ALL);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch({
      name: !!keyword.length ? keyword : undefined,
      group: group === ALL ? undefined : group,
      confirmed: confirmed === ALL ? undefined : confirmed === "CONFIRMED",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-2 flex-wrap">
        <TextField
          className="max-w-80 inline-block"
          label="팀 이름"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Dropdown
          className="max-w-32 inline-block"
          label="그룹"
          onChange={(e) => setGroup(e.target.value as GroupSearchParams)}
          value={group}
        >
          <option value={ALL}>전체</option>
          {Object.entries(Group).map(([key, value]) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
        </Dropdown>
        <Dropdown
          className="max-w-64 inline-block"
          label="인원 확정"
          onChange={(e) =>
            setConfirmed(e.target.value as ConfirmedSearchParams)
          }
          value={confirmed}
        >
          <option value={ALL}>전체</option>
          <option value="CONFIRMED">인원 확정됨</option>
          <option value="NOT_CONFIRMED">인원 확정되지 않음</option>
        </Dropdown>
      </div>
      <Button className="mt-2" formSubmit>
        검색
      </Button>
    </form>
  );
}
