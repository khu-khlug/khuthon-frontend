"use client";

import { useToken } from "@khlug/components/ClientProvider/ClientProvider";
import Judge from "@khlug/components/judge/Judge/Judge";
import JudgeLoginForm from "@khlug/components/judge/JudgeLoginForm/JudgeLoginForm";
import { isTokenFor } from "@khlug/util/isTokenFor";

export default function JudgePage() {
  const [token, setToken] = useToken();

  if (token && !isTokenFor(token, "EXAMINER")) {
    setToken(null);
  }

  return token ? <Judge /> : <JudgeLoginForm />;
}
