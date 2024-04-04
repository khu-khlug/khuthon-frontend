"use client";

import { useState } from "react";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { RequestManagerLoginOtpTokenRequestDto } from "@khlug/transport/RequestManagerLoginOtpTokenRequestDto";
import { RequestManagerLoginOtpTokenResponseDto } from "@khlug/transport/RequestManagerLoginOtpTokenResponseDto";

type Props = {
  onOtpToken: (token: string) => void;
};

export default function ManagerLoginForm({ onOtpToken }: Props) {
  const [message, setMessage] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const client = useClient();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const dto: RequestManagerLoginOtpTokenRequestDto = {
        email,
        password,
      };
      const response =
        await client.post<RequestManagerLoginOtpTokenResponseDto>(
          "/manager/login/request",
          dto
        );
      onOtpToken(response.data.otpToken);
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {message && <div className="error">{message}</div>}

      <label>로그인</label>
      <div className="description">
        운영 페이지에 접근하기 위해 운영진 로그인을 해주세요.
        <br />
        로그인 후에도 페이지 새로 고침 시 보안 상 이유로 재로그인이 필요합니다.
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
