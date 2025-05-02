"use client";

import React, { createContext, useContext, useState } from "react";

export type ShowModalFn = (modal: React.ReactNode) => void;
export type CloseModalFn = () => void;

const TeamModalContext = createContext<{
  show: ShowModalFn;
  close: CloseModalFn;
}>({
  show: () => {},
  close: () => {},
});

type Props = {
  children?: React.ReactNode;
};
export default function TeamManageModalProvider({ children }: Props) {
  const [currentModal, setCurrentModal] = useState<React.ReactNode | null>(
    null
  );

  const show: ShowModalFn = (modal) => setCurrentModal(modal);
  const close: CloseModalFn = () => setCurrentModal(null);
  return (
    <TeamModalContext.Provider value={{ show, close }}>
      {children}
      {currentModal && (
        <div className="top-0 left-0 w-full h-full bg-black/30 fixed p-4 flex justify-center items-center box-border z-50">
          {currentModal}
        </div>
      )}
    </TeamModalContext.Provider>
  );
}

export function useTeamManageModal() {
  return useContext(TeamModalContext);
}
