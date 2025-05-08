import { useState } from "react";

import Button from "@khlug/components/Button";
import Dropdown from "@khlug/components/Dropdown";
import { Group } from "@khlug/constant";

export type QueryMethod = "VOTE" | "JUDGE";
export type JudgeCriteria = {
  creativity: boolean;
  practicality: boolean;
  suitability: boolean;
  design: boolean;
  completeness: boolean;
};

type Props = {
  onSearch: (
    queryMethod: QueryMethod,
    judgeCriteria: JudgeCriteria | null,
    group: Group | null
  ) => void;
};

const ALL_GROUP = "모든 그룹";

export default function RankingAlignSelector({ onSearch }: Props) {
  const [queryMethod, setQueryMethod] = useState<QueryMethod>("VOTE");
  const [judgeCriteria, setJudgeCriteria] = useState<JudgeCriteria>({
    creativity: true,
    practicality: true,
    suitability: true,
    design: true,
    completeness: true,
  });
  const [group, setGroup] = useState<Group | null>(null);

  const [message, setMessage] = useState<string | null>(null);

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const selectedGroup = value === ALL_GROUP ? null : (value as Group);
    setGroup(selectedGroup);
  };

  const handleClick = () => {
    setMessage(null);
    if (queryMethod === "JUDGE") {
      if (
        !judgeCriteria.creativity &&
        !judgeCriteria.practicality &&
        !judgeCriteria.suitability &&
        !judgeCriteria.design &&
        !judgeCriteria.completeness
      ) {
        setMessage("심사 기준을 하나 이상 선택해주세요.");
        return;
      }
      onSearch(queryMethod, judgeCriteria, group);
    } else if (queryMethod === "VOTE") {
      onSearch(queryMethod, null, group);
    }
  };

  return (
    <div>
      {message && <div className="error">{message}</div>}
      <Dropdown
        onChange={handleDropdownChange}
        value={group ?? ALL_GROUP}
        className="max-w-64"
      >
        <option value={ALL_GROUP}>{ALL_GROUP}</option>
        {Object.entries(Group).map(([key, value]) => (
          <option key={key} value={value}>
            {value}
          </option>
        ))}
      </Dropdown>
      <div className="mt-2">
        <input
          id="QueryMethod-VOTE"
          type="radio"
          name="query"
          onClick={() => setQueryMethod("VOTE")}
          defaultChecked={queryMethod === "VOTE"}
        />
        <label htmlFor="QueryMethod-VOTE">참여자 투표 기준</label>
      </div>
      <div className="mt-4">
        <input
          id="QueryMethod-JUDGE"
          type="radio"
          name="query"
          onClick={() => setQueryMethod("JUDGE")}
          defaultChecked={queryMethod === "JUDGE"}
        />
        <label htmlFor="QueryMethod-JUDGE">심사 기준</label>

        <input
          id="QueryMethod-JUDGE-Creativity"
          type="checkbox"
          className="ml-8"
          onChange={(e) =>
            setJudgeCriteria((prev) => ({
              ...prev,
              creativity: e.target.checked,
            }))
          }
          disabled={queryMethod !== "JUDGE"}
          defaultChecked={judgeCriteria.creativity}
        />
        <label htmlFor="QueryMethod-JUDGE-Creativity">독창성</label>
        <input
          id="QueryMethod-JUDGE-Practicality"
          type="checkbox"
          className="ml-4"
          onChange={(e) =>
            setJudgeCriteria((prev) => ({
              ...prev,
              practicality: e.target.checked,
            }))
          }
          disabled={queryMethod !== "JUDGE"}
          defaultChecked={judgeCriteria.practicality}
        />
        <label htmlFor="QueryMethod-JUDGE-Practicality">효용성</label>
        <input
          id="QueryMethod-JUDGE-suitability"
          type="checkbox"
          className="ml-4"
          onChange={(e) =>
            setJudgeCriteria((prev) => ({
              ...prev,
              suitability: e.target.checked,
            }))
          }
          disabled={queryMethod !== "JUDGE"}
          defaultChecked={judgeCriteria.suitability}
        />
        <label htmlFor="QueryMethod-JUDGE-suitability">적절성</label>
        <input
          id="QueryMethod-JUDGE-Design"
          type="checkbox"
          className="ml-4"
          onChange={(e) =>
            setJudgeCriteria((prev) => ({
              ...prev,
              design: e.target.checked,
            }))
          }
          disabled={queryMethod !== "JUDGE"}
          defaultChecked={judgeCriteria.design}
        />
        <label htmlFor="QueryMethod-JUDGE-Design">디자인</label>
        <input
          id="QueryMethod-JUDGE-Completeness"
          type="checkbox"
          className="ml-4"
          onChange={(e) =>
            setJudgeCriteria((prev) => ({
              ...prev,
              completeness: e.target.checked,
            }))
          }
          disabled={queryMethod !== "JUDGE"}
          defaultChecked={judgeCriteria.completeness}
        />
        <label htmlFor="QueryMethod-JUDGE-Completeness">완성도</label>
      </div>
      <Button className="mt-8" onClick={handleClick}>
        검색
      </Button>
    </div>
  );
}
