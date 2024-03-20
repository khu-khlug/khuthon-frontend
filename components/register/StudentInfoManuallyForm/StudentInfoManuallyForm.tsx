"use client";

import { useState } from "react";

export default function StudentInfoManuallyForm() {
  const [message, setMessage] = useState<string | null>(null);

  const [studentNumber, setStudentNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [grade, setGrade] = useState<number | null>(null);
  const [major, setMajor] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <form method="post" action="/register/team">
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
        자신의 모든 전공을 작성해주세요. 각 전공은 쉼표(,)로 구분합니다.
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
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="전화번호"
          pattern="010-[0-9]{4}-[0-9]{4}"
          required
        />
      </div>
      <div className="btnArea">
        <button type="submit" className="black w-full">
          <span className="text-lg p-4">입력하기</span>
        </button>
      </div>
    </form>
  );
}
