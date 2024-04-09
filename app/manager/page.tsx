"use client";

import { useToken } from "@khlug/components/ClientProvider/ClientProvider";
import ManagerLoginContainer from "@khlug/components/manager/ManagerLoginContainer/ManagerLoginContainer";
import { isTokenFor } from "@khlug/util/isTokenFor";
import { useEffect } from "react";

export default function ManagerPage() {
  const [token, setToken] = useToken();

  useEffect(() => {
    if (token && !isTokenFor(token, "MANAGER")) {
      setToken(null);
    }
  }, [token, setToken]);

  return token ? (
    <>
      <div>안녕!</div>
    </>
  ) : (
    <ManagerLoginContainer />
  );
}
