"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Judge } from "@khlug/types/Judge";
import { useJudgeListener } from "@khlug/components/judge/JudgeListenerProvider/JudgeListenerProvider";

type JudgeFormValue = { [K in keyof Judge]: string };

type Props = {
  event: {
    judgeRange: "BEFORE" | "AFTER" | "BETWEEN";
  };
  team: {
    id: string;
  };
  judge: Judge;
};

export default function JudgingForm({ event, team, judge }: Props) {
  const onJudge = useJudgeListener();

  const { register, handleSubmit } = useForm<JudgeFormValue>({
    values: {
      creativity: judge.creativity.toString(),
      practicality: judge.practicality.toString(),
      skill: judge.skill.toString(),
      design: judge.design.toString(),
      completeness: judge.completeness.toString(),
    },
  });
  const [message, setMessage] = useState<string | null>(null);

  const validateValueAndParse = (value: string) => {
    const parsed = parseFloat(value);

    if (isNaN(parsed) || parsed < 0 || parsed > 10) {
      return null;
    }

    return Math.floor(parsed * 100) / 100;
  };

  const validate = (judge: JudgeFormValue) => {
    const creativity = validateValueAndParse(judge.creativity);
    const practicality = validateValueAndParse(judge.practicality);
    const skill = validateValueAndParse(judge.skill);
    const design = validateValueAndParse(judge.design);
    const completeness = validateValueAndParse(judge.completeness);

    if (
      creativity === null ||
      practicality === null ||
      skill === null ||
      design === null ||
      completeness === null
    ) {
      setMessage("점수는 0점부터 10점까지 입력해주세요.");
      return;
    }

    setMessage(null);
    onJudge(team.id, {
      creativity,
      practicality,
      skill,
      design,
      completeness,
    });
  };

  return (
    event.judgeRange === "BETWEEN" && (
      <form className="score" onSubmit={handleSubmit(validate)}>
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
                  <input type="string" {...register("creativity")} />
                </div>
              </td>
              <td>
                <div className="input_wrap">
                  <input type="string" {...register("practicality")} />
                </div>
              </td>
              <td>
                <div className="input_wrap">
                  <input type="string" {...register("skill")} />
                </div>
              </td>
              <td>
                <div className="input_wrap">
                  <input type="string" {...register("design")} />
                </div>
              </td>
              <td>
                <div className="input_wrap">
                  <input type="string" {...register("completeness")} />
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
    )
  );
}
