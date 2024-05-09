"use client";

import { useState } from "react";
import { useClient } from "../ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { LoginAsMemberResponseDto } from "@khlug/transport/LoginAsMemberResponseDto";
import Callout from "../Callout/Callout";
import { toast } from "react-toastify";
import Button from "../Button";

type Props = {
  token: string;
};

export default function ResetPasswordForm({ token }: Props) {
  const [password, setPassword] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const client = useClient();

  const validate = () => {
    if (password.length < 10 || password.length > 100) {
      toast.error("비밀번호는 10자 이상, 100자 이하여야 합니다.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    if (loading) return;
    setLoading(true);

    try {
      await client.post<LoginAsMemberResponseDto>("/member/password-reset", {
        token,
        newPassword: password,
      });
      setSubmitted(true);
    } catch (e) {
      toast.error(extractErrorMessage(e));
    }

    setLoading(false);
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
      <Button className="w-full py-2.5 my-4" formSubmit loading={loading}>
        재설정
      </Button>
    </form>
  );
}
