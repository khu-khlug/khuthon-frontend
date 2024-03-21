"use client";

import {
  useClient,
  useToken,
} from "@khlug/components/ClientProvider/ClientProvider";
import { EmailDomain } from "@khlug/constant";
import { RegisterMemberResponseDto } from "@khlug/transport/RegisterMemberResponseDto";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { useState } from "react";
import { useRegister } from "../MemberRegisterInfoProvider/MemberRegisterInfoProvider";

export default function EmailVerificationRequestForm() {
  const [message, setMessage] = useState<string | null>(null);
  const client = useClient();
  const [, setToken] = useToken();
  const [, load] = useRegister();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const validate = () => {
    if (!Object.values(EmailDomain).some((domain) => email.endsWith(domain))) {
      setMessage("허용되지 않은 이메일 도메인입니다.");
      return false;
    } else if (password.length < 10 || password.length > 100) {
      setMessage("비밀번호는 10자 이상, 100자 이하여야 합니다.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validate();
    if (!isValid) return;

    try {
      const response = await client.post<RegisterMemberResponseDto>(
        "/members",
        {
          email,
          password,
        }
      );
      const token = response.data.token;
      setToken(token);
      load();
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      {message && <div className="error">{message}</div>}

      <label>참가자 정보 입력</label>
      <div className="description">
        참가자의 본인 확인을 위해 학교 이메일과 비밀번호를 입력해주세요.
        <br />
        참가 신청한 적이 없는 이메일이라면 처음부터 접수 절차가 진행되고, 절차를
        진행하던 중에 어떠한 이유로 중단된 경우에는 이어서 진행할 수 있습니다.
        <br />
        <br />
        현재 허용된 이메일 도메인: khu.ac.kr, ajou.ac.kr
        <br />
        비밀번호는 10자 이상 100자 이하여야 합니다.
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
          <span className="text-lg p-4">등록하기</span>
        </button>
      </div>
    </form>
  );
}
