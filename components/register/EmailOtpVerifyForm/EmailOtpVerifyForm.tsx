"use client";

import { useState } from "react";
import { useRegister } from "../MemberRegisterInfoProvider/MemberRegisterInfoProvider";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";

export default function EmailOtpVerifyForm() {
  const [memberRegisterInfo, load] = useRegister();
  const client = useClient();

  const [message, setMessage] = useState<string | null>(null);
  const [otp, setOtp] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await client.post("/members/verify", { otp });
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
        입력하신 이메일로 도착한 인증코드를 입력해주세요.
        <br />
        이메일을 찾을 수 없는 스팸 메일함을 확인해주세요. 어디에서도 인증코드를
        담은 이메일을 찾을 수 없다면 관리자에게 연락해주세요.
      </div>
      <div className="input_wrap">
        <input type="email" value={memberRegisterInfo?.email} readOnly />
      </div>
      <div className="input_wrap">
        <input
          type="text"
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
