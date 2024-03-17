import { University, UniversityName } from "@khlug/constant";

type Props = {
  members: {
    id: string;
    name: string;
    number: string;
    university: University;
    college: string;
    grade: number;
  }[];
};

export default function MemberList({ members }: Props) {
  return (
    <ul>
      {members.map((member) => {
        const universityName = UniversityName[member.university];
        return (
          <li key={member.id}>
            <span>{member.name}</span>
            <span className="text-gray-400 ml-2">{member.number}</span>
            <span className="text-gray-400 ml-2">
              ({universityName} {member.college} {member.grade}학년)
            </span>
          </li>
        );
      })}
    </ul>
  );
}
