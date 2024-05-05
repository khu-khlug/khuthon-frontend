"use client";

import { useState } from "react";

import Container from "@khlug/components/Container/Container";
import {
  useClient,
  useToken,
} from "@khlug/components/ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { LoginAsExaminerResponseDto } from "@khlug/transport/LoginAsExaminerResponseDto";

export default function JudgeLoginForm() {
  const client = useClient();
  const [, setToken] = useToken();

  const [message, setMessage] = useState<string | null>(null);
  const [judgeCode, setJudgeCode] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await client.post<LoginAsExaminerResponseDto>(
        "/examiner/login",
        { code: judgeCode }
      );

      setToken(response.data.token);
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        {message && <div className="error">{message}</div>}
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
        <div className="btnArea">
          <button className="black w-full" type="submit">
            <span className="p-4 text-lg">접속</span>
          </button>
        </div>
      </form>
    </Container>
  );
}
