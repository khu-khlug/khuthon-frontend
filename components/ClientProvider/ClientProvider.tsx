"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios, { AxiosInstance, isAxiosError } from "axios";

type Props = {
  children: React.ReactNode;
};

type TokenSetterOptions = {
  persist?: boolean;
};

type TokenSetter = (token: string | null, options?: TokenSetterOptions) => void;
const ClientContext = createContext<AxiosInstance | null>(null);
const TokenContext = createContext<[string | null, TokenSetter]>([
  null,
  () => {},
]);

export default function ClientProvider({ children }: Props) {
  const [token, _setToken] = useState<string | null>(null);

  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      "Content-Type": "application/json",
    },
  });
  client.interceptors.response.use(null, (e) => {
    if (isAxiosError(e) && e.response?.status === 401) {
      setToken(null);
    }
    return Promise.reject(e);
  });

  const setToken: TokenSetter = (token, options = {}) => {
    if (options.persist ?? true) {
      if (token) {
        localStorage.setItem("token", token);
      } else {
        localStorage.removeItem("token");
      }
    }
    _setToken(token);
  };

  useEffect(() => {
    const prevToken = localStorage.getItem("token");
    if (prevToken) {
      _setToken(prevToken);
    }
  }, []);

  return (
    <ClientContext.Provider value={client}>
      <TokenContext.Provider value={[token, setToken]}>
        {children}
      </TokenContext.Provider>
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

export function useToken() {
  return useContext(TokenContext);
}
