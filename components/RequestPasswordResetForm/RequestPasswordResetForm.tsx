"use client";

import { useState } from "react";
import { useClient, useToken } from "../ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { LoginAsMemberResponseDto } from "@khlug/transport/LoginAsMemberResponseDto";
import Callout from "../Callout/Callout";
import { toast } from "react-toastify";
import Button from "../Button";

export default function RequestPasswordResetForm() {
  const client = useClient();
  const [, setToken] = useToken();

  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    try {
      const response = await client.post<LoginAsMemberResponseDto>(
        "/members/@me/request-password-reset",
        { email }
      );
      setToken(response.data.token);
      setSubmitted(true);
    } catch (e) {
      toast.error(extractErrorMessage(e));
    }

    setLoading(false);
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
      <Button className="w-full py-2.5 my-4" formSubmit loading={loading}>
        재설정 요청
      </Button>
    </form>
  );
}
