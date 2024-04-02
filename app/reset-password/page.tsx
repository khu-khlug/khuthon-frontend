"use client";

import Callout from "@khlug/components/Callout/Callout";
import Container from "@khlug/components/Container/Container";
import ResetPasswordForm from "@khlug/components/ResetPasswordForm/ResetPasswordForm";
import { useSearchParams } from "next/navigation";

export default function ResetPasswordPage() {
  const params = useSearchParams();

  const token = params.get("token");

  return (
    <Container>
      {token ? (
        <ResetPasswordForm token={token} />
      ) : (
        <Callout>비밀번호를 재설정할 수 없습니다.</Callout>
      )}
    </Container>
  );
}
