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
        <NavItem href="/manager/notice" className="mx-2">
          공지
        </NavItem>
        <NavItem href="/manager/managers" className="mx-2">
          운영진
        </NavItem>
        <NavItem href="/manager/examiners" className="mx-2">
          심사위원
        </NavItem>
        <NavItem href="/manager/logs" className="mx-2">
          로그
        </NavItem>
      </div>
    )
  );
}
