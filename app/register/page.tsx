"use client";

import { useEvent } from "@khlug/components/EventProvider/EventProvider";
import Container from "@khlug/components/Container/Container";
import RegisterGuideContainer from "@khlug/components/register/RegisterGuideContainer/RegisterGuideContainer";
import RegisterCrossroad from "@khlug/components/register/RegisterCrossroad/RegisterCrossroad";
import MemberRegisterInfoProvider from "@khlug/components/register/MemberRegisterInfoProvider/MemberRegisterInfoProvider";
import { useState } from "react";

type MockEvent = {
  isLimitExceed: boolean;
};

export default function RegisterPage() {
  const event = useEvent();
  const [message, setMessage] = useState<string | null>(null);

  const mockEvent: MockEvent = {
    isLimitExceed: false,
  };

  return (
    <>
      <RegisterGuideContainer />
      <Container>
        {message && <div className="error">{message}</div>}
        {
          /* {event.registerRange === "BEFORE" ? (
          <Callout>접수 기간이 아닙니다.</Callout>
        ) : mockEvent.isLimitExceed ? (
          <Callout>접수 인원이 초과되었습니다.</Callout>
        ) : event.registerRange === "AFTER" ? (
          <Callout>접수가 마감되었습니다.</Callout>
        ) :  */
          <MemberRegisterInfoProvider onError={setMessage}>
            <RegisterCrossroad />
          </MemberRegisterInfoProvider>
          /* } */
        }
      </Container>
    </>
  );
}
