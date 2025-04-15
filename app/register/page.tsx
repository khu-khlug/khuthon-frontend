"use client";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { useEffect, useState } from "react";

import { useEvent } from "@khlug/components/EventProvider/EventProvider";
import Container from "@khlug/components/Container/Container";
import RegisterGuideContainer from "@khlug/app/register/components/RegisterGuideContainer";
import RegisterCrossroad from "@khlug/app/register/components/RegisterCrossroad";
import MemberRegisterInfoProvider from "@khlug/app/register/components/MemberRegisterInfoProvider/MemberRegisterInfoProvider";
import Callout from "@khlug/components/Callout/Callout";
import { useToken } from "@khlug/components/ClientProvider/ClientProvider";
import { isTokenFor } from "@khlug/util/isTokenFor";
import AlimtalkGuideContainer from "@khlug/app/register/components/AlimtalkGuideContainer";

dayjs.extend(timezone);
dayjs.extend(utc);

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
      <AlimtalkGuideContainer />
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
