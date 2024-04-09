"use client";

import { useToken } from "@khlug/components/ClientProvider/ClientProvider";
import Judge from "@khlug/components/judge/Judge/Judge";
import JudgeLoginForm from "@khlug/components/judge/JudgeLoginForm/JudgeLoginForm";
import { isTokenFor } from "@khlug/util/isTokenFor";
import { useEffect } from "react";

export default function JudgePage() {
  const [token, setToken] = useToken();

  useEffect(() => {
    if (token && !isTokenFor(token, "EXAMINER")) {
      setToken(null);
    }
  }, [token, setToken]);

  return token ? <Judge /> : <JudgeLoginForm />;
}
