"use client";

import ClientProvider from "@khlug/components/ClientProvider/ClientProvider";
import EventProvider from "@khlug/components/EventProvider/EventProvider";
import GlobalSpinnerProvider from "@khlug/components/GlobalSpinnerProvider/GlobalSpinnerProvider";
import ExaminerConfigProvider from "./components/ExaminerConfigProvider";

type Props = {
  children: React.ReactNode;
};

export default function RegisterLayout({ children }: Props) {
  return (
    <GlobalSpinnerProvider>
      <EventProvider>
        <ClientProvider>
          <ExaminerConfigProvider>{children}</ExaminerConfigProvider>
        </ClientProvider>
      </EventProvider>
    </GlobalSpinnerProvider>
  );
}
