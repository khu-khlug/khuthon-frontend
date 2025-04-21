"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";
import {
  useClient,
  useToken,
} from "@khlug/components/ClientProvider/ClientProvider";
import Button from "@khlug/components/Button";
import FancyInput from "../components/FancyInput";

import styles from "./style.module.css";
import { LoginAsMemberResponseDto } from "@khlug/transport/LoginAsMemberResponseDto";

export default function LoginPage() {
  const router = useRouter();
  const client = useClient();
  const [, setToken] = useToken();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError("이메일과 비밀번호를 모두 입력해주세요.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await client.post<LoginAsMemberResponseDto>(
        "/member/login",
        {
          email,
          password,
        }
      );

      setToken(response.data.token);
      router.push("/register/crossroad");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "로그인에 실패했습니다.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>로그인</h1>

      <div className={styles.formWrapper}>
        {error && <div className={styles.errorAlert}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <FancyInput
            label="이메일"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일 주소를 입력하세요"
            required
          />

          <FancyInput
            label="비밀번호"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
            required
          />

          <Button className={styles.submitButton} loading={loading} formSubmit>
            로그인
          </Button>

          <div className={styles.linkContainer}>
            <Link href="/register/crossroad" className={styles.link}>
              계정이 없으신가요? 회원가입
            </Link>
            <Link href="/request-reset-password" className={styles.link}>
              비밀번호를 잊으셨나요?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
