"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { MemberState, University } from "@khlug/constant";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { useClient } from "@khlug/components/ClientProvider/ClientProvider";

type Props = {
  children: React.ReactNode;
  onError: (message: string) => void;
};

type MemberRegisterInfo = {
  id: string;
  email: string;
  university: University;
  state: MemberState;
};
type MemberRegisterInfoLoader = () => Promise<void>;

const MemberRegisterInfoContext = createContext<
  [MemberRegisterInfo | null, MemberRegisterInfoLoader]
>([null, async () => {}]);

export default function MemberRegisterInfoProvider({
  children,
  onError,
}: Props) {
  const [memberRegisterInfo, setMemberRegisterInfo] =
    useState<MemberRegisterInfo | null>(null);
  const client = useClient();

  const load: MemberRegisterInfoLoader = useCallback(async () => {
    try {
      const { data } = await client.get<MemberRegisterInfo>("/member");

      setMemberRegisterInfo({
        id: data.id,
        email: data.email,
        university: data.university,
        state: data.state,
      });
    } catch (e) {
      onError(extractErrorMessage(e));
    }
  }, [client, onError]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <MemberRegisterInfoContext.Provider value={[memberRegisterInfo, load]}>
      {children}
    </MemberRegisterInfoContext.Provider>
  );
}

export function useRegister() {
  return useContext(MemberRegisterInfoContext);
}
