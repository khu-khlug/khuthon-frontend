"use client";

import React, { createContext, useCallback, useEffect } from "react";
import { toast } from "react-toastify";

import {
  useClient,
  useToken,
} from "@khlug/components/ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { GetMemberConfigsResponseDto } from "@khlug/transport/GetMemberConfigsResponseDto";

const MemberConfigContext = createContext<GetMemberConfigsResponseDto | null>(
  null
);

type Props = {
  children?: React.ReactNode;
};

export default function MemberConfigProvider({ children }: Props) {
  const [token] = useToken();
  const client = useClient();
  const [configs, setConfigs] =
    React.useState<GetMemberConfigsResponseDto | null>(null);

  const loadConfigs = useCallback(async () => {
    if (!token) {
      return;
    }

    try {
      const response = await client.get<GetMemberConfigsResponseDto>(
        "/member-configs"
      );
      setConfigs(response.data);
    } catch (e) {
      toast.error(extractErrorMessage(e));
    }
  }, [client, token]);

  useEffect(() => {
    loadConfigs();
  }, [loadConfigs]);

  return (
    <MemberConfigContext.Provider value={configs}>
      {children}
    </MemberConfigContext.Provider>
  );
}

export function useMemberConfigs(): GetMemberConfigsResponseDto | null {
  return React.useContext(MemberConfigContext);
}
