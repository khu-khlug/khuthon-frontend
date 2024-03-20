"use client";

import { useState } from "react";
import { useRegister } from "../MemberRegisterInfoProvider/MemberRegisterInfoProvider";

export default function EmailOtpVerifyForm() {
  const [message, setMessage] = useState<string | null>(null);
  const [memberRegisterInfo, load] = useRegister();

  const [otp, setOtp] = useState<string>("");

  return (
    <form method="post" action="/register/team">
      {message && <div className="error">{message}</div>}

      <label>참가자 정보 입력</label>
      <div className="description">
        입력하신 이메일로 도착한 인증코드를 입력해주세요.
        <br />
        이메일을 찾을 수 없는 스팸 메일함을 확인해주세요. 어디에서도 인증코드를
        담은 이메일을 찾을 수 없다면 관리자에게 연락해주세요.
      </div>
      <div className="input_wrap">
        <input type="email" value={memberRegisterInfo?.email} disabled />
      </div>
      <div className="input_wrap">
        <input
          type="password"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="OTP"
          required
        />
      </div>
      <div className="btnArea">
        <button type="submit" className="black w-full">
          <span className="text-lg p-4">인증하기</span>
        </button>
      </div>
    </form>
  );
}
