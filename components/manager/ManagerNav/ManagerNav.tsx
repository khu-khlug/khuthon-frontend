import { useToken } from "@khlug/components/ClientProvider/ClientProvider";
import { NavItem } from "@khlug/components/Header/NavItem";

export default function ManagerNav() {
  const [token] = useToken();

  return (
    token && (
      <div className="navigation">
        <NavItem href="/manager" className="mx-2">
          홈
        </NavItem>
        <NavItem href="/manager/members" className="mx-2">
          참가자
        </NavItem>
        <NavItem href="/manager/teams" className="mx-2">
          팀
        </NavItem>
      </div>
    )
  );
}
