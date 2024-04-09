"use client";

import InviteManagerContainer from "@khlug/components/manager/InviteManagerContainer";
import ManagerListContainer from "@khlug/components/manager/ManagerListContainer";

export default function ManagersPage() {
  return (
    <>
      <ManagerListContainer />
      <InviteManagerContainer />
    </>
  );
}
