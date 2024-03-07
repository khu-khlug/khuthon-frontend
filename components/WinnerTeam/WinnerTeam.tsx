import Image from "next/image";

type WinnerTeamProps = {
  thumbnailUrl: string;
  name: string;
  idea: string;
};

export function WinnerTeam({ thumbnailUrl, name, idea }: WinnerTeamProps) {
  return (
    <div>
      <Image
        className="thumbnail"
        src={thumbnailUrl}
        width={100}
        height={100}
        alt={`${name} 팀의 상징 이미지`}
      />
      <p className="text-xl pt-1">{name}</p>
      <p className="text-sm leading-normal text-gray-400">{idea}</p>
    </div>
  );
}
