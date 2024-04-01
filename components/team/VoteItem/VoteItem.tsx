import Subtitle from "@khlug/components/Title/Subtitle";
import classNames from "classnames";
import Link from "next/link";

type Props = {
  team: {
    name: string;
    idea: string | null;
    attachmentUrl: string | null;
  };
  active: boolean;
  onClick: () => void;
};

export default function VoteItem({ team, active, onClick }: Props) {
  const disabled = !team.idea || !team.attachmentUrl;

  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <div
      className={classNames(
        "relative",
        "p-5",
        "transition-all",
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
      <Subtitle>{team.name}</Subtitle>
      {team.idea && team.attachmentUrl ? (
        <>
          <p className="!mx-0">{team.idea}</p>
          <Link
            href={team.attachmentUrl}
            className="!m-0 inline-block bg-gray-500 !text-white !p-2 no-underline"
          >
            발표 자료 보기
          </Link>
        </>
      ) : (
        <>
          <p className="!mx-0 text-gray-300">
            아이디어 또는 발표 자료가 없어 투표할 수 없습니다.
          </p>
          <div className="w-full h-full absolute top-0 left-0 bg-black/10" />
        </>
      )}
    </div>
  );
}
