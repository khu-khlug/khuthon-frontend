"use client";

import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { useState } from "react";
import { useRegister } from "../MemberRegisterInfoProvider/MemberRegisterInfoProvider";
import Button from "@khlug/components/Button";

export default function StudentInfoWithStuauthForm() {
  const [, load] = useRegister();
  const client = useClient();

  const [message, setMessage] = useState<string | null>(null);
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    if (loading) return;

    try {
      await client.put("/members/student-info/stuauth", {
        id,
        password,
      });
      load();
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {message && <div className="error">{message}</div>}

      <label>학적 정보 입력</label>
      <div className="description">
        참가자의 학적 정보 입력을 위해{" "}
        <a
          href="https://jajudy.khu.ac.kr/stuauth"
          target="_blank"
          style={{ color: "inherit" }}
        >
          중앙동아리연합회 전산 학생 인증 시스템
        </a>
        을 통해서 학부생 인증을 진행합니다.
        <br />
        인포21 종합정보시스템 인증을 통해 학번, 이름, 학년, 소속(학과),
        연락처(전화번호) 정보가 자동으로 입력됩니다.
      </div>
      <div className="input_wrap">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Info21 아이디"
          required
        />
      </div>
      <div className="input_wrap">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Info21 비밀번호"
          required
        />
      </div>
      <Button className="w-full py-2.5 my-4" formSubmit loading={loading}>
        인증하기
      </Button>
    </form>
  );
}
