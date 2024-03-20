"use client";

import { useState } from "react";

export default function CreateTeamForm() {
  const [message, setMessage] = useState<string | null>(null);

  const [teamName, setTeamName] = useState<string>("");

  return (
    <form method="post" action="/register/team">
      {message && <div className="error">{message}</div>}

      <label>팀 생성</label>
      <div className="description">
        지금은 초대 받은 팀이 없습니다. 만약 다른 참가자가 만든 팀에 소속될
        예정이라면, <strong>팀을 생성하지 않고 초대를 기다려주세요</strong>.
        <br />
        <br />
        만약 다른 팀에 소속되지 않고 자신의 팀을 만들고 싶다면, 생성할 팀의
        이름을 입력해주세요.
        <br />팀 이름은 이후에도 변경할 수 있습니다.
      </div>

      <label>팀 이름</label>
      <div className="input_wrap">
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          placeholder="팀 이름"
          required
        />
      </div>

      <div className="btnArea">
        <button type="submit" className="black w-full">
          <span className="text-lg p-4">팀 만들기</span>
        </button>
      </div>
    </form>
  );
}
