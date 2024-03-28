"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import Spinner from "@khlug/components/Spinner/Spinner";

type Props = {
  children: React.ReactNode;
};

type AddContextFn = (key: string) => void;
type RemoveContextFn = (key: string) => void;

const GlobalSpinnerContext = createContext<[AddContextFn, RemoveContextFn]>([
  () => {},
  () => {},
]);

export default function GlobalSpinnerProvider({ children }: Props) {
  const [hasContext, setHasContext] = useState<boolean>(false);
  const contextRef = useRef<string[]>([]);

  const addContext = useCallback((key: string) => {
    contextRef.current.push(key);
    setHasContext(true);
  }, []);

  const removeContext = useCallback((key: string) => {
    contextRef.current = contextRef.current.filter((item) => item !== key);
    setHasContext(contextRef.current.length > 0);
  }, []);

  return (
    <>
      <GlobalSpinnerContext.Provider value={[addContext, removeContext]}>
        {children}
      </GlobalSpinnerContext.Provider>
      {hasContext && <Spinner />}
    </>
  );
}

export function useGlobalSpinner() {
  return useContext(GlobalSpinnerContext);
}
