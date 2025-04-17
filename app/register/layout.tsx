import ClientProvider from "@khlug/components/ClientProvider/ClientProvider";
import EventProvider from "@khlug/components/EventProvider/EventProvider";
import GlobalSpinnerProvider from "@khlug/components/GlobalSpinnerProvider/GlobalSpinnerProvider";

import styles from "./layout.module.css";

type Props = {
  children: React.ReactNode;
};

export default function NewRegisterLayout({ children }: Props) {
  return (
    <GlobalSpinnerProvider>
      <EventProvider>
        <ClientProvider>
          <div className={styles["reset-white-bg"]}>{children}</div>
        </ClientProvider>
      </EventProvider>
    </GlobalSpinnerProvider>
  );
}
