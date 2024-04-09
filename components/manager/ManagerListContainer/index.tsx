import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import Container from "@khlug/components/Container/Container";
import Subtitle from "@khlug/components/Title/Subtitle";
import { ListManagerResponseDto } from "@khlug/transport/ListManagerResponseDto";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { useCallback, useEffect, useState } from "react";
import ManagerListItem from "../ManagerListItem";

export default function ManagerListContainer() {
  const client = useClient();

  const [managerList, setManagerList] = useState<ListManagerResponseDto | null>(
    null
  );
  const [message, setMessage] = useState<string | null>(null);

  const fetchManagerList = useCallback(async () => {
    try {
      const response = await client.get<ListManagerResponseDto>(
        "/manager/managers"
      );
      setManagerList(response.data);
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  }, [client]);

  useEffect(() => {
    fetchManagerList();
  }, [fetchManagerList]);

  return (
    <Container>
      <Subtitle>운영진 목록</Subtitle>
      {message && <div className="error">{message}</div>}
      {managerList &&
        (managerList.managers.length === 0 ? (
          <div className="error">운영진이 없습니다.</div>
        ) : (
          managerList.managers.map((manager) => (
            <ManagerListItem key={manager.id} manager={manager} />
          ))
        ))}
    </Container>
  );
}
