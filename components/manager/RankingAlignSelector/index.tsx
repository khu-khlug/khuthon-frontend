import Button from "@khlug/components/Button";
import { useState } from "react";

export type QueryMethod = "VOTE" | "JUDGE";
export type JudgeCriteria = {
  creativity: boolean;
  practicality: boolean;
  skill: boolean;
  design: boolean;
  completeness: boolean;
};

type Props = {
  onSearch: (
    queryMethod: QueryMethod,
    judgeCriteria: JudgeCriteria | null
  ) => void;
};

export default function RankingAlignSelector({ onSearch }: Props) {
  const [queryMethod, setQueryMethod] = useState<QueryMethod>("VOTE");
  const [judgeCriteria, setJudgeCriteria] = useState<JudgeCriteria>({
    creativity: true,
    practicality: true,
    skill: true,
    design: true,
    completeness: true,
  });
  const [message, setMessage] = useState<string | null>(null);

  const handleClick = () => {
    setMessage(null);
    if (queryMethod === "JUDGE") {
      if (
        !judgeCriteria.creativity &&
        !judgeCriteria.practicality &&
        !judgeCriteria.skill &&
        !judgeCriteria.design &&
        !judgeCriteria.completeness
      ) {
        setMessage("심사 기준을 하나 이상 선택해주세요.");
        return;
      }
      onSearch(queryMethod, judgeCriteria);
    } else if (queryMethod === "VOTE") {
      onSearch(queryMethod, null);
    }
  };

  return (
    <div>
      {message && <div className="error">{message}</div>}
      <div>
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
        <label htmlFor="QueryMethod-JUDGE-Practicality">실용도</label>
        <input
          id="QueryMethod-JUDGE-Skill"
          type="checkbox"
          className="ml-4"
          onChange={(e) =>
            setJudgeCriteria((prev) => ({
              ...prev,
              skill: e.target.checked,
            }))
          }
          disabled={queryMethod !== "JUDGE"}
          defaultChecked={judgeCriteria.skill}
        />
        <label htmlFor="QueryMethod-JUDGE-Skill">기술력</label>
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
