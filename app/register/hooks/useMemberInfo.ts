"use client";

import { useCallback, useEffect, useState } from "react";
import { MemberState } from "@khlug/constant";
import {
  useClient,
  useToken,
} from "@khlug/components/ClientProvider/ClientProvider";

export interface MemberRegisterInfo {
  id: string;
  email: string;
  university: string;
  state: MemberState;
  name: string;
  phone: string;
  studentNumber: string;
}

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
      const errorMessage =
        err instanceof Error
          ? err.message
          : "회원 정보를 불러오는데 실패했습니다.";
      setError(errorMessage);
    }
  }, [token, client]);

  useEffect(() => {
    loadMemberInfo();
  }, [loadMemberInfo]);

  return [memberInfo, loadMemberInfo, error];
}
