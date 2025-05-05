import ClientProvider from "@khlug/components/ClientProvider/ClientProvider";
import EventProvider from "@khlug/components/EventProvider/EventProvider";
import GlobalSpinnerProvider from "@khlug/components/GlobalSpinnerProvider/GlobalSpinnerProvider";
import MemberConfigProvider from "./components/MemberConfigProvider";

type Props = {
  children: React.ReactNode;
};

export default function TeamLayout({ children }: Props) {
  return (
    <GlobalSpinnerProvider>
      <EventProvider>
        <ClientProvider>
          <MemberConfigProvider>{children}</MemberConfigProvider>
        </ClientProvider>
      </EventProvider>
    </GlobalSpinnerProvider>
  );
}
