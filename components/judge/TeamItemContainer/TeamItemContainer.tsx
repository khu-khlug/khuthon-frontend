"use client";

import JudgingForm from "../JudgingForm/JudgingForm";
import Container from "../../Container/Container";
import classNames from "classnames";

import "./TeamItemContainer.css";
import { useEvent } from "@khlug/components/EventProvider/EventProvider";
import { useDoJudge } from "../JudgeProvider/JudgeProvider";
import Subtitle from "@khlug/components/Title/Subtitle";
import { ListTeamResponseTeam } from "@khlug/transport/ListTeamResponseDto";
import Link from "next/link";

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
  const event = useEvent();
  const doJudge = useDoJudge();

  const enabled = team.idea && team.attachmentUrl;

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
          {event.judgeRange === "BEFORE" ? (
            <p className="!m-0 !mt-2 text-gray-400">
              아직 심사 시간이 아닙니다.
            </p>
          ) : enabled ? (
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
          className={classNames("!px-5", "TeamItemContainer__Expandable", {
            expand: expand,
          })}
        >
          {event.judgeRange === "BETWEEN" && (
            <>
              <Subtitle>심사</Subtitle>
              <JudgingForm teamId={team.id} />
            </>
          )}
        </section>
      </Container>
    </div>
  );
}
