import { MemberState, University } from "@khlug/constant";
import Divider from "../../Divider/Divider";
import JudgingForm from "../JudgingForm/JudgingForm";
import Container from "../../Container/Container";
import MemberList from "../MemberList/MemberList";
import classNames from "classnames";

import "./TeamItemContainer.css";

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
  judge: {
    creativity: number;
    practicality: number;
    skill: number;
    design: number;
    completeness: number;
  };
  event: {
    judgeRange: "BEFORE" | "AFTER" | "BETWEEN";
  };
  expand: boolean;
  onClick: (teamId: string) => void;
};

export default function TeamItemContainer({
  event,
  team,
  judge,
  expand,
  onClick,
}: Props) {
  return (
    <div
      className={classNames({ "cursor-pointer": !expand })}
      onClick={() => onClick(team.id)}
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
          <h4 className="mt-4">심사</h4>
          <JudgingForm event={event} team={team} judge={judge} />
        </div>
      </Container>
    </div>
  );
}
