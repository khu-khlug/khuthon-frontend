"use client";

import { useState } from "react";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import Callout from "@khlug/components/Callout/Callout";
import Link from "next/link";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { AcceptManagerInvitationRequestDto } from "@khlug/transport/AcceptManagerInvitationRequestDto";

type Props = {
  token: string;
};

export default function AcceptManagerInvitationContainer({ token }: Props) {
  const [message, setMessage] = useState<string | null>(null);
  const [password, setPassword] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const client = useClient();

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
      const dto: AcceptManagerInvitationRequestDto = {
        token,
        password,
      };
      await client.post("/manager/invitations/accept", dto);
      setSubmitted(true);
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  };

  return submitted ? (
    <Callout>
      <strong>운영진 초대장을 수락하였습니다.</strong>
      <br />
      <span className="text-xl">
        입력한 비밀번호로{" "}
        <Link className="text-white" href="https://thon.khlug.org/manager">
          여기서
        </Link>{" "}
        로그인해주세요.
      </span>
    </Callout>
  ) : (
    <form onSubmit={handleSubmit}>
      <label>비밀번호 입력</label>
      {message && <div className="error">{message}</div>}
      <div className="description">
        사용할 비밀번호를 입력해주세요.
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
          <span className="text-lg p-4">설정</span>
        </button>
      </div>
    </form>
  );
}
