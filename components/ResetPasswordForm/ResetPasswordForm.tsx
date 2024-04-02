"use client";

import { useState } from "react";
import { useClient, useToken } from "../ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { LoginAsMemberResponseDto } from "@khlug/transport/LoginAsMemberResponseDto";
import Callout from "../Callout/Callout";

type Props = {
  token: string;
};

export default function ResetPasswordForm({ token }: Props) {
  const [message, setMessage] = useState<string | null>(null);
  const [password, setPassword] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const client = useClient();
  const [, setToken] = useToken();

  const validate = () => {
    if (password.length < 10 || password.length > 100) {
      setMessage("비밀번호는 10자 이상, 100자 이하여야 합니다.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await client.post<LoginAsMemberResponseDto>(
        "/member/password-reset",
        { token, newPassword: password }
      );
      setToken(response.data.token);
      setSubmitted(true);
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  };

  return submitted ? (
    <Callout>
      <strong>비밀번호 재설정이 완료되었습니다.</strong>
      <br />
      <span className="text-xl">바꾼 비밀번호로 다시 로그인해주세요.</span>
    </Callout>
  ) : (
    <form onSubmit={handleSubmit}>
      <label>비밀번호 재설정</label>
      {message && <div className="error">{message}</div>}
      <div className="description">
        재설정할 비밀번호를 입력해주세요.
        <br />
        비밀번호는 10자 이상 100자 이하여야 합니다.
      </div>
      <div className="input_wrap">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="새로운 비밀번호 입력"
          required
        />
      </div>
      <div className="btnArea">
        <button type="submit" className="black w-full">
          <span className="text-lg p-4">재설정</span>
        </button>
      </div>
    </form>
  );
}
