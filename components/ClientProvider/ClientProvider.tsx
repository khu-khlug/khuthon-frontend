"use client";

import { createContext, useContext, useState } from "react";
import axios, { AxiosInstance } from "axios";

type Props = {
  children: React.ReactNode;
};

type TokenSetter = (token: string) => void;
const ClientContext = createContext<AxiosInstance | null>(null);
const TokenSetterContext = createContext<TokenSetter>(() => {});

export default function ClientProvider({ children }: Props) {
  const [token, setToken] = useState<string | null>(null);

  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      "Content-Type": "application/json",
    },
  });

  return (
    <ClientContext.Provider value={client}>
      <TokenSetterContext.Provider value={setToken}>
        {children}
      </TokenSetterContext.Provider>
    </ClientContext.Provider>
  );
}

export function useClient() {
  const client = useContext(ClientContext);
  if (!client) {
    throw new Error("Client is not provided");
  }
  return client;
}

export function useTokenSetter() {
  return useContext(TokenSetterContext);
}
