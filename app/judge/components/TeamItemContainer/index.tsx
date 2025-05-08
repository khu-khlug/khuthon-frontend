"use client";

import JudgingForm from "../JudgingForm/JudgingForm";
import Container from "@khlug/components/Container/Container";
import classNames from "classnames";

import { useDoJudge } from "../JudgeProvider/JudgeProvider";
import Subtitle from "@khlug/components/Title/Subtitle";
import { ListTeamResponseTeam } from "@khlug/transport/ListTeamResponseDto";
import Link from "next/link";
import { useExaminerConfigs } from "../ExaminerConfigProvider";

import styles from "./style.module.css";

type Props = {
  team: ListTeamResponseTeam;
  selectedTeamId: string | null;
  expand: boolean;
  onClick: (teamId: string) => void;
};

export default function TeamItemContainer({
  team,
  selectedTeamId,
  expand,
  onClick,
}: Props) {
  const doJudge = useDoJudge();
  const configs = useExaminerConfigs();

  const canJudge = configs?.judgeEnabled ?? false;
  const resultSubmitted = team.idea && team.attachmentUrl;
  const enabled = canJudge && resultSubmitted;

  const handleClick = () => {
    if (!enabled) return;

    onClick(team.id);
    if (selectedTeamId && selectedTeamId !== team.id) {
      doJudge(selectedTeamId);
    }
  };

  return (
    <div
      className={classNames({
        "cursor-not-allowed": !enabled,
        "cursor-pointer": enabled && !expand,
      })}
      onClick={handleClick}
    >
      <Container className="!p-0">
        <section className="!px-5 !py-8">
          <Subtitle>{team.name}</Subtitle>
          {!canJudge ? (
            <p className="!m-0 !mt-2 text-gray-400">
              지금은 심사할 수 없습니다.
            </p>
          ) : resultSubmitted ? (
            <>
              <p className="!m-0 !mt-2">{team.idea}</p>
              <Link
                href={team.attachmentUrl!}
                className="!m-0 !mt-4 inline-block bg-gray-500 !text-white !p-2 no-underline"
              >
                발표 자료 보기
              </Link>
            </>
          ) : (
            <p className="!m-0 !mt-2 text-gray-400">
              아이디어 또는 발표 자료가 없어 심사할 수 없습니다.
            </p>
          )}
        </section>
        <section
          id="HelloWorld"
          className={classNames("!px-5", styles.expandable, {
            [styles.expand]: expand,
          })}
        >
          <Subtitle>심사</Subtitle>
          <JudgingForm teamId={team.id} />
        </section>
      </Container>
    </div>
  );
}
