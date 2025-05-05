import { useState, useCallback, useEffect } from "react";

import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import Container from "@khlug/components/Container/Container";
import Subtitle from "@khlug/components/Title/Subtitle";
import { useEvent } from "@khlug/components/EventProvider/EventProvider";

import ExaminerItem from "../ExaminerItem";
import CreateExaminerForm from "../CreateExaminerForm";

import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { ListExaminerResponseDto } from "@khlug/transport/ListExaminerResponseDto";
import { CreateExaminerRequestDto } from "@khlug/transport/CreateExaminerRequestDto";
import { Group } from "@khlug/constant";

export default function ExaminerManageContainer() {
  const client = useClient();

  const [examinerList, setExaminerList] =
    useState<ListExaminerResponseDto | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const fetchExaminerList = useCallback(async () => {
    try {
      const response = await client.get<ListExaminerResponseDto>(
        "/manager/examiners"
      );
      setExaminerList(response.data);
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  }, [client]);

  const handleRemove = useCallback(
    async (examinerId: string) => {
      setMessage(null);
      try {
        await client.delete(`/manager/examiners/${examinerId}`);
        fetchExaminerList();
      } catch (e) {
        setMessage(extractErrorMessage(e));
      }
    },
    [client, fetchExaminerList]
  );

  const handleCreate = useCallback(
    async (name: string, code: string, group: Group) => {
      setMessage(null);
      try {
        const dto: CreateExaminerRequestDto = { name, code, group };
        await client.post("/manager/examiners", dto);
        fetchExaminerList();
      } catch (e) {
        setMessage(extractErrorMessage(e));
      }
    },
    [client, fetchExaminerList]
  );

  useEffect(() => {
    fetchExaminerList();
  }, [fetchExaminerList]);

  return (
    <Container className="!bg-white !bg-none">
      <Subtitle>심사위원 목록</Subtitle>
      <div className="text-gray-400 text-sm">
        올해 심사위원만 목록에 나타납니다.
      </div>
      {message && <div className="error">{message}</div>}
      {examinerList &&
        (examinerList.examiners.length === 0 ? (
          <div className="error">심사위원이 없습니다.</div>
        ) : (
          examinerList.examiners.map((examiner) => (
            <ExaminerItem
              key={examiner.id}
              examiner={examiner}
              onRemove={() => handleRemove(examiner.id)}
            />
          ))
        ))}
      <Subtitle>심사위원 추가하기</Subtitle>
      <CreateExaminerForm onCreate={handleCreate} />
    </Container>
  );
}
