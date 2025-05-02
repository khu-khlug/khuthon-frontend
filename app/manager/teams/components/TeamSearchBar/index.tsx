import Button from "@khlug/components/Button";
import Dropdown from "@khlug/components/Dropdown";
import TextField from "@khlug/components/TextField";
import { Group } from "@khlug/constant";
import { FormEvent, useEffect, useState } from "react";

export type SearchParams = {
  name?: string;
  group?: Group;
};

type Props = {
  onSearch: (params: SearchParams) => void;
};

const ALL_GROUP = "ALL";
type GroupSearchParams = Group | typeof ALL_GROUP;

export default function TeamSearchBar({ onSearch }: Props) {
  const [keyword, setKeyword] = useState("");
  const [group, setGroup] = useState<GroupSearchParams>(ALL_GROUP);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch({
      name: !!keyword.length ? keyword : undefined,
      group: group === ALL_GROUP ? undefined : group,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-2">
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
          <option value={ALL_GROUP}>전체</option>
          {Object.entries(Group).map(([key, value]) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
        </Dropdown>
      </div>
      <Button className="mt-2" formSubmit>
        검색
      </Button>
    </form>
  );
}
