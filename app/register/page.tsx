"use client";

import { useEffect, useState } from "react";

import { useEvent } from "@khlug/components/EventProvider/EventProvider";
import Container from "@khlug/components/Container/Container";
import RegisterGuideContainer from "@khlug/components/register/RegisterGuideContainer/RegisterGuideContainer";
import RegisterCrossroad from "@khlug/components/register/RegisterCrossroad/RegisterCrossroad";
import MemberRegisterInfoProvider from "@khlug/components/register/MemberRegisterInfoProvider/MemberRegisterInfoProvider";
import Callout from "@khlug/components/Callout/Callout";
import { useToken } from "@khlug/components/ClientProvider/ClientProvider";
import { isTokenFor } from "@khlug/util/isTokenFor";

export default function RegisterPage() {
  const event = useEvent();
  const [message, setMessage] = useState<string | null>(null);
  const [token, setToken] = useToken();

  useEffect(() => {
    if (token && !isTokenFor(token, "MEMBER")) {
      setToken(null);
    }
  }, [token, setToken]);

  return (
    <>
      <RegisterGuideContainer />
      <Container>
        {message && <div className="error">{message}</div>}
        {event.registerRange === "BEFORE" ? (
          <Callout>접수 기간이 아닙니다.</Callout>
        ) : event.registerRange === "AFTER" ? (
          <Callout>접수가 마감되었습니다.</Callout>
        ) : (
          <MemberRegisterInfoProvider onMessage={setMessage}>
            <RegisterCrossroad />
          </MemberRegisterInfoProvider>
        )}
      </Container>
    </>
  );
}
