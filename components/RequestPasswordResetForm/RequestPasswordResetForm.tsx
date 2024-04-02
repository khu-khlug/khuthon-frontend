"use client";

import { useState } from "react";
import { useClient, useToken } from "../ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { LoginAsMemberResponseDto } from "@khlug/transport/LoginAsMemberResponseDto";
import Callout from "../Callout/Callout";

export default function RequestPasswordResetForm() {
  const [message, setMessage] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const client = useClient();
  const [, setToken] = useToken();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await client.post<LoginAsMemberResponseDto>(
        "/member/password-reset/request",
        { email }
      );
      setToken(response.data.token);
      setSubmitted(true);
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  };

  return submitted ? (
    <Callout>
      <strong>비밀번호 재설정 요청이 완료되었습니다.</strong>
      <br />
      <span className="text-xl">
        &apos;{email}&apos;에 도착한 이메일을 확인해주세요!
      </span>
    </Callout>
  ) : (
    <form onSubmit={handleSubmit}>
      {message && <div className="error">{message}</div>}

      <label>비밀번호 재설정</label>
      <div className="description">
        비밀번호를 재설정할 이메일을 입력해주세요.
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
      <div className="btnArea">
        <button type="submit" className="black w-full">
          <span className="text-lg p-4">재설정 요청</span>
        </button>
      </div>
    </form>
  );
}
