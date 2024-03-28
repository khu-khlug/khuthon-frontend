"use client";

import { useState } from "react";
import { useClient, useToken } from "../ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { LoginAsMemberResponseDto } from "@khlug/transport/LoginAsMemberResponseDto";

export default function LoginForm() {
  const [message, setMessage] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const client = useClient();
  const [, setToken] = useToken();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await client.post<LoginAsMemberResponseDto>(
        "/member/login",
        {
          email,
          password,
        }
      );
      setToken(response.data.token);
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      {message && <div className="error">{message}</div>}

      <label>로그인</label>
      <div className="description">
        팀 페이지에 접근하기 위해 로그인을 해주세요.
        <br />
        아직 계정이 없으시다면, <a href="/register">여기</a>에서 먼저 참가
        접수를 진행해주세요.
      </div>
      <div className="input_wrap">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
          required
        />
      </div>
      <div className="input_wrap">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
          required
        />
      </div>
      <div className="btnArea">
        <button type="submit" className="black w-full">
          <span className="text-lg p-4">로그인</span>
        </button>
      </div>
    </form>
  );
}
