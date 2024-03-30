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
import {
  useClient,
  useToken,
} from "@khlug/components/ClientProvider/ClientProvider";

type Props = {
  children: React.ReactNode;
  onMessage: (message: string | null) => void;
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
  onMessage,
}: Props) {
  const [memberRegisterInfo, setMemberRegisterInfo] =
    useState<MemberRegisterInfo | null>(null);
  const client = useClient();
  const [token] = useToken();

  const load: MemberRegisterInfoLoader = useCallback(async () => {
    if (!token) {
      return;
    }
    onMessage(null);

    try {
      const { data } = await client.get<MemberRegisterInfo>("/member");

      setMemberRegisterInfo({
        id: data.id,
        email: data.email,
        university: data.university,
        state: data.state,
      });
    } catch (e) {
      onMessage(extractErrorMessage(e));
    }
  }, [token, client, onMessage]);

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
