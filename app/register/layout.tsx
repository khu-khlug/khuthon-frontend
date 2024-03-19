"use client";

import EventProvider from "@khlug/components/EventProvider/EventProvider";

type Props = {
  children: React.ReactNode;
};

export default function RegisterLayout({ children }: Props) {
  return <EventProvider>{children}</EventProvider>;
}
