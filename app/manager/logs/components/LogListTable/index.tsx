import Badge from "@khlug/components/Badge/Badge";
import { LogTypeLabel } from "@khlug/constant/log";
import { ListLogResponseLog } from "@khlug/transport/ListLogResponseDto";
import { formatDate } from "@khlug/util/formaDate";

type Props = {
  logs: ListLogResponseLog[];
};

export default function LogListTable({ logs }: Props) {
  return (
    <table className="mt-4 table-fixed">
      <colgroup>
        <col style={{ width: "15%" }} />
        <col style={{ width: "15%" }} />
        <col style={{ width: "20%" }} />
        <col style={{ width: "50%" }} />
      </colgroup>
      <tbody>
        <tr>
          <th>시간</th>
          <th>타입</th>
          <th>요청자</th>
          <th>메시지</th>
        </tr>
        {logs.map(({ id, type, message, requester, createdAt }) => {
          return (
            <tr key={id} className="break-all">
              <td className="text-center">{formatDate(createdAt)}</td>
              <td>{LogTypeLabel[type]}</td>
              <td>
                {!requester ? (
                  <>
                    <Badge className="!bg-gray-400">알 수 없음</Badge>
                  </>
                ) : (
                  <>
                    {requester.role === "MEMBER" ? (
                      <Badge className="!bg-purple-400">참가자</Badge>
                    ) : requester.role === "EXAMINER" ? (
                      <Badge className="!bg-orange-400">심사위원</Badge>
                    ) : (
                      <Badge>운영진</Badge>
                    )}
                    <span data-id={requester.id} className="ml-2">
                      {requester.name}
                    </span>
                  </>
                )}
              </td>
              <td>{message}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
