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
import Button from "@khlug/components/Button";

export default function EmailVerificationRequestForm() {
  const [message, setMessage] = useState<string | null>(null);
  const client = useClient();
  const [, setToken] = useToken();
  const [, load] = useRegister();

  const [studentNumber, setStudentNumber] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const validate = () => {
    if (studentNumber.length < 1 || studentNumber.length > 10) {
      setMessage("학번을 정확하게 입력해주세요.");
      return false;
    }

    if (name.length < 1 || name.length > 40) {
      setMessage("이름을 정확하게 입력해주세요.");
      return false;
    }

    const phoneRegex = /^(010)-\d{4}-\d{4}$/;
    if (!phone.match(phoneRegex)) {
      setMessage("전화번호를 정확하게 입력해주세요.");
      return false;
    }

    if (
      !Object.values(EmailDomain)
        .flat()
        .some((domain) => email.endsWith(domain))
    ) {
      setMessage("허용되지 않은 이메일 도메인입니다.");
      return false;
    }

    if (password.length < 10 || password.length > 100) {
      setMessage("비밀번호는 10자 이상, 100자 이하여야 합니다.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validate();
    if (!isValid) return;

    setLoading(true);
    if (loading) return;

    try {
      const response = await client.post<RegisterMemberResponseDto>(
        "/members",
        {
          studentNumber,
          name,
          phone,
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

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {message && <div className="error">{message}</div>}

      <label>참가자 정보 입력</label>
      <div className="description">
        참가자의 본인 확인을 위해 학교 이메일과 비밀번호를 입력해주세요.
        <br />
        참가 신청한 적이 없는 이메일이라면 처음부터 접수 절차가 진행되고, 절차를
        진행하던 중에 어떠한 이유로 중단된 경우에는 이어서 진행할 수 있습니다.
        <br />
        <br />
        비밀번호는 10자 이상 100자 이하여야 합니다.
      </div>

      <label>학번</label>
      <div className="description">숫자만 입력해주세요.</div>
      <div className="input_wrap">
        <input
          type="text"
          value={studentNumber}
          onChange={(e) => setStudentNumber(e.target.value)}
          placeholder="학번"
          pattern="[0-9]+"
          required
        />
      </div>

      <label>이름</label>
      <div className="input_wrap">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
          required
        />
      </div>

      <label>전화번호</label>
      <div className="description">010-0000-0000 형식에 맞춰 입력해주세요.</div>
      <div className="input_wrap">
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="전화번호"
          pattern="010-[0-9]{4}-[0-9]{4}"
          required
        />
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
        등록하기
      </Button>
    </form>
  );
}
