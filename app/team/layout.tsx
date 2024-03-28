import ClientProvider from "@khlug/components/ClientProvider/ClientProvider";
import EventProvider from "@khlug/components/EventProvider/EventProvider";
import GlobalSpinnerProvider from "@khlug/components/GlobalSpinnerProvider/GlobalSpinnerProvider";

type Props = {
  children: React.ReactNode;
};

export default function TeamLayout({ children }: Props) {
  return (
    <GlobalSpinnerProvider>
      <EventProvider>
        <ClientProvider>{children}</ClientProvider>
      </EventProvider>
    </GlobalSpinnerProvider>
  );
}
