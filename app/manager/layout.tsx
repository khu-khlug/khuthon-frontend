"use client";

import ClientProvider from "@khlug/components/ClientProvider/ClientProvider";
import EventProvider from "@khlug/components/EventProvider/EventProvider";
import GlobalSpinnerProvider from "@khlug/components/GlobalSpinnerProvider/GlobalSpinnerProvider";
import ManagerNav from "@khlug/components/manager/ManagerNav/ManagerNav";
import ManagerPageGuard from "@khlug/components/manager/ManagerPageGuard";

type Props = {
  children: React.ReactNode;
};

export default function RegisterLayout({ children }: Props) {
  return (
    <GlobalSpinnerProvider>
      <EventProvider>
        <ClientProvider>
          <ManagerPageGuard>
            <ManagerNav />
            {children}
          </ManagerPageGuard>
        </ClientProvider>
      </EventProvider>
    </GlobalSpinnerProvider>
  );
}
