"use client";

import { useToken } from "@khlug/components/ClientProvider/ClientProvider";
import Judge from "@khlug/components/judge/Judge/Judge";
import ManagerLoginContainer from "@khlug/components/manager/ManagerLoginContainer/ManagerLoginContainer";
import { isTokenFor } from "@khlug/util/isTokenFor";

export default function ManagerPage() {
  const [token, setToken] = useToken();

  if (token && !isTokenFor(token, "MANAGER")) {
    setToken(null);
  }

  return token ? <Judge /> : <ManagerLoginContainer />;
}
