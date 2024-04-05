"use client";

import { useToken } from "@khlug/components/ClientProvider/ClientProvider";
import { NavItem } from "@khlug/components/Header/NavItem";
import ManagerLoginContainer from "@khlug/components/manager/ManagerLoginContainer/ManagerLoginContainer";
import MemberListContainer from "@khlug/components/manager/MemberListContainer/MemberListContainer";
import { isTokenFor } from "@khlug/util/isTokenFor";

export default function ManagerPage() {
  const [token, setToken] = useToken();

  if (token && !isTokenFor(token, "MANAGER")) {
    setToken(null);
  }

  return token ? (
    <>
      <div>안녕!</div>
    </>
  ) : (
    <ManagerLoginContainer />
  );
}
