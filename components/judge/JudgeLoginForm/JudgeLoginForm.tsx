"use client";

import { useState } from "react";

import Container from "@khlug/components/Container/Container";
import {
  useClient,
  useToken,
} from "@khlug/components/ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { LoginAsExaminerResponseDto } from "@khlug/transport/LoginAsExaminerResponseDto";
import { toast } from "react-toastify";
import Button from "@khlug/components/Button";

export default function JudgeLoginForm() {
  const client = useClient();
  const [, setToken] = useToken();

  const [judgeCode, setJudgeCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    try {
      const response = await client.post<LoginAsExaminerResponseDto>(
        "/examiner/login",
        { code: judgeCode }
      );

      setToken(response.data.token);
    } catch (e) {
      toast.error(extractErrorMessage(e));
    }

    setLoading(false);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label>심사위원 코드</label>
        <div className="description">뒤에서 보고 있는 사람을 주의하세요!</div>
        <div className="input_wrap">
          <input
            type="text"
            value={judgeCode}
            onChange={(e) => setJudgeCode(e.target.value)}
            required
          />
        </div>
        <Button className="w-full py-2.5 my-4" formSubmit loading={loading}>
          접속
        </Button>
      </form>
    </Container>
  );
}
