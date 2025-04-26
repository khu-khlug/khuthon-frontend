"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";

import {
  useClient,
  useToken,
} from "@khlug/components/ClientProvider/ClientProvider";
import Button from "@khlug/components/Button";
import FancyInput from "../components/FancyInput";
import { LoginAsMemberResponseDto } from "@khlug/transport/LoginAsMemberResponseDto";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";

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
      toast.error(extractErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl px-4 py-8 m-auto">
      <h1 className="text-4xl">참가 절차 이어하기</h1>
      <p className="text-lg">
        이전에 입력한 계정 정보를 입력하여 참가 절차를 이어서 진행할 수 있어요.
        <br />
        만약 계정이 없다면, 참가 절차를 처음부터 진행해주세요.
      </p>
      <p className="text-lg">
        만약 비밀번호가 기억나지 않는다면,{" "}
        <Link
          className="text-black hover:text-black/60 font-bold underline-offset-2"
          href="/request-reset-password"
        >
          여기서
        </Link>{" "}
        비밀번호를 재설정할 수 있어요.
      </p>

      <div>
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

          <Button
            className="mt-8 h-12 w-full text-lg"
            loading={loading}
            formSubmit
          >
            로그인
          </Button>
        </form>
      </div>
    </div>
  );
}
