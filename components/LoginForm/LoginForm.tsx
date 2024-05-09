"use client";

import { useState } from "react";
import { useClient, useToken } from "../ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { LoginAsMemberResponseDto } from "@khlug/transport/LoginAsMemberResponseDto";
import Button from "../Button";
import { toast } from "react-toastify";

export default function LoginForm() {
  const client = useClient();
  const [, setToken] = useToken();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

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
      toast.error(extractErrorMessage(e));
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>로그인</label>
      <div className="description">
        팀 페이지에 접근하기 위해 로그인을 해주세요.
        <br />
        아직 계정이 없으시다면,{" "}
        <a href="/register" className="text-black">
          여기
        </a>
        에서 먼저 참가 접수를 진행해주세요.
        <br />
        비밀번호가 기억이 나지 않으면,{" "}
        <a href="/request-reset-password" className="text-black">
          여기
        </a>
        에서 비밀번호를 재설정해주세요.
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
      <Button className="w-full py-2.5 my-4" formSubmit loading={loading}>
        로그인
      </Button>
    </form>
  );
}
