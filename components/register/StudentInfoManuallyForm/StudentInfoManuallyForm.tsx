"use client";

import { useState } from "react";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { useRegister } from "@khlug/components/register/MemberRegisterInfoProvider/MemberRegisterInfoProvider";
import Button from "@khlug/components/Button";

export default function StudentInfoManuallyForm() {
  const client = useClient();
  const [, load] = useRegister();

  const [message, setMessage] = useState<string | null>(null);
  const [studentNumber, setStudentNumber] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [grade, setGrade] = useState<number | null>(null);
  const [major, setMajor] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
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
    if (grade === null || grade < 1 || grade > 10) {
      setMessage("학년을 정확하게 입력해주세요.");
      return false;
    }
    if (major.length < 1 || major.length > 1000) {
      setMessage("전공을 정확하게 입력해주세요.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      await client.put("/members/student-info", {
        studentNumber,
        name,
        college: major,
        grade,
        phone,
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
        참가자의 학적 정보를 정확하게 입력해주세요.
        <br />
        잘못된 정보를 입력했을 때 발생하는 모든 불이익은 쿠러그에서 책임지지
        않습니다.
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

      <label>학년</label>
      <div className="description">숫자만 입력해주세요.</div>
      <div className="input_wrap">
        <input
          type="text"
          value={grade ?? ""}
          onChange={(e) => {
            if (e.target.value === "") {
              setGrade(null);
              return;
            }

            const value = Number(e.target.value);
            if (isNaN(value)) return;
            setGrade(Number(e.target.value));
          }}
          placeholder="학년"
          pattern="[0-9]+"
          required
        />
      </div>

      <label>전공</label>
      <div className="description">
        자신의 모든 전공(본 전공 및 복수 전공)을 작성해주세요. 각 전공은
        쉼표(,)로 구분합니다.
      </div>
      <div className="input_wrap">
        <input
          type="text"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          placeholder="전공"
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
      <Button className="w-full py-2.5 my-4" formSubmit loading={loading}>
        입력하기
      </Button>
    </form>
  );
}
