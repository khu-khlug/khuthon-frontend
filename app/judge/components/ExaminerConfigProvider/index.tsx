"use client";

import React, { createContext, useCallback, useEffect } from "react";
import { toast } from "react-toastify";

import {
  useClient,
  useToken,
} from "@khlug/components/ClientProvider/ClientProvider";
import { extractErrorMessage } from "@khlug/util/getErrorMessageFromAxiosError";
import { GetExaminerConfigsResponseDto } from "@khlug/transport/GetExaminerConfigsResponseDto";

const ExaminerConfigContext =
  createContext<GetExaminerConfigsResponseDto | null>(null);

type Props = {
  children?: React.ReactNode;
};

export default function ExaminerConfigProvider({ children }: Props) {
  const [token] = useToken();
  const client = useClient();
  const [configs, setConfigs] =
    React.useState<GetExaminerConfigsResponseDto | null>(null);

  const loadConfigs = useCallback(async () => {
    if (!token) {
      return;
    }

    try {
      const response = await client.get<GetExaminerConfigsResponseDto>(
        "/examiner-configs"
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
    <ExaminerConfigContext.Provider value={configs}>
      {children}
    </ExaminerConfigContext.Provider>
  );
}

export function useExaminerConfigs(): GetExaminerConfigsResponseDto | null {
  return React.useContext(ExaminerConfigContext);
}
