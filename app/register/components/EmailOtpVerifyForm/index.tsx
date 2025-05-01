"use client";

import React, { useState } from "react";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import Button from "@khlug/components/Button";
import TextField from "@khlug/components/TextField";

import TextButton from "@khlug/components/TextButton";
import { toast } from "react-toastify";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";

interface EmailOtpVerifyFormProps {
  onSuccess: () => void;
}

export default function EmailOtpVerifyForm({
  onSuccess,
}: EmailOtpVerifyFormProps) {
  const client = useClient();

  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState<string | undefined>();

  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  const handleChangeOtp = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
    setOtpError(undefined);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!otp) {
      setOtpError("인증 코드를 입력해주세요");
      return;
    }

    setLoading(true);

    try {
      await client.post("/members/@me/verify", { otp });
      onSuccess();
    } catch (err) {
      toast.error(extractErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResendLoading(true);

    try {
      await client.post("/members/@me/resend-verify-email");
      toast.success("인증 메일을 다시 보냈어요.");
    } catch (err) {
      toast.error(extractErrorMessage(err));
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-4xl">이메일 인증</h1>
      <p className="text-lg">
        앞서 입력한 학교 이메일 주소로 전송된 인증 코드를 입력해서 인증해요. 이
        단계를 통해 입력한 이메일 주소가 본인 것인지 확인하고, 재학 중인 학교를
        판단해요.
      </p>
      <p className="text-lg">
        전송된 인증 코드는 <strong>5분 동안</strong> 유효해요. 인증 코드를
        재전송하고 싶다면{" "}
        <TextButton
          className="text-lg font-bold"
          loading={resendLoading}
          onClick={handleResend}
        >
          여기
        </TextButton>
        를 눌러주세요.
      </p>
      <p className="text-lg italic">
        메일을 찾을 수 없다면 스팸 메일함을 확인해주세요.
      </p>

      <form onSubmit={handleSubmit}>
        <TextField
          label="인증 코드"
          description="입력하신 이메일로 전송된 인증 코드를 입력해주세요."
          placeholder="메일로 받은 인증 코드를 입력하세요"
          error={otpError}
          value={otp}
          onChange={handleChangeOtp}
        />

        <Button
          className="mt-8 h-12 w-full text-lg"
          loading={loading}
          formSubmit
        >
          다음 단계로
        </Button>
      </form>
    </div>
  );
}
