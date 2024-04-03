"use client";

import { useState } from "react";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import {
  useClient,
  useToken,
} from "@khlug/components/ClientProvider/ClientProvider";
import { LoginAsManagerRequestDto } from "@khlug/transport/LoginAsManagerRequestDto";
import { LoginAsManagerResponseDto } from "@khlug/transport/LoginAsManagerResponseDto";

type Props = {
  otpToken: string;
};

export default function ManagerOtpForm({ otpToken }: Props) {
  const [message, setMessage] = useState<string | null>(null);
  const [otp, setOtp] = useState<string>("");

  const client = useClient();
  const [, setToken] = useToken();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const dto: LoginAsManagerRequestDto = {
        otpToken,
        otp,
      };
      const response = await client.post<LoginAsManagerResponseDto>(
        "/manager/login",
        dto
      );

      // 보안을 위해 새로고침시 토큰이 사라지도록 persist 옵션을 false로 설정
      setToken(response.data.token, { persist: false });
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {message && <div className="error">{message}</div>}

      <label>로그인</label>
      <div className="description">
        이메일로 전송된 인증 코드를 입력해주세요.
      </div>
      <div className="input_wrap">
        <input
          type="string"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="인증 코드"
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
