"use client";

import Callout from "@khlug/components/Callout/Callout";
import { useToken } from "@khlug/components/ClientProvider/ClientProvider";
import Container from "@khlug/components/Container/Container";
import AcceptManagerInvitationContainer from "@khlug/components/manager/AcceptManagerInvitationContainer";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function AcceptManagerInvitationPage() {
  const params = useSearchParams();
  const [, setToken] = useToken();

  const token = params.get("token");

  useEffect(() => {
    setToken(null);
  }, [setToken]);

  return (
    <Container>
      {token ? (
        <AcceptManagerInvitationContainer token={token} />
      ) : (
        <Callout>초대를 받을 수 없습니다.</Callout>
      )}
    </Container>
  );
}
