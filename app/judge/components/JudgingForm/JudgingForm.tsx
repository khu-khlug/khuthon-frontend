"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Judge } from "@khlug/types/Judge";
import {
  useDoJudge,
  useJudge,
} from "@khlug/app/judge/components/JudgeProvider/JudgeProvider";
import { toast } from "react-toastify";
import Button from "@khlug/components/Button";

type Props = {
  teamId: string;
};

export default function JudgingForm({ teamId }: Props) {
  const doJudge = useDoJudge();
  const [judge, setJudge] = useJudge(teamId);

  const [loading, setLoading] = useState(false);

  const normalizeScore = (value: string | number) => {
    const parsed = parseFloat(value.toString());

    if (isNaN(parsed)) {
      return 0;
    }

    if (parsed < 0) {
      return 0;
    }

    if (parsed > 10) {
      return 10;
    }

    return Math.floor(parsed * 100) / 100;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      normalizeScore(judge.creativity) === null ||
      normalizeScore(judge.practicality) === null ||
      normalizeScore(judge.suitability) === null ||
      normalizeScore(judge.design) === null ||
      normalizeScore(judge.completeness) === null
    ) {
      toast.error("유효하지 않은 점수값이 있습니다.");
      return;
    }

    if (loading) return;

    setLoading(true);
    await doJudge(teamId);
    setLoading(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof Judge;
    const normalizedScore = normalizeScore(e.target.value);

    setJudge(teamId, { ...judge, [name]: normalizedScore });
  };

  return (
    <form className="score" onSubmit={handleSubmit}>
      <table id="score">
        <tbody>
          <tr className="header">
            <th>
              독창성<span>(10)</span>
            </th>
            <th>
              효용성<span>(10)</span>
            </th>
            <th>
              적절성<span>(10)</span>
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
                  value={judge.creativity}
                  onChange={handleChange}
                />
              </div>
            </td>
            <td>
              <div className="input_wrap">
                <input
                  name="practicality"
                  type="number"
                  value={judge.practicality}
                  onChange={handleChange}
                />
              </div>
            </td>
            <td>
              <div className="input_wrap">
                <input
                  name="suitability"
                  type="number"
                  value={judge.suitability}
                  onChange={handleChange}
                />
              </div>
            </td>
            <td>
              <div className="input_wrap">
                <input
                  name="design"
                  type="number"
                  value={judge.design}
                  onChange={handleChange}
                />
              </div>
            </td>
            <td>
              <div className="input_wrap">
                <input
                  name="completeness"
                  type="number"
                  value={judge.completeness}
                  onChange={handleChange}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Button className="w-full py-2.5 my-4" formSubmit loading={loading}>
        저장
      </Button>
    </form>
  );
}
