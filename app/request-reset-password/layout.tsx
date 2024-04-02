import ClientProvider from "@khlug/components/ClientProvider/ClientProvider";

type Props = {
  children: React.ReactNode;
};

export default function TeamLayout({ children }: Props) {
  return <ClientProvider>{children}</ClientProvider>;
}
