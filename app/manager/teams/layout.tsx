import React from "react";
import TeamManageModalProvider from "./components/TeamManageModalProvider";

type Props = {
  children?: React.ReactNode;
};

export default function TeamManageLayout({ children }: Props) {
  return <TeamManageModalProvider>{children}</TeamManageModalProvider>;
}
