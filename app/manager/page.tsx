"use client";

import Callout from "@khlug/components/Callout/Callout";
import { useToken } from "@khlug/components/ClientProvider/ClientProvider";
import Container from "@khlug/components/Container/Container";
import ManagerLoginContainer from "@khlug/components/manager/ManagerLoginContainer/ManagerLoginContainer";

export default function ManagerPage() {
  const [token] = useToken();

  return token ? (
    <>
      <Container>
        <Callout>
          <span className="text-2xl font-bold">
            본 페이지는 보안등급 2급으로 운영진 및 관계자만 볼 수 있습니다.
          </span>
          <br />
          <span className="text-xl">
            보안에 각별히 신경을 써주시기 바랍니다.
          </span>
        </Callout>
      </Container>
    </>
  ) : (
    <ManagerLoginContainer />
  );
}
