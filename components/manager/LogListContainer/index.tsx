import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import Container from "@khlug/components/Container/Container";
import Pager from "@khlug/components/Pager/Pager";
import Subtitle from "@khlug/components/Title/Subtitle";
import { LogType } from "@khlug/constant";
import { ListLogRequestDto } from "@khlug/transport/ListLogRequestDto";
import { ListLogResponseDto } from "@khlug/transport/ListLogResponseDto";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { useCallback, useEffect, useState } from "react";
import LogListTable from "../LogListTable";

const notSelected = "NotSelected" as const;

export default function LogListContainer() {
  const client = useClient();
  const limit = 100;

  const [message, setMessage] = useState<string | null>(null);
  const [type, setType] = useState<LogType | null>(null);
  const [page, setPage] = useState<number>(1);
  const [logList, setLogList] = useState<ListLogResponseDto | null>(null);

  const fetchMemberList = useCallback(async () => {
    try {
      const dto: ListLogRequestDto = {
        limit,
        offset: (page - 1) * limit,
        type: type ?? undefined,
      };
      const response = await client.get<ListLogResponseDto>("/manager/logs", {
        params: dto,
      });
      setLogList(response.data);
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  }, [client, page, type]);

  const handleChangeState = (type: string) => {
    if (type === notSelected) {
      setType(null);
    } else {
      setType(type as LogType);
    }
    setPage(1);
  };

  useEffect(() => {
    fetchMemberList();
  }, [fetchMemberList]);

  return (
    <Container>
      <Subtitle>로그</Subtitle>
      {message && <div className="error">{message}</div>}
      <div>
        <select
          defaultValue={"NotSelected"}
          onChange={(e) => handleChangeState(e.target.value)}
        >
          <option value="NotSelected">선택 안 함</option>
          {Object.values(LogType).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        {logList && (
          <>
            <LogListTable logs={logList.logs} />
            <Pager
              current={page}
              maxPage={Math.ceil(logList.count / limit)}
              onSelect={setPage}
            />
          </>
        )}
      </div>
    </Container>
  );
}
