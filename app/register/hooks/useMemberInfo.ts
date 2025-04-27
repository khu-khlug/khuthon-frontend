"use client";

import { useCallback, useEffect, useState } from "react";
import { MemberState } from "@khlug/constant";
import {
  useClient,
  useToken,
} from "@khlug/components/ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";

type MemberRegisterInfo = {
  id: string;
  state: MemberState;
  team: {
    id: string;
    name: string;
    confirmed: boolean;
  } | null;
};

export function useMemberInfo(): [
  MemberRegisterInfo | null,
  () => Promise<void>,
  string | null
] {
  const [memberInfo, setMemberInfo] = useState<MemberRegisterInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const client = useClient();
  const [token] = useToken();

  const loadMemberInfo = useCallback(async () => {
    if (!token) {
      setMemberInfo(null);
      return;
    }

    setError(null);
    try {
      const { data } = await client.get<MemberRegisterInfo>("/members/@me");
      setMemberInfo(data);
    } catch (err) {
      setError(extractErrorMessage(err));
    }
  }, [token, client]);

  useEffect(() => {
    loadMemberInfo();
  }, [loadMemberInfo]);

  return [memberInfo, loadMemberInfo, error];
}
