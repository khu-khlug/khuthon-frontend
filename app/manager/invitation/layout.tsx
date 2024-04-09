import { Suspense } from "react";

type Props = {
  children: React.ReactNode;
};

export default function TeamLayout({ children }: Props) {
  return <Suspense>{children}</Suspense>;
}
