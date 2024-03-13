"use client";

import { useState } from "react";

export default function LoginForm() {
  const [message, setMessage] = useState<string | null>(null);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <form method="post" action="/register/team">
      {message && <div className="error">{message}</div>}

      <label>로그인</label>
      <div className="description">
        팀 페이지에 접근하기 위해 로그인을 해주세요.
        <br />
        아직 계정이 없으시다면, <a href="/register">여기</a>에서 먼저 참가
        접수를 진행해주세요.
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
          <span className="text-lg p-4">로그인</span>
        </button>
      </div>
    </form>
  );
}
