"use client";

import { useState } from "react";
import Container from "../../Container/Container";

export default function JudgeLoginForm() {
  const [message, setMessage] = useState<string | null>(null);
  const [judgeCode, setJudgeCode] = useState<string>("");

  return (
    <Container>
      <form method="post" action="{{url('/judge')}}">
        {message && <div className="error">{message}</div>}
        <label>심사위원 코드</label>
        <div className="description">뒤에서 보고 있는 사람을 주의하세요!</div>
        <div className="input_wrap">
          <input
            type="text"
            value={judgeCode}
            onChange={(e) => setJudgeCode(e.target.value)}
            required
          />
        </div>
        <div className="btnArea">
          <button className="black w-full" type="submit">
            <span className="p-4 text-lg">접속</span>
          </button>
        </div>
      </form>
    </Container>
  );
}
