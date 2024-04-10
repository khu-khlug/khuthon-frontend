import Badge from "@khlug/components/Badge/Badge";
import { ListLogResponseLog } from "@khlug/transport/ListLogResponseDto";
import { formatDate } from "@khlug/util/formaDate";

type Props = {
  logs: ListLogResponseLog[];
};

type MemberUser = {
  role: "MEMBER";
  memberId: string;
};
type ExaminerUser = {
  role: "EXAMINER";
  examinerId: string;
};
type ManagerUser = {
  role: "MANAGER";
  managerId: string;
};
type User = MemberUser | ExaminerUser | ManagerUser;

function parseUser(requester: string | null): User | null {
  if (!requester) {
    return null;
  }

  try {
    const requesterObj = JSON.parse(requester);
    if (requesterObj.role === "MEMBER") {
      return {
        role: "MEMBER",
        memberId: requesterObj.memberId,
      };
    } else if (requesterObj.role === "EXAMINER") {
      return {
        role: "EXAMINER",
        examinerId: requesterObj.examinerId,
      };
    } else if (requesterObj.role === "MANAGER") {
      return {
        role: "MANAGER",
        managerId: requesterObj.managerId,
      };
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
}

export default function LogListTable({ logs }: Props) {
  return (
    <table className="mt-4 table-fixed">
      <colgroup>
        <col style={{ width: "15%" }} />
        <col style={{ width: "25%" }} />
        <col style={{ width: "20%" }} />
        <col style={{ width: "40%" }} />
      </colgroup>
      <tbody>
        <tr>
          <th>시간</th>
          <th>타입</th>
          <th>요청자</th>
          <th>메시지</th>
        </tr>
        {logs.map((log) => {
          const requester = parseUser(log.requester);
          return (
            <tr key={log.id} className="break-all">
              <td className="text-center">{formatDate(log.createdAt)}</td>
              <td className="text-center">{log.type}</td>
              <td className="text-center">
                {!requester ? (
                  <>
                    <Badge className="!bg-gray-400">알 수 없음</Badge>
                  </>
                ) : requester.role === "MEMBER" ? (
                  <>
                    <Badge className="!bg-purple-400">참가자</Badge>
                    <span className="ml-2">{requester.memberId}</span>
                  </>
                ) : requester.role === "EXAMINER" ? (
                  <>
                    <Badge className="!bg-orange-400">심사위원</Badge>
                    <span className="ml-2">{requester.examinerId}</span>
                  </>
                ) : (
                  <>
                    <Badge>운영진</Badge>
                    <span className="ml-2">{requester.managerId}</span>
                  </>
                )}
              </td>
              <td>{log.message}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
