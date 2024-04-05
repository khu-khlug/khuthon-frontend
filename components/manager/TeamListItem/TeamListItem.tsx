import { UniversityName } from "@khlug/constant";
import { ManagerListTeamResponseTeam } from "@khlug/transport/ManagerListTeamResponseDto";

type Props = {
  team: ManagerListTeamResponseTeam;
};

export default function TeamListItem({ team }: Props) {
  return (
    <div className="!m-4">
      <p className="!m-0">
        <strong className="text-2xl">{team.name}</strong>
      </p>
      <p className="!m-0 !mt-2 ">
        <span>{team.idea || "(아이디어 없음)"}</span>
        <br />
        <span>{team.prize || "(수상 정보 없음)"}</span>
      </p>
      <p className="!m-0 !mt-2">
        <ul>
          {team.members.map((member) => (
            <li key={member.id}>
              {member.name}
              <span className="text-gray-400 ml-2">
                {UniversityName[member.university]} {member.college}{" "}
                {member.grade}
                학년 ({member.studentNumber})
              </span>
              <span className="text-gray-400 ml-2">{member.email}</span>
              <span className="text-gray-400 ml-2">{member.phone}</span>
            </li>
          ))}
        </ul>
      </p>
      {team.attachment && (
        <p>
          <a
            href={team.attachment.fileUrl}
            className="no-underline text-gray-400 hover:text-gray-500"
          >
            <i className="xi-download"></i> {team.attachment.fileName}
          </a>
        </p>
      )}
    </div>
  );
}
