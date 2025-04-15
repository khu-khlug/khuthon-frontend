"use client";

import { useState } from "react";
import { useRegister } from "../MemberRegisterInfoProvider/MemberRegisterInfoProvider";
import {
  useClient,
  useToken,
} from "@khlug/components/ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import Button from "@khlug/components/Button";
import TextButton from "@khlug/components/TextButton";

export default function EmailOtpVerifyForm() {
  const [memberRegisterInfo, load] = useRegister();
  const client = useClient();
  const [, setToken] = useToken();

  const [message, setMessage] = useState<string | null>(null);
  const [otp, setOtp] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [retryLoading, setRetryLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    if (loading) return;

    try {
      await client.post("/members/@me/verify", { otp });
      load();
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }

    setLoading(false);
  };

  const retryOtp = async () => {
    setMessage(null);
    setRetryLoading(true);
    if (retryLoading) return;

    try {
      await client.post("/members/verify-email");
    } catch (e) {
      setMessage(extractErrorMessage(e));
    }

    setRetryLoading(false);
  };

  const reset = async () => {
    setToken(null);
    location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      {message && <div className="error">{message}</div>}

      <label>참가자 정보 입력</label>
      <div className="description">
        입력하신 이메일로 도착한 인증코드를 입력해주세요. 인증코드는 5분 동안
        유효합니다.
        <br />
        인증코드가 도착하지 않았거나 인증코드의 유효 기간이 지났다면{" "}
        <TextButton
          className="text-sm"
          onClick={retryOtp}
          loading={retryLoading}
        >
          여기
        </TextButton>
        를 눌러 재시도해주세요.
        <br />
        잘못된 이메일을 입력해서, 처음부터 다시 진행하고 싶으시다면{" "}
        <TextButton onClick={reset} className="text-sm">
          여기
        </TextButton>
        를 눌러주세요.
        <br />
        <br />
        이메일을 찾을 수 없다면 스팸 메일함을 확인해주세요. 어디에서도
        인증코드를 담은 이메일을 찾을 수 없거나 지속적으로 문제를 겪고 계시다면
        관리자에게 연락해주세요.
      </div>
      <div className="input_wrap">
        <input type="email" value={memberRegisterInfo?.email} readOnly />
      </div>
      <div className="input_wrap">
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value.toUpperCase())}
          placeholder="OTP"
          required
        />
      </div>
      <Button className="w-full py-2.5 my-4" formSubmit loading={loading}>
        인증하기
      </Button>
    </form>
  );
}
