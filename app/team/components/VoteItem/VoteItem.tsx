import classNames from "classnames";
import Link from "next/link";

import Subtitle from "@khlug/components/Title/Subtitle";
import { useMyTeam } from "@khlug/app/team/components/MyTeamProvider/MyTeamProvider";

type Props = {
  team: {
    id: string;
    name: string;
    idea: string | null;
    attachmentUrl: string | null;
  };
  active: boolean;
  onClick: () => void;
};

export default function VoteItem({ team, active, onClick }: Props) {
  const [myTeam] = useMyTeam();

  const disabled = team.id === myTeam.id || !team.idea || !team.attachmentUrl;

  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <div
      className={classNames(
        "relative p-5 mt-1 transition-all",
        {
          "bg-white": !active,
          "bg-gray-300": active,
        },
        {
          "cursor-pointer": !disabled,
          "cursor-not-allowed": disabled,
        }
      )}
      onClick={handleClick}
    >
      <Subtitle className="!m-0">{team.name}</Subtitle>
      {team.id === myTeam.id ? (
        <>
          <p className="!mx-0 text-gray-400">내 팀은 투표할 수 없습니다.</p>
          <div className="w-full h-full absolute top-0 left-0 bg-black/10" />
        </>
      ) : !team.idea || !team.attachmentUrl ? (
        <>
          <p className="!mx-0 text-gray-400">
            아이디어 또는 발표 자료가 없어 투표할 수 없습니다.
          </p>
          <div className="w-full h-full absolute top-0 left-0 bg-black/10" />
        </>
      ) : (
        <>
          <p className="!mx-0">{team.idea}</p>
          <Link
            href={team.attachmentUrl}
            className="!m-0 inline-block bg-gray-500 !text-white !p-2 no-underline"
          >
            발표 자료 보기
          </Link>
        </>
      )}
    </div>
  );
}
