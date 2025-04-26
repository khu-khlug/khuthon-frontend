"use client";

import React, { useState } from "react";
import {
  useClient,
  useToken,
} from "@khlug/components/ClientProvider/ClientProvider";
import Button from "@khlug/components/Button";
import FancyInput from "../FancyInput";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { EmailDomain, UniversityName } from "@khlug/constant";
import { toast } from "react-toastify";

type Props = {
  onSuccess: () => void;
};

type FormValidationError = {
  studentNumber?: string;
  name?: string;
  phone?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export default function MemberRegisterForm({ onSuccess }: Props) {
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

  const availableUnivNames = Object.values(UniversityName).sort().join(", ");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: FormValidationError = {};

    if (!formData.studentNumber) {
      newErrors.studentNumber = "학번을 입력해주세요";
    } else if (!/^\d{8,10}$/.test(formData.studentNumber)) {
      newErrors.studentNumber =
        "올바른 학번 형식이 아니에요. 학번은 8~10자리 숫자여야 해요.";
    }

    if (!formData.name) {
      newErrors.name = "이름을 입력해주세요";
    } else if (formData.name.length < 2 || formData.name.length > 40) {
      newErrors.name =
        "이름이 너무 짧거나 길어요. 2자 이상, 40자 이하로 입력해주세요.";
    }

    if (!formData.phone) {
      newErrors.phone = "휴대폰 번호를 입력해주세요";
    } else if (!/^010-([0-9]{4})-([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone =
        "올바른 휴대폰 번호의 형식이 아니에요. `010-1234-5678` 형식으로 입력해주세요.";
    }

    if (!formData.email) {
      newErrors.email = "이메일을 입력해주세요";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "올바른 이메일 형식이 아니에요.";
    } else if (Object.values(EmailDomain).flat().includes(formData.email)) {
      newErrors.email = "참가 가능한 학교 이메일 주소를 입력해주세요.";
    }

    if (!formData.password) {
      newErrors.password = "비밀번호를 입력해주세요";
    } else if (
      formData.password.length < 10 ||
      formData.password.length > 100
    ) {
      newErrors.password =
        "비밀번호가 너무 짧거나 길어요. 10자 이상, 100자 이하로 입력해주세요.";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "입력한 비밀번호가 일치하지 않아요.";
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
      toast.error(extractErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-4xl">참가자 정보 입력</h1>
      <p className="text-lg">
        참가자를 구별하고, 대회 관련 연락을 위해 여러분의 정보를 입력 받아요.
        <br />
        모든 정보를 <strong>정확하게</strong> 입력해주세요. 잘못된 정보로 인한
        모든 불이익은 쿠러그에서 책임지지 않습니다.
      </p>

      <form onSubmit={handleSubmit}>
        <FancyInput
          label="학번"
          name="studentNumber"
          value={formData.studentNumber}
          onChange={handleChange}
          placeholder="예: 2021000000"
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
          label="휴대폰 번호"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="예: 010-1234-5678"
          error={errors.phone}
        />

        <FancyInput
          label="학교 이메일 주소"
          description={`${availableUnivNames}의 이메일만 가능해요.`}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="학교 이메일 주소를 입력하세요"
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
