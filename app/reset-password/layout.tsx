import ClientProvider from "@khlug/components/ClientProvider/ClientProvider";
import { Suspense } from "react";

type Props = {
  children: React.ReactNode;
};

export default function TeamLayout({ children }: Props) {
  return (
    <ClientProvider>
      <Suspense>{children}</Suspense>
    </ClientProvider>
  );
}
