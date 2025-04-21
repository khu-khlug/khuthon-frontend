"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  useClient,
  useToken,
} from "@khlug/components/ClientProvider/ClientProvider";
import Button from "@khlug/components/Button";
import FancyInput from "../FancyInput";

import styles from "./style.module.css";

interface MemberRegisterFormProps {
  onSuccess: () => void;
  onError: (error: string) => void;
}

export default function MemberRegisterForm({
  onSuccess,
  onError,
}: MemberRegisterFormProps) {
  const router = useRouter();
  const client = useClient();
  const [, setToken] = useToken();

  const [formData, setFormData] = useState({
    studentNumber: "",
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // 입력 시 해당 필드의 에러 메시지 제거
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // 학번 검증
    if (!formData.studentNumber) {
      newErrors.studentNumber = "학번을 입력해주세요";
    } else if (!/^\d{8,10}$/.test(formData.studentNumber)) {
      newErrors.studentNumber = "올바른 학번 형식이 아닙니다 (8-10자리 숫자)";
    }

    // 이름 검증
    if (!formData.name) {
      newErrors.name = "이름을 입력해주세요";
    }

    // 전화번호 검증
    if (!formData.phone) {
      newErrors.phone = "전화번호를 입력해주세요";
    } else if (
      !/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(formData.phone)
    ) {
      newErrors.phone = "올바른 전화번호 형식이 아닙니다";
    }

    // 이메일 검증
    if (!formData.email) {
      newErrors.email = "이메일을 입력해주세요";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "올바른 이메일 형식이 아닙니다";
    }

    // 비밀번호 검증
    if (!formData.password) {
      newErrors.password = "비밀번호를 입력해주세요";
    } else if (formData.password.length < 8) {
      newErrors.password = "비밀번호는 8자 이상이어야 합니다";
    }

    // 비밀번호 확인 검증
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await client.post("/members", {
        studentNumber: formData.studentNumber,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        password: formData.password,
      });

      // 토큰 설정
      if (response.data.token) {
        setToken(response.data.token);
      }

      onSuccess();
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "회원가입에 실패했습니다";
      onError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>회원가입</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <FancyInput
          label="학번"
          name="studentNumber"
          value={formData.studentNumber}
          onChange={handleChange}
          placeholder="예: 20221234"
          error={errors.studentNumber}
        />

        <FancyInput
          label="이름"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="이름을 입력하세요"
          error={errors.name}
        />

        <FancyInput
          label="전화번호"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="예: 010-1234-5678"
          error={errors.phone}
        />

        <FancyInput
          label="이메일"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="이메일 주소를 입력하세요"
          error={errors.email}
        />

        <FancyInput
          label="비밀번호"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="비밀번호를 입력하세요 (8자 이상)"
          error={errors.password}
        />

        <FancyInput
          label="비밀번호 확인"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="비밀번호를 다시 입력하세요"
          error={errors.confirmPassword}
        />

        <Button className={styles.submitButton} loading={loading} formSubmit>
          회원가입
        </Button>
      </form>
    </div>
  );
}
