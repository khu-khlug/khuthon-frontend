"use client";

import ClientProvider from "@khlug/components/ClientProvider/ClientProvider";
import EventProvider from "@khlug/components/EventProvider/EventProvider";

type Props = {
  children: React.ReactNode;
};

export default function RegisterLayout({ children }: Props) {
  return (
    <EventProvider>
      <ClientProvider>{children}</ClientProvider>
    </EventProvider>
  );
}
