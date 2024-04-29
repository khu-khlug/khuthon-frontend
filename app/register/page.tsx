"use client";

import { useEffect, useState } from "react";

import { useEvent } from "@khlug/components/EventProvider/EventProvider";
import Container from "@khlug/components/Container/Container";
import RegisterGuideContainer from "@khlug/components/register/RegisterGuideContainer";
import RegisterCrossroad from "@khlug/components/register/RegisterCrossroad/RegisterCrossroad";
import MemberRegisterInfoProvider from "@khlug/components/register/MemberRegisterInfoProvider/MemberRegisterInfoProvider";
import Callout from "@khlug/components/Callout/Callout";
import { useToken } from "@khlug/components/ClientProvider/ClientProvider";
import { isTokenFor } from "@khlug/util/isTokenFor";
import AlimtalkGuideContainer from "@khlug/components/register/AlimtalkGuideContainer";

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
          <h3 class="subtitle relative Text__Main-Color">접수 일시 중단 안내</h3>
          <p class="sup">현재 접수 시스템에 문제가 발생하여 접수가 원활히 진행되지 않습니다.<br>
              그러나 간단히 수정할 수 없는 사항임을 확인하여 2024년 4월 29일 현시간부로 접수를 일시 중단합니다.<br><br>
              다만 선착순 접수의 특성상 접수 재개 시점이 공고되지 않을 경우 형평성 문제가 발생할 수 있습니다.<br>
              따라서 접수 재개 시점을 다음과 같이 공고해드리니 참고하시기 바랍니다.<br>
              접수 재개 시점: 2024년 4월 30일 오전 9시 00분<br><br>
              한편 이미 접수하신 분들은 다시 접수하실 필요는 없습니다.<br>
              불편을 드려 대단히 죄송합니다.<br><br>
              관련 문의 사항은 we_are@khlug.org 또는 사이트 하단의 채널톡으로 부탁드립니다.<br>
              감사합니다.
          </p>
      </Container>
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
