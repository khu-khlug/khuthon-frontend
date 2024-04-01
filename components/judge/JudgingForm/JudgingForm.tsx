"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Judge } from "@khlug/types/Judge";
import {
  useDoJudge,
  useJudge,
} from "@khlug/components/judge/JudgeProvider/JudgeProvider";

type Props = {
  teamId: string;
};

export default function JudgingForm({ teamId }: Props) {
  const doJudge = useDoJudge();
  const [judge, setJudge] = useJudge(teamId);

  const [message, setMessage] = useState<string | null>(null);
  const [localJudge, setLocalJudge] = useState(judge);

  const validateValueAndParse = (value: string | number) => {
    const parsed = parseFloat(value.toString());

    if (isNaN(parsed) || parsed < 0 || parsed > 10) {
      return null;
    }

    return Math.floor(parsed * 100) / 100;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (
      validateValueAndParse(localJudge.creativity) === null ||
      validateValueAndParse(localJudge.practicality) === null ||
      validateValueAndParse(localJudge.skill) === null ||
      validateValueAndParse(localJudge.design) === null ||
      validateValueAndParse(localJudge.completeness) === null
    ) {
      setMessage("유효하지 않은 점수값이 있습니다.");
      return;
    }

    setMessage(null);
    doJudge(teamId);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof Judge;
    const value = e.target.value;

    const validatedValue = validateValueAndParse(value);
    setLocalJudge((prev) => ({ ...prev, [name]: value }));
    setJudge(teamId, { ...judge, [name]: validatedValue ?? judge[name] });
  };

  return (
    <form className="score" onSubmit={handleSubmit}>
      {message && <div className="error">{message}</div>}
      <table id="score">
        <tbody>
          <tr className="header">
            <th>
              독창성<span>(10)</span>
            </th>
            <th>
              실용도<span>(10)</span>
            </th>
            <th>
              기술력<span>(10)</span>
            </th>
            <th>
              디자인<span>(10)</span>
            </th>
            <th>
              완성도<span>(10)</span>
            </th>
          </tr>

          <tr className="team">
            <td>
              <div className="input_wrap">
                <input
                  name="creativity"
                  type="number"
                  value={localJudge.creativity}
                  onChange={handleChange}
                />
              </div>
            </td>
            <td>
              <div className="input_wrap">
                <input
                  name="practicality"
                  type="number"
                  value={localJudge.practicality}
                  onChange={handleChange}
                />
              </div>
            </td>
            <td>
              <div className="input_wrap">
                <input
                  name="skill"
                  type="number"
                  value={localJudge.skill}
                  onChange={handleChange}
                />
              </div>
            </td>
            <td>
              <div className="input_wrap">
                <input
                  name="design"
                  type="number"
                  value={localJudge.design}
                  onChange={handleChange}
                />
              </div>
            </td>
            <td>
              <div className="input_wrap">
                <input
                  name="completeness"
                  type="number"
                  value={localJudge.completeness}
                  onChange={handleChange}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="btnArea">
        <button type="submit" className="w-full black">
          <span className="p-4 text-lg">저장</span>
        </button>
      </div>
    </form>
  );
}
