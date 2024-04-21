"use client";

import Callout from "@khlug/components/Callout/Callout";
import Container from "@khlug/components/Container/Container";
import NotificationContainer from "@khlug/components/notification/NotificationContainer";
import { useSearchParams } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default function NotificationPage({ params }: Props) {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  return token ? (
    <NotificationContainer notificationId={params.id} token={token} />
  ) : (
    <Container>
      <Callout>알 수 없는 메시지입니다.</Callout>
    </Container>
  );
}
