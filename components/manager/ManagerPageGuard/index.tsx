import { useToken } from "@khlug/components/ClientProvider/ClientProvider";
import { isTokenFor } from "@khlug/util/isTokenFor";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const allowedPaths = ["/manager", "/manager/invitation"];

export default function ManagerPageGuard({ children }: Props) {
  const [token, setToken] = useToken();
  const path = usePathname();

  useEffect(() => {
    const hasValidToken = token && isTokenFor(token, "MANAGER");
    const isAllowedPath = allowedPaths.includes(path);

    if (!isAllowedPath && !hasValidToken) {
      setToken(null);
      window.location.href = "/manager";
    }
  }, [path, token, setToken]);

  return <>{children}</>;
}
