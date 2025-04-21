"use client";

import React, { useState } from "react";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";
import Button from "@khlug/components/Button";
import FancyInput from "../FancyInput";

import styles from "./style.module.css";

interface EmailOtpVerifyFormProps {
  email?: string;
  onSuccess: () => void;
  onError: (error: string) => void;
}

export default function EmailOtpVerifyForm({
  email,
  onSuccess,
  onError,
}: EmailOtpVerifyFormProps) {
  const client = useClient();

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resendSuccess, setResendSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!otp) {
      setError("인증 코드를 입력해주세요");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await client.post("/members/@me/verify", { otp });
      onSuccess();
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "인증에 실패했습니다";
      setError(errorMessage);
      onError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResendLoading(true);
    setResendSuccess(false);
    setError(null);

    try {
      await client.post("/members/@me/resend-verify-email");
      setResendSuccess(true);
      setTimeout(() => {
        setResendSuccess(false);
      }, 5000); // 5초 후 성공 메시지 사라짐
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "인증 메일 재전송에 실패했습니다";
      setError(errorMessage);
      onError(errorMessage);
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>이메일 인증</h1>

      <p className={styles.description}>
        {email ? (
          <>
            <strong>{email}</strong>로
          </>
        ) : (
          "입력하신 이메일로"
        )}{" "}
        인증 코드가 전송되었습니다. 메일함에서 확인해주세요.
      </p>

      <p className={styles.hint}>
        메일을 찾을 수 없다면 스팸 메일함을 확인해주세요.
      </p>

      {resendSuccess && (
        <div className={styles.successAlert}>
          인증 메일이 재전송되었습니다. 메일함을 확인해주세요.
        </div>
      )}

      {error && <div className={styles.errorAlert}>{error}</div>}

      <form className={styles.form} onSubmit={handleSubmit}>
        <FancyInput
          label="인증 코드"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="메일로 받은 인증 코드를 입력하세요"
        />

        <Button className={styles.submitButton} loading={loading} formSubmit>
          인증 확인
        </Button>

        <button
          type="button"
          className={styles.resendButton}
          onClick={handleResend}
          disabled={resendLoading}
        >
          {resendLoading ? "재전송 중..." : "인증 코드 다시 보내기"}
        </button>
      </form>
    </div>
  );
}
