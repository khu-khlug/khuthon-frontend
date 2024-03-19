"use client";

import { MemberState, University } from "@khlug/constant";
import Divider from "../../Divider/Divider";
import JudgingForm from "../JudgingForm/JudgingForm";
import Container from "../../Container/Container";
import MemberList from "../MemberList/MemberList";
import classNames from "classnames";

import "./TeamItemContainer.css";
import { useEvent } from "@khlug/components/EventProvider/EventProvider";
import { useDoJudge, useJudge } from "../JudgeProvider/JudgeProvider";

type Props = {
  team: {
    id: string;
    name: string;
    idea: string;
    members: {
      id: string;
      state: MemberState;
      name: string;
      phone: string;
      number: string;
      university: University;
      college: string;
      grade: number;
    }[];
    file: {
      name: string;
      url: string;
    } | null;
  };
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

  const handleClick = () => {
    onClick(team.id);

    console.log(selectedTeamId, team.id);
    if (selectedTeamId && selectedTeamId !== team.id) {
      doJudge(selectedTeamId);
    }
  };

  return (
    <div
      className={classNames({ "cursor-pointer": !expand })}
      onClick={handleClick}
    >
      <Container>
        <h4 className="mt-4">{team.name}</h4>
        <p>{team.idea}</p>
        <div
          id="HelloWorld"
          className={classNames("TeamItemContainer__Expandable", {
            expand: expand,
          })}
        >
          <Divider />
          <MemberList members={team.members} />
          {team.file && (
            <>
              <Divider />
              <p>
                <a
                  href={team.file.url}
                  className="no-underline text-gray-400 hover:text-gray-500"
                >
                  <i className="xi-download"></i> {team.file.name}
                </a>
              </p>
            </>
          )}
          {/* {event.judgeRange === "BETWEEN" && ( */}
          <>
            <h4 className="mt-4">심사</h4>
            <JudgingForm team={team} />
          </>
          {/* )} */}
        </div>
      </Container>
    </div>
  );
}
